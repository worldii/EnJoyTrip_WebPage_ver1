<%--
  Created by IntelliJ IDEA.
  User: wangjunyoung
  Date: 2023/03/27
  Time: 12:27 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>

<div class="d-none" id="board-free">
    <div class="row">
        <div class="col">
            <button type="button" class="btn btn-outline-dark float-end" id="board-free-write-start"><i
                    class="bi bi-pencil"></i>
            </button>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <table class="table table-hover mt-2 md-2">
            </table>
        </div>
    </div>
    <div class="row">
        <div class="col-3"></div>
        <div class="col">
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group" id="paginav">

            </div>
        </div>
        <div class="col-3"></div>
    </div>
</div>

<div class="d-none" id="board-free-write">
    <div class="row">
        <div class="col">
            <button type="button" class="btn btn-outline-dark float-end" id="board-free-write-end"><i
                    class="bi bi-pencil-square"></i>
            </button>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="mt-2 md-2">
                <label for="board-free-write-subject" class="form-label">Subject</label>
                <input type="text" class="form-control" id="board-free-write-subject">
            </div>
            <div class="mt-2 md-2">
                <label for="board-free-write-content" class="form-label">Content</label>
                <textarea class="form-control" id="board-free-write-content" rows="15"></textarea>
            </div>
        </div>
    </div>
</div>

<div class="d-none" id="board-free-detail">
    <div class="row">
        <div class="col">
            <button type="button" class="d-none" id="board-free-detail-delete"><i class="bi bi-trash3"></i>
            </button>
            <button type="button" class="d-none" id="board-free-detail-modify-start"><i class="bi bi-pencil"></i>
            </button>
            <button type="button" class="d-none" id="board-free-detail-modify-end"><i class="bi bi-pencil-square"></i>
            </button>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="mt-2 md-2">
                <label for="board-free-detail-subject" class="form-label">Subject</label>
                <input type="text" class="form-control" id="board-free-detail-subject">
            </div>
            <div class="mt-2 md-2">
                <label for="board-free-detail-content" class="form-label">Content</label>
                <textarea class="form-control" id="board-free-detail-content" rows="15"></textarea>
            </div>
        </div>
    </div>
</div>


