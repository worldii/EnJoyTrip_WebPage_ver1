<%--
  Created by IntelliJ IDEA.
  User: SSAFY
  Date: 2023-05-02
  Time: 오후 2:37
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<div class="container">
  <div class="row">
    <div class="col">
      <p class="fs-1" id="plan-add-title">My Plan!</p>
      <a id="plan-add-startDay"></a>
      <a id="plan-add-dayMid"></a>
      <a id="plan-add-endDay"></a>
    </div>
  </div>
</div>

<div class="container" id="plan-add-top">
  <div class="row mt-2">
    <div class="col">
      <div class="input-group">
        <input type="text" class="form-control form-control-lg"  placeholder="My Plan!" id="plan-add-title-input">
      </div>
    </div>
  </div>

  <div class="row mt-2">
    <div class="col-10">
      <div class="input-group">
        <input type="date" class="form-control" id="plan-add-date-start-input">
        <span class="input-group-text bg-light">~</span>
        <input type="date" class="form-control" id="plan-add-date-end-input">
        <button class="btn btn-outline-dark" type="button" id="plan-add-top-end"><i class="bi bi-airplane"></i></button>
      </div>
    </div>
  </div>

  <div class="row mt-2">
    <div class="col">
    </div>
  </div>
</div>


<div class="d-none" id="plan-add-mid">
  <div class="row">
    <div class="col">
      <br>
      <div class="input-group" role="search">
        <select id="search-area" class="form-select" aria-label="Default select example">
          <option value="0" selected>검색 할 지역 선택</option>
        </select>
        <input id="search-keyword" class="form-control" type="search" placeholder="검색어" aria-label="검색어"/>

        <select id="search-content-id" class="form-select">
          <option value="0" selected>관광지 유형</option>
          <option value="12">관광지</option>
          <option value="14">문화시설</option>
          <option value="15">축제공연행사</option>
          <option value="25">여행코스</option>
          <option value="28">레포츠</option>
          <option value="32">숙박</option>
          <option value="38">쇼핑</option>
          <option value="39">음식점</option>
        </select>

        <button id="btn-search" class="btn btn-outline-secondary" type="button"><i class="bi bi-search"></i></button>
      </div>

    </div>
  </div>
  <div class="row mt-2">
    <div class="col">
      <div id="map" style="width:100%;height:400px;"></div>
    </div>
    <div class="col">
      <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="row mt-2">
    <div class="col">
      <div class="input-group mb-3">
        <span class="input-group-text bg-light"><i class="bi bi-clock"></i></span>
        <input type="time" class="form-control" id="plan-add-start-time">
        <span class="input-group-text bg-light"><i class="bi bi-arrow-right"></i></span>
        <input type="time" class="form-control" id="plan-add-end-time">
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-6">
      <div class="input-group mb-3">
        <span class="input-group-text bg-light"><i class="bi bi-map"></i></span>
        <input type="text" class="form-control" id="plan-add-place" placeholder="Place" aria-label="Place">
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text bg-light"><i class="bi bi-currency-dollar"></i></span>
        <input type="text" class="form-control" placeholder="Cost" aria-label="Cost" id="plan-add-cost">
      </div>

      <div class="input-group mb-3">
        <button class="btn btn-outline-secondary" type="button" id="plan-add-day-btn">+</button>
      </div>
    </div>
  </div>



</div>

<div class="d-none" id="plan-add-bot">
  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs" id="plan-add-card-li">

          </ul>
        </div>


        <div class="card-body p-1" id="plan-add-card-body">

        </div>

        <div class="card-footer text-muted btn" id="plan-add-save">
          Save
        </div>
      </div>
    </div>
  </div>
</div>

<div class="container">
  <div class="row">
    <div class="col">
      <br>
      <br>
    </div>
  </div>
</div>
