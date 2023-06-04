<%--
  Created by IntelliJ IDEA.
  User: wangjunyoung
  Date: 2023/03/26
  Time: 1:58 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>

<div class = "d-none" id="content-login">
    <div class="row mt-5 mb-5">
        <div class="col-3"></div>
        <div class="col-6">
            <div class="card">
                <div class="card-body">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="content-login-id" name= "userId" placeholder="ID">
                            <label for="content-login-id">ID</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="content-login-password" name="password" placeholder="Password">
                            <label for="content-login-password">PASSWORD</label>
                        </div>
                        <button type="button" class="btn btn-outline-secondary" id="content-login-btn">Login</button>
                </div>
            </div>
        </div>
        <div class="col-3"></div>
    </div>
</div>

