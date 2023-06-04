const PLAN_URL="/plan";

/* KaKao Map */

function initMap(){
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
            center: new kakao.maps.LatLng(37.56842, 126.97060), // 지도의 중심좌표
            level: 5, // 지도의 확대 레벨
            mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
        };
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 지도 타입 변경 컨트롤을 생성한다
    var mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도의 상단 우측에 지도 타입 변경 컨트롤을 추가한다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도에 확대 축소 컨트롤을 생성한다
    var zoomControl = new kakao.maps.ZoomControl();

    // 지도의 우측에 확대 축소 컨트롤을 추가한다
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 지도에 마커를 생성하고 표시한다
    var marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(37.56682, 126.97865), // 마커의 좌표
        map: map // 마커를 표시할 지도 객체
    });

    // 마커 위에 표시할 인포윈도우를 생성한다
    var infowindow = new kakao.maps.InfoWindow({
        content : '<div style="padding:5px;">인포윈도우 :D</div>' // 인포윈도우에 표시할 내용
    });

    // 인포윈도우를 지도에 표시한다
    infowindow.open(map, marker);

    // 마커에 클릭 이벤트를 등록한다 (우클릭 : rightclick)
    kakao.maps.event.addListener(marker, 'click', function() {
        alert('마커를 클릭했습니다!');
    });
}

/* Navigation */
document.getElementById("plan-add-title-input").addEventListener("blur",()=>{
    setTitle();
});

document.getElementById("plan-add-top-end").addEventListener("click",()=>{

    if(isValidTop()){
        orderDate();
        setDate();
        planBoardRegist();
        makeBot();
        openPlanMidBot();
    }
});

document.getElementById("plan-add-day-btn").addEventListener("click",()=>{
    let planDay = getInputPlanDay();
    if(isValidPlanDay(planDay)){
        addPlanDay(planDay);
    }
});

document.getElementById("plan-add-save").addEventListener("click",()=>{
    let list = getPlanDayList();
    planDayRegist(list);
});

/* Animation */

function setTitle(){
    let title = document.getElementById("plan-add-title");
    title.value = document.getElementById("plan-add-title-input").value;
    title.innerHTML = title.value;
}

function setDate(){
    let startDay = document.getElementById("plan-add-startDay");
    let dayMid = document.getElementById("plan-add-dayMid")
    let endDay = document.getElementById("plan-add-endDay");

    startDay.innerHTML = `<i class="bi bi-calendar"></i>&nbsp&nbsp`;
    startDay.value = document.getElementById("plan-add-date-start-input").value;
    startDay.innerHTML += startDay.value;

    dayMid.innerHTML = " ~ ";
    endDay.value = document.getElementById("plan-add-date-end-input").value;
    endDay.innerHTML = endDay.value;
}


/* Data */

async function planBoardRegist(){
    let url = SERVER_URL + PLAN_URL + "/board/regist";
    let planBoard = getPlanBoard();

    let option = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(planBoard),
    };

    let response = await fetch(url,option);

    if(response.status!=200){
        alert("오류");
        return;
    }

    let json = await response.json();
    if(json.success){
        document.getElementById("plan-add-top").setAttribute("data-value",json.planId);
        alert("상세 일정을 입력하세요~");
    }else{
        alert("로그인 후 이용해 주세요!");
        moveUserLogin();
    }
}

async function planDayRegist(list){
    let url = SERVER_URL + PLAN_URL + "/day/regist";

    let option = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(list),
    };

    let response = await fetch(url,option);

    if(response.status!=200){
        alert("오류");
        return;
    }

    let json = await response.json();
    if(json.success){
        alert("저장 되었습니다!");
    }
}

async function planMyplan(){
    let url = SERVER_URL + PLAN_URL + "/myplan";

    let option = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    };

    let response = await fetch(url,option);

    if(response.status!=200){
        alert("오류");
        return;
    }

    let json = await response.json();
    // console.log(json.planBoardList);

    setMyPlan(json.planBoardList);

}

/* Util */

function openPlanAddTop(){
    document.getElementById("").setAttribute("class","container my-5");
    document.getElementById("").setAttribute("class","container my-5");
    document.getElementById("").setAttribute("class","container my-5");
}

function openPlanMidBot(){

    document.getElementById("plan-add-top").setAttribute("class","d-none");
    document.getElementById("plan-add-mid").setAttribute("class","container md-5");
    document.getElementById("plan-add-bot").setAttribute("class","container my-5");

    kakao.maps.load(()=>{
        initMap();
    });
}

function makeBot(){
    let dateStart = new Date(document.getElementById("plan-add-date-start-input").value);
    let dateEnd = new Date(document.getElementById("plan-add-date-end-input").value);

    let cardNav = document.getElementById("plan-add-card-li");
    let cardBody = document.getElementById("plan-add-card-body");

    cardNav.innerHTML = ``;
    cardBody.innerHTML = ``;

    for(let i = dateStart,j=0; i<=dateEnd; i.setDate(i.getDate()+1),j++){
        cardNav.innerHTML += `
            <li class="nav-item">
              <button class="nav-link" aria-current="true" value="`
            + i
            +`" onclick="openCardBody(`
            + j
            + `)">`
            +(i.getMonth()+1)+`/`+ i.getDate()+
            `</button>
            </li>`;
        cardBody.innerHTML += `<div class="container" data-value="${i}"></div>`;
    }

    openCardBody(0);
}

