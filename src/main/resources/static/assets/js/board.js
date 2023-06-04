const BOARD_URL = "/board";

/* Navigation */

const contentBoard = document.querySelectorAll("#content-board>div");
const boardNav = document.querySelectorAll("#board-nav>input");
const BOARD_NOTICE = "notice";
const BOARD_FREE = "free";
document.getElementById("nav-board").addEventListener("click", () => {
    if (USER_INFO) {
        closeAllContent();
        openContentById("content-board", "container");
        boardNav[0].click();
    } else {
        alert("로그인 후 이용하세요");
        moveUserLogin();
    }

});

boardNav[0].addEventListener("click", () => {
    closeAllCommunityContent();
    openContentById("board-notice", "container");

    boardList(BOARD_NOTICE, 1);
});

boardNav[1].addEventListener("click", () => {
    closeAllCommunityContent();
    openContentById("board-free", "container")

    boardList(BOARD_FREE, 1);
});

function moveDetail(boardId) {

    closeAllCommunityContent();
    openContentById("board-free-detail", "container");

    boardDetail(boardId);
}


document.getElementById("board-free-write-start").addEventListener("click", () => {
    closeAllCommunityContent();
    openContentById("board-free-write", "container");
});
document.getElementById("board-free-write-end").addEventListener("click", () => {
    closeAllCommunityContent();
    openContentById("board-free", "container");

    boardRegist();
});

document.getElementById("board-free-detail-delete").addEventListener("click", () => {
    boardDelete(document.getElementById("board-free-detail-delete").value);
});
document.getElementById("board-free-detail-modify-start").addEventListener("click", () => {
    document.getElementById("board-free-detail-subject").disabled = false;
    document.getElementById("board-free-detail-content").disabled = false;
    openContentById("board-free-detail-delete", "d-none");
    openContentById("board-free-detail-modify-start", "d-none");
    openContentById("board-free-detail-modify-end", "btn btn-outline-dark float-end");

});
document.getElementById("board-free-detail-modify-end").addEventListener("click", () => {
    boardModify(document.getElementById("board-free-detail-modify-end").value);
});

document.getElementById("board-notice-write-start").addEventListener("click", () => {
});


/* Data */

async function boardList(type, page) {
    let url = BOARD_URL + "/list?page=" + page;

    console.log(url);
    let response = await fetch(url);

    if (response.status != 200) return;

    let json = await response.json();
    setBoardList(json.boards, type, page);
}

async function boardHit(boardId) {
    let url = BOARD_URL + "/hit/" + boardId;
    let option =
        {
            method: 'POST',
        }
    let response = await fetch(url, option);
    let json = await response.json();
    console.log(json);


}

async function boardDetail(boardId) {
    await boardHit(boardId);
    let url = BOARD_URL + "/detail/" + boardId;

    let option =
        {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        }


    let response = await fetch(url, option);
    let json = await response.json();
    console.log(json);
    setBoardDetail(json?.response);
}

async function boardRegist() {

    let board =
        {
            subject: document.getElementById("board-free-write-subject").value,
            content: document.getElementById("board-free-write-content").value,
        }

    let url = '/board/write';
    let option = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(board),
    }

    let response = await fetch(url, option);
    let json = await response.json();

    console.log(json);
    boardNav[1].click();
}

async function boardModify(boardId) {
    let requestUrl = '/board/' + boardId;

    let board = {
        boardId: document.getElementById("board-free-detail-modify-end").value,
        subject: document.getElementById("board-free-detail-subject").value,
        content: document.getElementById("board-free-detail-content").value,
    };

    let option = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(board),
    }

    let response = await fetch(requestUrl, option);
    let json = await response.json();
    console.log(json);
    if (json?.success === true) {
        alert("수정 성공!");
        document.getElementById("board-free-detail-subject").disabled = false;
        document.getElementById("board-free-detail-content").disabled = false;
        moveDetail(document.getElementById("board-free-detail-modify-end").value);
    } else {
        alert("수정 실패!");
    }
}

async function boardDelete(boardId) {
    let requestUrl = '/board/' + boardId;

    let option = {
        method: 'delete',
    }

    let response = await fetch(requestUrl, option);
    let json = await response.json();

    console.log(json);
    if (json?.success === true) {
        alert("삭제 성공!");
        boardNav[1].click();
    } else {
        alert("삭제 실패!");
    }
}


/* Util */

function closeAllCommunityContent() {
    for (let i = 1; i < contentBoard.length; i++) {
        contentBoard[i].setAttribute("class", "d-none");
    }
}

async function localBoardList(type) {
    let table = document.querySelector("#board-" + type + "> div> div> table");
    await boardList(type);
}

function setBoardList(boardList, type, nowPage) {

    let table = document.querySelector("#board-" + type + "> div> div> table");

    let thead = `            
         <thead>
            <tr>
                <th>No</th>
                <th>Subject</th>
                <th>ID</th>
                <th>Date</th>
                <th>Hit</th>
            </tr>
          </thead>`;
    table.innerHTML = thead;
    let tbody = '';
    for (let board of boardList.page) {
        tbody += `
               <tbody>
                     <tr onclick="moveDetail('${board.boardId}')">
                       <td>${board.boardId}</td>
                       <td>${board.subject}</td>
                       <td>${board.userId}</td>
                       <td>${board.currentUpdate}</td>
                       <td>${board.hit}</td>
                     </tr>
                   </tbody>
               `;
    }
    table.innerHTML = thead;
    table.innerHTML += tbody;

    let pagination = document.getElementById("paginav");

    pagination.innerHTML = `
<input type="radio" class="btn-check" id="board0" autoComplete="off">
<label class="btn btn-outline-dark" for="board0">Prev</label>
`;
    for (let i = 1; i <= boardList.endPage; i++) {
        if (i == nowPage) {
            pagination.innerHTML += ` 
  <input type="radio" class="btn-check" id="board${i}" autocomplete="off" onClick='boardList("${type}",${i})' checked>
  <label class="btn btn-outline-dark" for="board${i}">${i}</label>`;
        } else {
            pagination.innerHTML += ` 
  <input type="radio" class="btn-check" id="board${i}" autocomplete="off" onClick='boardList("${type}",${i})'>
  <label class="btn btn-outline-dark" for="board${i}">${i}</label>`;
        }
    }

    pagination.innerHTML += `
<input type="radio" class="btn-check" id="board${boardList.endPage + 1}" autoComplete="off">
<label class="btn btn-outline-dark" for="board${boardList.endPage + 1}">Next</label>
`;

}

function setBoardDetail(board) {
    let subject = document.getElementById("board-free-detail-subject");
    let content = document.getElementById("board-free-detail-content");

    subject.value = board.subject;
    content.value = board.content;
    subject.disabled = true;
    content.disabled = true;
    writer = board.userId;

    if (writer) {
        openContentById("board-free-detail-delete", "btn btn-outline-danger float-end");
        openContentById("board-free-detail-modify-start", "btn btn-outline-dark float-end");
        openContentById("board-free-detail-modify-end", "d-none");
        document.getElementById("board-free-detail-delete").value = board.boardId;
        document.getElementById("board-free-detail-modify-end").value = board.boardId;
    } else {
        openContentById("board-free-detail-delete", "d-none");
        openContentById("board-free-detail-modify-start", "d-none");
        openContentById("board-free-detail-modify-end", "d-none");
    }
}

