<%--
  Created by IntelliJ IDEA.
  User: wangjunyoung
  Date: 2023/03/26
  Time: 10:31 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%><html>

<div class = "d-none" id="content-mypage">
    <div class="row mt-5 mb-5">
        <div class="col-3"></div>
        <div class="col-6">
            <div class="card">
                <div class="card-body">
                    <form id = "content-mypage-form">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="content-mypage-id" placeholder="ID" value="${userInfo.userId}" disabled>
                            <label for="content-mypage-id">ID</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="content-mypage-password"  value="${userInfo.password}" disabled>
                            <label for="content-mypage-password">Password</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="content-mypage-name" placeholder="Name"  value="${userInfo.userName}" disabled>
                            <label for="content-mypage-name">Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="content-mypage-address" placeholder="Address"  value="${userInfo.address}" disabled>
                            <label for="content-mypage-address">Address</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="content-mypage-email" placeholder="Email"  value="${userInfo.email}" disabled>
                            <label for="content-mypage-email">Email</label>
                        </div>
                        <button type="button" class="btn btn-outline-secondary float-end" id="content-mypage-mvupdate">수정하기</button>
                        <button type="button" class="btn btn-outline-secondary float-end" id="content-mypage-leave">탈퇴</button>
                        <button type="button" class="d-none btn btn-outline-secondary float-end" id="content-mypage-update">변경 사항 적용</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-4"></div>
    </div>
</div>

