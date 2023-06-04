<%--
  Created by IntelliJ IDEA.
  User: wangjunyoung
  Date: 2023/05/03
  Time: 1:14 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>

<div class="container">
    <main class="main">

        <div class="row mt-5">
            <section class="hero">
                <div class="container row" style="text-align : center">
                    <h2 class="section-title" style="text-align : center; font-weight:bold;">인기 여행지 검색</h2>
                    <p class="hero-text" style="text-align : center; font-size : 0.8em">한샘과 함께 인기 있는 여행지를 탐색하세요.</p>
                </div>

            </section>
        </div>
        <div class="row">
            <div class="col-2"></div>
            <div class="col-8">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="인기 여행지 검색">
                    <span class="input-group-btn">
                     <button class="btn btn-secondary" type="button">검색</button>
                   </span>
                </div>        </div>
            <div class="col-2"></div>
        </div>
        <div>
            <div style="height: 80px "></div>
            <section class="destinations">
                <div class="container">
                    <h2 class="section-title" style="text-align : center; font-weight:bold;">나만의 핫플 공유</h2>
                    <h3 class="text-secondary" style="text-align : center; font-size : 0.8em">좋았던 관광지를 다른 사람과 함께 공유해 보세요</h2>
                        <div style="height: 10px"></div>
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img src="https://via.placeholder.com/350x400" alt="Destination 1" class="card-img-top">
                                    <div class="card-body">
                                        <h3 class="card-title">Destination 1</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img src="https://via.placeholder.com/350x400" alt="Destination 2" class="card-img-top">
                                    <div class="card-body">
                                        <h3 class="card-title">Destination 2</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img src="https://via.placeholder.com/350x400" alt="Destination 3" class="card-img-top">
                                    <div class="card-body">
                                        <h3 class="card-title">Destination 3</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
            <div class="row">
                <div class="col-10"> </div>
                <div class="col fs-5">  금주 핫한 여행지
                    <i class="bi bi-chevron-right"></i>

                </div>
            </div>
    </main>
</div>
</div>