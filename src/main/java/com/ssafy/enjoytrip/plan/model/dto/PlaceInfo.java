package com.ssafy.enjoytrip.plan.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PlaceInfo {
    private Long placeInfoId;
    private Long planId;
    private String startTime;
    private String endTime;
    private String planDay;
    private String pictureUrl;
    private int cost;
    private Long contentId;
}

