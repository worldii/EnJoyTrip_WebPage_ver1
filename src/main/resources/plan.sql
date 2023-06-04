use enjoytrip;

drop table if exists plan_day;
drop table if exists plan_board;

CREATE TABLE plan_board (
                            `plan_id` INT NOT NULL primary key auto_increment,
                            `user_id` VARCHAR(45) NOT NULL,
                            `title` VARCHAR(45) DEFAULT NULL,
                            `start_day` date not null,
                            `end_day` date not null,
                            `description` VARCHAR(100) DEFAULT NULL,
                            FOREIGN KEY (`user_id`)
                                REFERENCES user (`user_id`)
                                On Delete Cascade
                                On UPDATE Cascade
);


CREATE TABLE plan_day (
                          `day_id` int primary key auto_increment,
                          `plan_id` INT,
                          `day` date NOT NULL,
                          `place` varchar(100) not null,
                          `start_time` time NOT NULL,
                          `end_time` time NOT NULL,
                          `cost` int DEFAULT NULL,
                          `picture_url` VARCHAR(200) DEFAULT NULL,
                          FOREIGN KEY (`plan_id`)
                              REFERENCES plan_board(`plan_id`)
                              On Delete Cascade
                              On UPDATE Cascade
);

insert into plan_board(user_id,title,start_day,end_day) values ('ssafy','test','2023-01-01','2023-01-04');
insert into plan_day(plan_id,day,place,start_time,end_time,cost) values (1,'2023-01-01','역삼역','07:30:00','08:30:00',200000);
insert into plan_day(plan_id,day,place,start_time,end_time,cost) values (1,'2023-01-02','역삼역','10:30:00','12:30:00',200000);
insert into plan_day(plan_id,day,place,start_time,end_time,cost) values (1,'2023-01-03','역삼역','07:30:00','08:30:00',200000);
insert into plan_day(plan_id,day,place,start_time,end_time,cost) values (1,'2023-01-04','역삼역','07:30:00','08:30:00',200000);


select * from plan_board;
select * from plan_day;
commit;