const USER_URL = "/user";

/* Listener */

document.getElementById("nav-login").addEventListener("click",()=>{
    moveUserLogin();
});

document.getElementById("content-login-btn").addEventListener("click",()=>{
    userLogin();
});

document.getElementById("nav-logout").addEventListener("click",()=>{
    moveUserLogout();
    userLogout();
});

document.getElementById("nav-join").addEventListener("click",()=>{
    moveUserJoin();
});

document.getElementById("content-join-user").addEventListener("click",()=>{
    userJoin();
});

document.getElementById("nav-mypage").addEventListener("click",()=>{
    closeAllContent();
    openContentById("content-mypage");
    openContentById("content-mypage-update","d-none");
    openContentById("content-mypage-mvupdate","btn btn-outline-secondary float-end");
    openContentById("content-mypage-leave","btn btn-outline-danger float-end");

    setMypageContentDisabled(true);
});

document.getElementById("content-mypage-mvupdate").addEventListener("click",()=>{
    openContentById("content-mypage-mvupdate","d-none");
    openContentById("content-mypage-update","btn btn-outline-secondary float-end");
    openContentById("content-mypage-leave","d-none");


    setMypageContentDisabled(false);
});

document.getElementById("content-mypage-update").addEventListener("click",async ()=>{
    openContentById("content-mypage-mvupdate","btn btn-outline-secondary float-end");
    openContentById("content-mypage-update","d-none");
    openContentById("content-mypage-leave","btn btn-outline-danger float-end");

    setMypageContentDisabled(userModify());
});

document.getElementById("content-mypage-leave").addEventListener("click",async ()=>{
    userLeave();
});

document.getElementById("nav-myplan").addEventListener("click",()=>{
    closeAllContent();
    openContentById("content-myplan");
    planMyplan();
});

document.getElementById("nav-myboard").addEventListener("click",()=>{
    closeAllContent();
    openContentById("content-mytip");
});

/* Move */

function moveUserLogin(){
    closeAllContent();
    openContentById("content-login");
}

function moveUserLogout(){
    closeAllContent();
    openContentById("content-home");
}

function moveUserJoin(){
    closeAllContent();
    openContentById("content-join");
}


/* Data */

async function userLogin(){

    let user = {
        userId:  document.getElementById("content-login-id").value,
        password : document.getElementById("content-login-password").value,
    };

    let url = SERVER_URL + USER_URL + "/login";
    let option = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
    };


    let response = await fetch(url,option);
    if(response.status != 200){
        alert("로그인 실패");
    }

    let json = await response.json();

    if(json.success) {
        location.reload();
    } else{
        alert("로그인 실패");
    }
}

async function userLogout(){
    let url = SERVER_URL + "/user/logout";

    let response = fetch(url).then(()=>{location.reload();});
}

async function userJoin(){
    let userId = document.getElementById("content-join-id").value;
    let password = document.getElementById("content-join-password").value;
    let check = document.getElementById("content-join-check").value;
    let userName = document.getElementById("content-join-name").value;
    let address = document.getElementById("content-join-address").value;
    let email = document.getElementById("content-join-email").value;

    if(check!=password) {
        alert("비밀번호를 확인하세요!");
        return;
    }

    let user = {
        userId : userId ,
        password : password,
        userName : userName,
        address : address,
        email : email,
    }

    let url = SERVER_URL + USER_URL + "/join";
    let option = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
    };

    let response = await fetch(url,option);
    if(response.status != 200){
        alert("회원가입 실패");
    }

    let json = await response.json();
    if(json.success) {
        alert("회원가입 성공");
        moveUserLogin();
    } else{
        alert("회원가입 실패");
    }
}

async function userModify(){
    let url = SERVER_URL+USER_URL+"/modify";
    let user = {
        userId: document.getElementById("content-mypage-id").value,
        password: document.getElementById("content-mypage-password").value,
        userName : document.getElementById("content-mypage-name").value,
        address : document.getElementById("content-mypage-address").value,
        email : document.getElementById("content-mypage-email").value,
    };


    let option = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
    };

    let response = await fetch(url,option);
    let json = await response.json();

    if(json.success){
        alert("수정 성공");
        document.getElementById("nav-mypage").click();
        return true;
    }
    else{
        alert("수정 실패");
        return false;
    }
}

async function userLeave(){
    let url = SERVER_URL+USER_URL+"/leave";
    let userId = document.getElementById("content-mypage-id").value;

    let option = {
        method: 'Delete',
        headers: {'Content-Type': 'application/json'},
        body: userId,
    };

    let response = await fetch(url,option);
    let json = await response.json();

    if(json.success){
        alert("탈퇴 성공");
        location.reload();
    }
    else{
        alert("탈퇴 실패");
    }
}

/* Util */

function setMypageContentDisabled(option){
    document.getElementById("content-mypage-password").disabled = option;
    document.getElementById("content-mypage-name").disabled = option;
    document.getElementById("content-mypage-address").disabled = option;
}