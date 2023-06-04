package com.ssafy.enjoytrip.board;


import com.ssafy.enjoytrip.board.model.dto.Board;
import com.ssafy.enjoytrip.board.model.dto.BoardRequestDto;
import com.ssafy.enjoytrip.board.model.mapper.BoardMapper;
import com.ssafy.enjoytrip.board.service.BoardService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Slf4j
public class BoardInsertTest {


    @Autowired
    BoardMapper boardMapper;

    @DisplayName("Insert board 등록 확인")
    @Transactional
    @Test
    public void BoardInsertTest() {

        // given
        Board board = Board.builder().content("hello").subject("subject").userId("ssafy").build();
        // when
        int result = boardMapper.insertBoard(board);
        // then
        Assertions.assertEquals(1, result);
    }


    @Autowired
    BoardService boardService;

    @Test
    @Transactional
    @DisplayName("Insert board 등록 확인 :service ")
    public void BoardInsertTest2() {

        // given
        BoardRequestDto board = BoardRequestDto.builder().content("hello").subject("subject").userId("ssafy").build();

        // when
        int result = boardService.regist(board, "ssafy");

        // then
        Assertions.assertEquals(1, result);

    }


}
