package com.ssafy.enjoytrip.user.model.mapper;

import com.ssafy.enjoytrip.user.model.dto.User;
import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface UserMapper {
    User selectById(String id);
    int insertByUser(User user);
    int deleteById(String id);
    int updateByUser(User user);
}
