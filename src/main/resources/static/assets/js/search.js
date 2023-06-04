var container = document.getElementById('map');
var options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
};
var map = new kakao.maps.Map(container, options);

var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
var table = document.getElementById("search-table");


document.getElementById("btn-search").addEventListener("click",async ()=>{
    let keyword = document.getElementById("search-keyword").value;
    let contentTypeId = document.getElementById("search-content-id").value;
    let areaCodeOptions = document.querySelector("#search-area").options;
    let areaCodeIndex = areaCodeOptions.selectedIndex;
    let areaCode = areaCodeOptions[areaCodeIndex].value;

    if(areaCode==0|| !keyword || contentTypeId==0) return;

    let key = `GPwmEPv1%2FDJFLMiKSip8uedsDWq58hPd%2FIO4sSzE%2BYRxZK28Mp7E9bG3QT2h3t%2BfSzFgSumVHrwnEca%2FNc7T3w%3D%3D`;
    let url = `https://apis.data.go.kr/B551011/KorService1/searchKeyword1?serviceKey=${key}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&keyword=${keyword}&contentTypeId=${contentTypeId}&areaCode=${areaCode}`;
    let response = await fetch(url);
    let json = await response.json();
    let result = json.response.body.items.item;
    let points = [];


    if(!result) return;

    result.forEach((item)=>{
        points.push(new kakao.maps.LatLng(item.mapy, item.mapx));
    });


    var bounds = new kakao.maps.LatLngBounds();
    var i, marker, infowindow, iwContent,img,tbContent, iwContent2;

    for (i = 0; i < points.length; i++) {
        marker = new kakao.maps.Marker({ position : points[i] });
        img = `<img src="${result[i].firstimage}" class="img-fluid">`;
        if(result[i].firstimage2 == "") img = `<img src="assets/img/noimg.png" class="img-fluid">`;

        iwContent = `    
    <div class="container m-0 p-0">
      <div class="row m-2">
        <div class="col">`
            +img+ `
        </div>
        <div class="col">
          <h5 class="text">${result[i].title}</h5>
          <p class="text"><small class="text-muted">${result[i].addr1}</small></p>
          <p class="text"><small class="text-muted">${result[i].addr2}</small></p>
          <p class="text"><small class="text-muted">${result[i].tel}</small></p>
        </div>
      </div>
    </div>`;

        tbContent = `
        <tr>
            <th><img src="${result[i].firstimage}" style="width: 15rem"></img></th>
            <th>${result[i].title}</th>
            <th>${result[i].addr1}</th>
        </tr>`;

        infowindow = new kakao.maps.InfoWindow({position : points[i], content : iwContent,disableAutoPan: true});

        marker.setMap(map);

        kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
        kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
        kakao.maps.event.addListener(marker, 'click', makeClickListener(tbContent));
        bounds.extend(points[i]);
        map.setBounds(bounds);
    }

});


function makeClickListener(tbcontent){
    return function (){
        table.innerHTML = `<table class="table table-striped">
                <thead>
                    <tr>
                        <th>대표이미지</th>
                        <th>관광지명</th>
                        <th>주소</th>
                    </tr>
                </thead>
                <tbody id="trip-list">
                </tbody>
                </table>`;
        let tbody = document.getElementById("search-table");
        tbody.innerHTML += tbcontent;
    }
}

function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}

function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}



