package com.ssafy.enjoytrip.plan.model.service;


import com.ssafy.enjoytrip.plan.model.dto.PlanBoard;
import com.ssafy.enjoytrip.plan.model.dto.PlanDay;
import com.ssafy.enjoytrip.plan.model.mapper.PlanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PlanServiceImpl implements PlanService{

    private PlanMapper planMapper;

    @Autowired
    public PlanServiceImpl(PlanMapper planMapper) {
        this.planMapper = planMapper;
    }

    @Override
    public List<PlanBoard> listMyPlan(String userId) {
        return planMapper.selectPlanBoardByUserId(userId);
    }

    @Override
    @Transactional
    public int registPlanBoard(PlanBoard planBoard) {
        int result = planMapper.insertPlanBoard(planBoard);
        return planBoard.getPlanId();
    }

    @Override
    @Transactional
    public int registPlanDay(List<PlanDay> planDays) {
        for(PlanDay planDay : planDays){
            if(planMapper.insertPlanDay(planDay) == 0){
                throw new RuntimeException();
            }
        }
        return 1;
    }
}
