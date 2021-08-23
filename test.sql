-- https://www.mycompiler.io/new/sql?fork=Cv3MAuy
-- link for online compiler





create table Table1 (id integer PRIMARY KEY ,name varchar(10),place varchar(10),dob date,phNumber int UNIQUe ,marks int );
-- table create  name (col1,col2)
-- integer || int
-- varchar(size)
--  char (size)
-- enum
--  boolean (true ya false)
-- date
-- double (BIG DIGIT ABEFORE POINT,BIG DIGIT AFTER POINT) 1000
-- FLOAT (BIG DIGIT ABEFORE POINT,BIG DIGIT AFTER POINT) 500
-- BIGINT (BIG DIGIT ABEFORE POINT,BIG DIGIT AFTER POINT) 500

-- CONSTRAINS

-- PRIMARY KEY
-- NOT NULL



INSERT INTO Table1 (id,name,place,phNumber,dob)  VALUES (1,"rohaan","delhi",2345678233333,"2000-01-30");
INSERT INTO Table1 (id,name,place,phNumber,dob)  VALUES (2,"roASDASaan","delDSSDhi",2345878233,"2000-01-30");

-- SELECT * FROM Table1;
-- delete table
drop table Table1;

-- SELECT * FROM Table1;


create table Table1 (id integer PRIMARY KEY ,name varchar(10),place varchar(10),dob date,phNumber int ,marks int );


INSERT INTO Table1 (id,name,place,phNumber,dob,marks)  VALUES (1,"rohaan","delhi",2345678233333,"2000-01-30",50);
INSERT INTO Table1 (id,name,place,phNumber,dob,marks)  VALUES (2,"cx","mumbai",2345878233,"2000-01-30",32);
INSERT INTO Table1 (id,name,place,phNumber,dob,marks)  VALUES (3,"cx","delDSSDhi",2345878233,"2000-01-30",54);
INSERT INTO Table1 (id,name,place,phNumber,dob,marks)  VALUES (4,"rxcDASaan","delDSSDhi",2345878233,"2000-01-30",30);
INSERT INTO Table1 (id,name,place,phNumber,dob,marks)  VALUES (5,"roAScxan","delDSSDhi",2345878233,"2000-01-30",75);
INSERT INTO Table1 (id,name,place,phNumber,dob,marks)  VALUES (6,"roASDASaan","delDSSDhi",2345878233,"2000-01-30",36);
INSERT INTO Table1 (id,name,place,phNumber,dob,marks)  VALUES (7,"roASDxcan","delDSSDhi",2345878233,"2000-01-30",99);
INSERT INTO Table1 (id,name,place,phNumber,dob,marks)  VALUES (8,"roASDASaan","delDSSDhi",2345878233,"2000-01-30",45);
INSERT INTO Table1 (id,name,place,phNumber,dob,marks)  VALUES (9,"roxcASaan","delDSSDhi",2345878233,"2000-01-30",100);

-- select id,name from Table1;
-- select * from Table1;





-- select id as kuch from Table1;

-- select distinct phNumber from Table1 ; 
--  distinct give you single value 

-- 
-- conditions 
-- = , > , <, !=
-- AND , OR , NOT


-- where : conditions
-- select * from Table1 where place = "delhi" OR place = "mumbai";
-- select * from Table1 where place = "delDSSDhi" AND id = "7";
-- select * from Table1 where place != "delhi" ; OR
-- select * from Table1 where not place = "delDSSDhi" ; 

-- order by : used for sorting

-- select * from Table1 order by marks asc ya desc; 
-- select * from Table1 where place = "delDSSDhi" order by marks desc ;
-- select * from Table1;
-- delete from Table1 where id = 1;
-- select * from Table1;
-- select * from Table1;

-- update Table1 set marks=100 where marks>50;

-- select * from Table1;


--  avg , count , sum

-- select count(id) from Table1 where place = "delDSSDhi" ;
-- select avg(marks) from Table1 where place = "delDSSDhi" ;
--  select sum (marks)*100/900 from Table1;

-- between
-- use upper limit and lower limit as well
-- select * from Table1 where marks between 30 and 50;
select * from Table1 where marks not between 30 and 50 order by marks;
-- select * from Table1 where marks between 30 and 50 and id not in (1,2,5)  ;



