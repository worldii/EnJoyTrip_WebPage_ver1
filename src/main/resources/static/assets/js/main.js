async function fillAreaFromDataPotal(){
    let serviceKey = "GPwmEPv1%2FDJFLMiKSip8uedsDWq58hPd%2FIO4sSzE%2BYRxZK28Mp7E9bG3QT2h3t%2BfSzFgSumVHrwnEca%2FNc7T3w%3D%3D";
    let areaUrl = "https://apis.data.go.kr/B551011/KorService1/areaCode1?serviceKey=" +
        serviceKey +
        "&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json";

    let response = await fetch(areaUrl);
    let json = await response.json();
    let result = json.response.body.items.item;
    let sa= document.querySelector("#search-area");

    sa.innerHTML = document.querySelector("#search-area> option:first-child").outerHTML;

    result.forEach((item) => {
        sa.innerHTML += `<option value="${item.code}"> ${item.name}</option>`;
    });
}
fillAreaFromDataPotal();

async function fillAreaFromLocalDB(){
    let requestUrl = SERVER_URL + "search?action=fill";
    let response = await fetch(requestUrl);
    let json = await response.json();
    let sa= document.querySelector("#search-area");

    sa.innerHTML = document.querySelector("#search-area> option:first-child").outerHTML;

    json.forEach((item) => {
        sa.innerHTML += `<option value="${item.sido_code}"> ${item.sido_name}</option>`;
    });
}
// fillAreaFromLocalDB();

/**
 * Util
 */

const content = document.querySelectorAll(".content> div");

function closeAllContent(){
    content.forEach((element)=>{
        element.setAttribute("class","d-none");
    });
}
function openContentById(id,display = "container"){
    document.getElementById(id).setAttribute("class",display);
}


/**
 * Navigation
 */

document.getElementById("nav-home").addEventListener("click",()=>{
    closeAllContent();
    openContentById("content-home");
});

document.getElementById("nav-search").addEventListener("click",()=>{
    closeAllContent();
    openContentById("content-search")
});

document.getElementById("nav-addplan").addEventListener("click",()=>{
    closeAllContent();
    openContentById("content-plan-add");
});







