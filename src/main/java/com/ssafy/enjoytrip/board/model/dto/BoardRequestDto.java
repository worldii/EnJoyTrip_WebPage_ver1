package com.ssafy.enjoytrip.board.model.dto;

import javax.validation.constraints.NotBlank;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BoardRequestDto {
    @NotBlank(message = "제목을 입력해주세요.")
    private String subject;
    @NotBlank(message = "내용을 입력해주세요.")
    private String content;
    private String userId;

    public Board toEntity() {
        return Board.builder()
                .subject(subject)
                .content(content)
                .userId(userId)
                .build();
    }
}
