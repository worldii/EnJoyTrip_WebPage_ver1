<%--
  Created by IntelliJ IDEA.
  User: wangjunyoung
  Date: 2023/03/26
  Time: 12:26 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>

<nav class="navbar navbar-expand-lg shadow-sm sticky-top bg-white">
  <div class="container px-4 px-lg-5">
     <img src="./assets/img/hello.png" style="width: 200px; height: auto;" alt="logo"  href="#!" id="nav-home">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">

        <!--nav : search-->
        <li class="nav-item">
          <a class="nav-link" href="#!" id="nav-search">
            관광지
          </a>
        </li>

        <!--nav : community-->
        <li class="nav-item" id="nav-board">
          <a class="nav-link" href="#!">
            게시판
          </a>
        </li>

        <!--nav : plan-->
        <div class="nav-item dropdown" style="display:block">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            여행 계획
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="#!" id="nav-addplan">
                계획 세우기
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#!" id="nav-timeline">
                TimeLines
              </a>
            </li>
          </ul>
        </div>
      </ul>


      <!--nav : before-login-->
      <c:if test="${empty userInfo}">
        <div class="nav-item dropdown" id="joinNav">
      </c:if>
      <c:if test="${!empty userInfo}">
        <div class="d-none" id="joinNav">
      </c:if>
          <a class="nav-link dropdown-toggle" id="logoutDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            로그인
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="#!" id="nav-login">로그인</a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li><a class="dropdown-item" href="#!" id="nav-join">회원가입</a></li>
          </ul>
        </div>


      <!--nav : after-login-->
      <c:if test="${empty userInfo}">
        <div class="d-none" id="myNav">
      </c:if>
      <c:if test="${!empty userInfo}">
        <div class="nav-item dropdown" id="myNav">
      </c:if>
          <a class="nav-link dropdown-toggle" id="loginDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ${userInfo.userName}님
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#!" id="nav-mypage">정보보기</a></li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li><a class="dropdown-item" href="#!" id="nav-myplan">내 여행계획</a></li>
            <li><a class="dropdown-item" href="#!" id="nav-myboard">내 게시글</a></li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li><a class="dropdown-item" href="#!" id="nav-logout">로그아웃</a></li>
          </ul>
        </div>
    </div>
  </div>
</nav>

