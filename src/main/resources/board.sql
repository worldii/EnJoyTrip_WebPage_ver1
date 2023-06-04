use enjoytrip;

drop table if exists board;
drop table if exists user;

create table user (
                      `user_id` VARCHAR(45) primary key,
                      `user_name` VARCHAR(10) NOT NULL,
                      `address` VARCHAR(45) NOT NULL,
                      `password` VARCHAR(200) NOT NULL,
                      `email` VARCHAR(45) NOT NULL,
                      `authority` INT NULL DEFAULT 1,
                      `user_salt` VARCHAR(200) NULL
);

commit;

create table board (
                       `board_id` INT AUTO_INCREMENT PRIMARY KEY,
                       `user_id` VARCHAR(45),
                       `current_update` DATETIME default now(),
                       `subject` VARCHAR(100) NOT NULL,
                       `content` VARCHAR(3000) NOT NULL,
                       `hit` INT DEFAULT 0,
                       `type` INT DEFAULT 1,
                       FOREIGN KEY (user_id)
                           REFERENCES user(user_id)
                           ON DELETE CASCADE
                           ON UPDATE CASCADE
);

commit;

insert into user(user_id, user_name , address, password, email) value("ssafy","ssafy","ssafy","ssafy","ssafy@ssafy.com");
insert into board(user_id,subject,content) value("ssafy","ssafy","ssafy");
select * from board;
commit;
