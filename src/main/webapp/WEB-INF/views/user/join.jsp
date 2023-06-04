<%--
  Created by IntelliJ IDEA.
  User: wangjunyoung
  Date: 2023/03/26
  Time: 1:04 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>

<div class="d-none" id="content-join">

    <div class="row mt-5 mb-5">
        <div class="col-2"></div>
        <div class="col-8">
            <div class="card">
                <div class="card-body">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="content-join-id" placeholder="ID">
                        <label for="content-join-id">ID</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="content-join-email">
                        <label for="content-join-email">Email</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="content-join-password">
                        <label for="content-join-password">Password</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="content-join-check">
                        <label for="content-join-check">Password Check</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="content-join-name" placeholder="Name">
                        <label for="content-join-name">Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="content-join-address" placeholder="Address">
                        <label for="content-join-address">Address</label>
                    </div>
                    <button type="btn" class="btn btn-outline-secondary" id="content-join-user">Join</button>
                </div>
            </div>
        </div>
        <div class="col-2"></div>
    </div>

</div>
