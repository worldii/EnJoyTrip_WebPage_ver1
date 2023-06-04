package com.ssafy.enjoytrip.plan.model.dto;

import lombok.*;

import java.sql.Date;
import java.sql.Time;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class PlanDay {
    int dayId;
    int planId;
    String place;
    Date day;
    Time startTime;
    Time endTime;
    int cost;
    String pictureUrl;
}
