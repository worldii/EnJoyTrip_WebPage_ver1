package com.ssafy.enjoytrip;

import com.ssafy.enjoytrip.plan.model.dto.PlanBoard;
import com.ssafy.enjoytrip.plan.model.dto.PlanDay;
import com.ssafy.enjoytrip.plan.model.mapper.PlanMapper;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Slf4j
public class PlanMapperTest {

    @Autowired
    PlanMapper planMapper;

    @Test
    void testPlanMapplerLoad(){
        assertNotNull(planMapper);
    }

    @Test
    void testSelectPlanDay(){
        // given
        int dayId = 1;

        // when
        PlanDay planDay= planMapper.selectPlanDay(dayId);

        // then
        assertEquals(planDay.getStartTime(),new Time(7,30,00));
    }

    @Test
    void testSelectPlanBoard(){
        // given
        String title = "test";

        // when
        List<PlanBoard> list = planMapper.selectPlanBoard();

        // then
        assertEquals(list.get(0).getTitle(),title);
    }

    @Test
    void testSelectPlanBoardByPlanId(){
        // given
        int planId = 1;

        // when
        PlanBoard planBoard = planMapper.selectPlanBoardByPlanId(planId);

        // then
        assertEquals(planBoard.getPlanId(),planId);
    }

    @Test
    @Transactional
    void testInsertPlanBoard(){
        // given
        String userId = "ssafy";
        String title = "test";
        Date startDay = new Date(2023-1900,5,7);
        Date endDay = new Date(2023-1900,5,9);
        PlanBoard insertPlanBoard = PlanBoard.builder().userId(userId).title(title).startDay(startDay).endDay(endDay).build();

        // when

        int result = planMapper.insertPlanBoard(insertPlanBoard);
        PlanBoard selectPlanBoard = planMapper.selectPlanBoardByPlanId(insertPlanBoard.getPlanId());

        // then
        assertEquals(result,1);
        assertEquals(selectPlanBoard.getPlanId(),insertPlanBoard.getPlanId());
    }

    @Test
    @Transactional
    void testInsertPlanDay(){
        // given
        String userId = "ssafy";
        String title = "test";
        Date startDay = new Date(2023-1900,5,7);
        Date endDay = new Date(2023-1900,5,9);
        PlanBoard insertPlanBoard = PlanBoard.builder().userId(userId).title(title).startDay(startDay).endDay(endDay).build();
        planMapper.insertPlanBoard(insertPlanBoard);

        int planId = insertPlanBoard.getPlanId();
        String place = "test";
        Time startTime = new Time(03,03,30);
        Time endTime = new Time(6,13,32);
        int cost = 10000;
        PlanDay insertPlanDay = PlanDay.builder().planId(planId).day(startDay).startTime(startTime).endTime(endTime).place(place).cost(cost).build();

        // when
        int result = planMapper.insertPlanDay(insertPlanDay);
        int dayId = insertPlanDay.getDayId();
        PlanDay selectPlanDay = planMapper.selectPlanDay(dayId);

        // then
        assertEquals(result,1);
        assertEquals(insertPlanDay.getDayId(),selectPlanDay.getDayId());
    }

    @Test
    void testCelectPlanBoardByUserId(){
        // given
        String userId = "ssafy";

        // when
        List<PlanBoard> planBoardList = planMapper.selectPlanBoardByUserId(userId);

        // then
        System.out.println(planBoardList);
    }
}
