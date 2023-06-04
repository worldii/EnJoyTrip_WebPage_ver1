package com.ssafy.enjoytrip.user.controller;

import com.ssafy.enjoytrip.user.model.dto.User;
import com.ssafy.enjoytrip.user.model.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/user")
@Slf4j
public class UserController{
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String,Boolean>>  login(@RequestBody User user, HttpSession session) throws Exception {
        User userInfo = userService.login(user.getUserId(),user.getPassword());

        Map<String,Boolean> map = new HashMap<>();
        if(userInfo!=null){
            session.setAttribute("userInfo",userInfo);
            map.put("success",true);
            return new ResponseEntity<>(map,HttpStatus.OK);
        }

        map.put("success",false);
        return new ResponseEntity<>(map,HttpStatus.OK);
    }

    @GetMapping("/logout")
    public void logout(HttpSession session) throws Exception {
        session.invalidate();
    }

    @PostMapping("/join")
    public ResponseEntity<Map<String,Boolean>> join(@RequestBody User user){
        Map<String,Boolean> map = new HashMap<>();
        map.put("success",userService.join(user));

        return new ResponseEntity<>(map,HttpStatus.OK);
    }

    @DeleteMapping("/leave")
    public ResponseEntity<Map<String,Boolean>> leave(@RequestBody String userId,HttpSession session){
        Map<String,Boolean> map = new HashMap<>();

        if(userService.leave(userId)){
            map.put("success",true);
            session.invalidate();
            return new ResponseEntity<>(map,HttpStatus.OK);
        }

        map.put("success",false);
        return new ResponseEntity<>(map,HttpStatus.OK);
    }

    @PutMapping("/modify")
    public ResponseEntity<Map<String,Boolean>> modify(@RequestBody User user){
        Map<String,Boolean> map = new HashMap<>();
        map.put("success",userService.modifiy(user));

        return new ResponseEntity<>(map,HttpStatus.OK);
    }
}
