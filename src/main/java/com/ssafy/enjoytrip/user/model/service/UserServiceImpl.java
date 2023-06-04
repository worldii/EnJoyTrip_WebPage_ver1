package com.ssafy.enjoytrip.user.model.service;

import com.ssafy.enjoytrip.user.model.dto.User;
import com.ssafy.enjoytrip.user.model.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserServiceImpl implements UserService {

    private UserMapper userMapper;
    @Autowired
    public UserServiceImpl(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @Override
    public User login(String id, String password){
        User user = userMapper.selectById(id);

        if(user!=null && password.equals(user.getPassword())){
            return user;
        }

        return null;
    }

    @Transactional
    @Override
    public boolean join(User user){
        int result = userMapper.insertByUser(user);
        if(result > 0)return true;
        return false;
    }

    @Transactional
    @Override
    public boolean leave(String id){
        int result = userMapper.deleteById(id);
        if(result > 0) return true;
        return false;
    }

    @Transactional
    @Override
    public boolean modifiy(User user){
        int result = userMapper.updateByUser(user);
        if(result > 0 ) return true;
        return false;
    }
}
