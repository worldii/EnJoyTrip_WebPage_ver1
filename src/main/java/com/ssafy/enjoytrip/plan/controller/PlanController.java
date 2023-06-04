package com.ssafy.enjoytrip.plan.controller;

import com.ssafy.enjoytrip.plan.model.dto.PlanBoard;
import com.ssafy.enjoytrip.plan.model.dto.PlanDay;
import com.ssafy.enjoytrip.plan.model.service.PlanService;
import com.ssafy.enjoytrip.user.model.dto.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.sql.Time;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping("/plan")
public class PlanController {

    private PlanService planService;

    @Autowired
    public PlanController(PlanService planService) {
        this.planService = planService;
    }

    @PostMapping("/board/regist")
    public ResponseEntity<Map<String, Object>> boardRegist(@RequestBody PlanBoard planBoard, HttpSession session){
        Map<String,Object> map = new HashMap<>();
        planBoard.setUserId(((User)session.getAttribute("userInfo")).getUserId());

        int result = planService.registPlanBoard(planBoard);
        if(result>0){
            map.put("success",true);
            map.put("planId",result);
            return new ResponseEntity<>(map,HttpStatus.OK);
        }

        map.put("success",false);
        return new ResponseEntity<>(map,HttpStatus.OK);
    }

    @PostMapping("/day/regist")
    public ResponseEntity<Map<String,Boolean>> dayRegist(@RequestBody List<PlanDay> planDays){
        Map<String,Boolean> map = new HashMap<>();

        int result = planService.registPlanDay(planDays);

        if(result == 0 ){
            map.put("success",true);
            return new ResponseEntity<>(map,HttpStatus.OK);
        }
        map.put("success",false);
        return new ResponseEntity<>(map,HttpStatus.OK);
    }

    @GetMapping("/myplan")
    public ResponseEntity<Map<String,Object>> myPlan(HttpSession session){
        User user = (User)session.getAttribute("userInfo");
        Map<String,Object> map = new HashMap<>();

        List<PlanBoard> planBoardList = planService.listMyPlan(user.getUserId());
        map.put("planBoardList",planBoardList);
        return new ResponseEntity<>(map,HttpStatus.OK);
    }

}
