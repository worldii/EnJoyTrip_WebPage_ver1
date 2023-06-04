<%--
  Created by IntelliJ IDEA.
  User: wangjunyoung
  Date: 2023/03/26
  Time: 12:20 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%-- jstl 사용하기 위한 코드 --%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="root" value="${pageContext.request.contextPath}"/>

<meta charset="UTF-8" />

<title>박한샘</title>
<link  rel="stylesheet" t href="./assets/css/main.css">

<link rel="shortcut icon" href="./assets/img/favicon.ico">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">

<script>
    var SERVER_URL = "${root}";
    var USER_INFO = "${userInfo}";
</script>

<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=0b84fd1237aed5cea2801ea80e6e9738&libraries=services,clusterer,drawing&autoload=false"></script>
