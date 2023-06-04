package com.ssafy.enjoytrip.user.model.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class User {
    private String userId;
    private String password;
    private String userName;
    private String address;
    private String email;
    private int authority;
}
