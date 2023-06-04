package com.ssafy.enjoytrip.board.service;

import com.github.pagehelper.Page;
import com.ssafy.enjoytrip.board.model.dto.Board;
import com.ssafy.enjoytrip.board.model.dto.BoardRequestDto;
import com.ssafy.enjoytrip.board.model.mapper.BoardMapper;
import com.ssafy.enjoytrip.common.error.BoardNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class BoardServiceImpl implements BoardService {

    private final BoardMapper boardMapper;

    @Transactional(readOnly = true)
    @Override
    public Board detail(int boardId) {
        return boardMapper.selectBoard(boardId).orElseThrow(() -> new BoardNotFoundException("해당 boardId에 해당하는 board가 없습니다."));
    }

    @Override
    @Transactional
    public int regist(BoardRequestDto boardRequestDto, String userId) {
        return boardMapper.insertBoard(new Board(boardRequestDto, userId));
    }

    @Override
    @Transactional
    public int modify(int boardId, BoardRequestDto boardRequestDto) {

        return boardMapper.updateBoard(boardRequestDto.toEntity());
    }

    @Override
    @Transactional
    public int delete(int boardId) {
        return boardMapper.deleteBoard(boardId);
    }

    @Override
    @Transactional
    public int updateHit(int boardId) {
        return boardMapper.updateHit(boardId);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<Board> getBoardList() {
        return boardMapper.selectAll();
    }
}