function openCardBody(index){
    let planAddCardUl = document.querySelectorAll("#plan-add-card-li>li");
    let planAddCardBodys = document.querySelectorAll("#plan-add-card-body > div");

    for(let i=0; i<planAddCardBodys.length; i++){
        planAddCardUl[i].setAttribute("class","nav-link");
        planAddCardBodys[i].setAttribute("class","d-none");
    }

    planAddCardUl[index].setAttribute("class","nav-link active");
    planAddCardBodys[index].setAttribute("class","container");
}

function addPlanDay(inputPlanDay){
    let activeBody = document.querySelector(`#plan-add-card-body>.container`);

    activeBody.innerHTML += ` 
  <p class="fs-5">
    <i class="bi bi-clock"></i> <a data-value="${inputPlanDay.startTime}">${inputPlanDay.startTime}</a>~<a data-value="${inputPlanDay.endTime}">${inputPlanDay.endTime} </a> &nbsp; &nbsp;
    <i class="bi bi-map"></i> <a data-value="${inputPlanDay.place}"></a> ${inputPlanDay.place} &nbsp; &nbsp;
    <i class="bi bi-currency-dollar"></i> <a data-value="${inputPlanDay.cost}"></a> ${inputPlanDay.cost} &nbsp; &nbsp;
  </p>
`;
}

function getInputPlanDay(){
    let startTime = document.getElementById("plan-add-start-time");
    let endTime = document.getElementById("plan-add-end-time");
    let place = document.getElementById("plan-add-place");
    let cost = document.getElementById("plan-add-cost");

    let planDay = {
        startTime : parseTime(startTime.value),
        endTime : parseTime(endTime.value),
        place : place.value,
        cost : cost.value,
    }

    startTime.value = null;
    endTime.value = null;
    place.value = null;
    cost.value = null;

    return planDay;
}


function getDateDiff(dateStart, dateEnd) {
    let diffDate = dateEnd.getTime() - dateStart.getTime();

    return diffDate / (1000 * 60 * 60 * 24)+1;
}

/* Validation */

function orderDate(){
    let dateStart = document.getElementById("plan-add-date-start-input");
    let dateEnd = document.getElementById("plan-add-date-end-input");
    let tmp;


    if( dateStart.value > dateEnd.value ){
        tmp = dateEnd.value;
        dateEnd.value = dateStart.value;
        dateStart.value = tmp;
    }
}

function isValidTop(){
    let title = document.getElementById("plan-add-title").value;
    let dateStart = document.getElementById("plan-add-date-start-input").value;
    let dateEnd = document.getElementById("plan-add-date-end-input").value;

    if(title == ""){
        alert("제목을 입력하세요!");
        return false;
    }

    if(dateStart == "" || dateEnd == ""){
        alert("날짜를 입력하세요!");
        return false;
    }

    return true;
}

function isValidPlanDay(planDay){


    if(planDay.startTime==null || planDay.startTime==""){
        alert("시작 시간을 입력해주세요");
        return false;
    }
    if(planDay.endTime==null || planDay.endTime=="") {
        alert("종료 시간을 입력해주세요");
        return false;
    }
    if(planDay.place==null || planDay.place=="") {
        alert("장소를 입력해주세요");
        return false;
    }
    if(planDay.cost==null || planDay.cost=="") {
        alert("비용을 입력해 주세요");
        return false;
    }

    return true;
}

function getPlanBoard(){
    let title=document.getElementById("plan-add-title").value;
    let startDay=document.getElementById("plan-add-startDay").value;
    let endDay=document.getElementById("plan-add-endDay").value;

    let planBoard = {
        title : title,
        startDay : startDay,
        endDay : endDay,
    }
    return planBoard;
}

function getPlanDayList(){
    let planDayBodys = document.querySelectorAll(`#plan-add-card-body>.container>p`);
    let day = new Date(document.querySelector("#plan-add-card-body>.container").getAttribute("data-value"));

    let list = [];
    for(let planDayNode of planDayBodys){
        let planDayBody = planDayNode.querySelectorAll("a");

        let planDay={
            planId:document.getElementById("plan-add-top").getAttribute("data-value"),
            day: day,
            startTime:planDayBody[0].getAttribute('data-value'),
            endTime:planDayBody[1].getAttribute('data-value'),
            place:planDayBody[2].getAttribute('data-value'),
            cost:planDayBody[3].getAttribute('data-value'),
        };

        list.push(planDay);
    }
    return list;
}

function parseTime(inpuTime){
    let time = inpuTime.split(":");
    let hour = time[0];
    let minute = time[1];

    return hour + ":" + minute + ":" + "00";
}

function setMyPlan(planBoardList){
    let tbody = document.getElementById("plan-myplan");
    tbody.innerHTML = ``;

    for(let planBoard of planBoardList){
        tbody.innerHTML += `<tr>
<td>${planBoard.title}</td>
<td>${planBoard.startDay}</td>
<td>${planBoard.endDay}</td>
</tr>`;
    }
}