<%--
  Created by IntelliJ IDEA.
  User: wangjunyoung
  Date: 2023/03/26
  Time: 12:15 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>

<head>
    <%@ include file="layout/header.jsp" %>
</head>

<body>

<!-- Navigation-->
<%@ include file="navigation/navigation.jsp" %>
<!--Content-->
<div class="content container" id="content">
    <!--home-->
    <div class="container" id="content-home">
        <%@ include file="home/home.jsp" %>
    </div>
    <!--content : search-->
    <div class="d-none" id="content-search">
        <div class="row mt-5">
            <div class="col-2"></div>
            <div class="col-8">
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

                    <button id="btn-search" class="btn btn-outline-secondary" type="button"><i class="bi bi-search"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="row mt-2">
            <div class="col-2">
            </div>
            <div class="col-8">
<%--                <div id="map" style="width:100%;height:600px;"></div>--%>
<%--                <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=0b84fd1237aed5cea2801ea80e6e9738&libraries=services,clusterer,drawing"></script>--%>

                <table class="table table-striped" id="search-table">
                </table>
            </div>
        </div>
    </div>

    <!--content : plan-->
    <div class="d-none" id="content-plan-add">
        <%@include file="plan/regist.jsp" %>

    </div>

    <div class="d-none" id="content-plan-share">
        id : content-plan-share
    </div>

    <!--content : community-->
    <div class="d-none" id="content-board">
        <%@ include file="board/navigation.jsp" %>
        <%@ include file="board/notice.jsp" %>
        <%@include file="board/board.jsp" %>
    </div>


    <!--content : login-->
    <%@ include file="user/login.jsp" %>

    <!--content : join-->
    <%@include file="user/join.jsp" %>

    <!--content : mypage-->
    <%@include file="user/mypage.jsp" %>

    <div class = "d-none" id="content-myplan">
        <%@include file="plan/myplan.jsp"%>
    </div>

    <div class="d-none" id="content-mytip">
        <div class="row m-5">
            <div class="col3"></div>
            <div class="col6">
                <table class="table" id="content-mypage-mytip-table">
                </table>
            </div>
        </div>
    </div>

    <div class="d-none" id="content-myhotplace">
        <div class="row" id="content-mypage-hotplace">

        </div>
    </div>


</div>

<footer class="bg-dark fixed-bottom">
    <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Wang JunYoung 2023</p></div>
</footer>
</body>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="assets/js/main.js"></script>
<script src="assets/js/search.js"></script>
<script src="assets/js/board.js"></script>
<script src="assets/js/user.js"></script>
<script src="assets/js/plan.js"></script>
<script src="assets/js/home.js"></script>
</html>