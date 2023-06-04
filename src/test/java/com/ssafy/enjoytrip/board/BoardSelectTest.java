package com.ssafy.enjoytrip.board;

import com.ssafy.enjoytrip.board.model.dto.Board;
import com.ssafy.enjoytrip.board.model.mapper.BoardMapper;
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
public class BoardSelectTest {

    @Autowired
    private BoardMapper boardMapper;

    @Test
    @Transactional
    void testBoardMapperLoad() {
        assertNotNull(boardMapper);
    }


    @Test
    @Transactional
    @DisplayName("select 잘되는지 확인 : Board Mapper")
    void BoardSelect() {
        // given
        int boardId = 5;
        // when
        Board temp = boardMapper.selectBoard(boardId).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."));
        // then
        assertEquals(boardId, temp.getBoardId());
        //log.info("{}", temp);
        System.out.println(temp);
    }

}
