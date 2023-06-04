package com.ssafy.enjoytrip.board;

import com.ssafy.enjoytrip.board.model.dto.Board;
import com.ssafy.enjoytrip.board.model.mapper.BoardMapper;
import com.ssafy.enjoytrip.board.service.BoardService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
@Slf4j
public class BoardUpdateTest {


    @Autowired
    BoardMapper boardMapper;

    @Autowired
    BoardService boardService;

    @Test
    @DisplayName("빈 동작 확인")
    void testBoardMapperLoad() {
        assertNotNull(boardMapper);
    }

    @Test
    @DisplayName("board update 확인")
    @Transactional
    void testBoardUpdate() {
        // given
        int boardId = 1;
        Board board = boardMapper.selectBoard(boardId).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."));
        Board newBoard = Board.builder().subject("hello").content("update").boardId(boardId).hit(board.getHit()).userId(board.getUserId()).build();
        // when
        int result = boardMapper.updateBoard(newBoard);
        Board upDateBoard = boardMapper.selectBoard(boardId).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."));
        // then
        assertEquals(upDateBoard.getContent(), newBoard.getContent());
    }

    @Test
    @DisplayName("board update Hit 확인")
    @Transactional
    void testBoardUpdateHit() {
        // given
        int boardId = 5;

        // when
        Board select = boardMapper.selectBoard(boardId).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."));
        int originalHit = select.getHit();
        int result = boardService.updateHit(boardId);
        Board newSelect = boardMapper.selectBoard(boardId).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."));

        // then
        assertEquals(originalHit + 1, newSelect.getHit());
    }


}
