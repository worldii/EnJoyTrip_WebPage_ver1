package com.ssafy.enjoytrip;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;
import javax.sql.DataSource;

@SpringBootTest
class EnjoytripApplicationTests {

    @Autowired
    DataSource dataSource;
    @Test
    void contextLoads() {
        assertNotNull(dataSource);
    }

}
