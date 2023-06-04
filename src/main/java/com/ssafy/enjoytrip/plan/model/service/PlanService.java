package com.ssafy.enjoytrip.plan.model.service;


import com.ssafy.enjoytrip.plan.model.dto.PlanBoard;
import com.ssafy.enjoytrip.plan.model.dto.PlanDay;

import java.util.List;

public interface PlanService {
    List<PlanBoard> listMyPlan(String userId);
    int registPlanBoard(PlanBoard planBoard);
    int registPlanDay(List<PlanDay> planDays);
}
