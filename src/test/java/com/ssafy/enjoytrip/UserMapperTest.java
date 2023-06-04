package com.ssafy.enjoytrip;

import com.ssafy.enjoytrip.user.model.dto.User;
import com.ssafy.enjoytrip.user.model.mapper.UserMapper;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Slf4j
public class UserMapperTest {

    @Autowired
    UserMapper userMapper;

    @Test
    void testUserMapperLoad(){
        assertNotNull(userMapper);
    }

    @Test
    void testSelectById(){

        // given
        String id = "ssafy";

        // when
        User user = userMapper.selectById(id);

        // then
        System.out.println(user);
        assertEquals("ssafy",user.getUserId());
    }

    @Test
    @Transactional
    void testInsertByUser(){
        // given
        String userId="test";
        String userName="test";
        String address="test";
        String password="test";
        String email="test@test.com";
        User insertUser = User.builder()
                .userId(userId)
                .userName(userName)
                .address(address)
                .password(password)
                .email(email)
                .build();

        // when
        int result = userMapper.insertByUser(insertUser);
        User selectUser = userMapper.selectById(userId);

        // then
        assertEquals(result,1);
        assertEquals(userId,selectUser.getUserId());
    }

    @Test
    @Transactional
    void testDeleteById(){
        String userId="test";
        String userName="test";
        String address="test";
        String password="test";
        String email="test@test.com";
        User insertUser = User.builder().userId(userId)
                .userName(userName)
                .address(address)
                .password(password)
                .email(email)
                .build();
        userMapper.insertByUser(insertUser);

        // when
        int result = userMapper.deleteById(userId);
        User selectUser = userMapper.selectById(userId);

        // then
        assertEquals(result,1);
        assertNull(selectUser);
    }

    @Test
    @Transactional
    void testUpdateByUser(){
        String userId="test";
        String userName="test";
        String address="test";
        String password="test";
        String email="test@test.com";
        User user = User.builder().userId(userId)
                .userName(userName)
                .address(address)
                .password(password)
                .email(email)
                .build();
        userMapper.insertByUser(user);

        // when
        user.setUserName("update");
        user.setAddress("update");
        user.setPassword("update");
        user.setEmail("update@update");
        int result = userMapper.updateByUser(user);
        User updateUser = userMapper.selectById(userId);

        // then
        assertEquals(result,1);
        assertEquals(updateUser.getEmail(),"update@update");
    }
}
