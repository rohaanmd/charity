-- https://www.mycompiler.io/new/sql?fork=Cv3MAuy
-- link for online compiler

-- to use datatbase
-- use database1


-- create table Table1 (id integer PRIMARY KEY ,name varchar(10),place varchar(10),dob date,phNumber int UNIQUE ,marks int,isStudent boolean );
-- table create  name (col1,col2)

-- data types 
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
-- unique
-- foreign key



-- INSERT INTO Table1 (id,name,place,phNumber,dob,isStudent)  VALUES (1,"rohaan","delhi",2345678233333,"2000-01-30",true);
-- INSERT INTO Table1 (id,name,place,phNumber,dob)  VALUES (2,"roASDASaan","delDSSDhi",2345878233,"2000-01-30");

-- SELECT * FROM Table1;
-- delete table
-- drop table Table1;

-- SELECT * FROM Table1;


-- create table Table1 (id integer PRIMARY KEY ,name varchar(10),place varchar(10),dob date,phNumber int ,marks int );


-- INSERT INTO Table1 (id,name,place,phNumber,dob,marks)  VALUES (1,"rohaan","delhi",2345678233333,"2000-01-30",50);
-- INSERT INTO Table1 (id,name,place,phNumber,dob,marks)  VALUES (2,"cx","mumbai",2345878233,"2000-01-30",32);
-- INSERT INTO Table1 (id,name,place,phNumber,dob,marks)  VALUES (3,"cx","delDSSDhi",2345878233,"2000-01-30",54);
-- INSERT INTO Table1 (id,name,place,phNumber,dob,marks)  VALUES (4,"rxcDASaan","delDSSDhi",2345878233,"2000-01-30",30);
-- INSERT INTO Table1 (id,name,place,phNumber,dob,marks)  VALUES (5,"roAScxan","delDSSDhi",2345878233,"2000-01-30",75);
-- INSERT INTO Table1 (id,name,place,phNumber,dob,marks)  VALUES (6,"roASDASaan","delDSSDhi",2345878233,"2000-01-30",36);
-- INSERT INTO Table1 (id,name,place,phNumber,dob,marks)  VALUES (7,"roASDxcan","delDSSDhi",2345878233,"2000-01-30",99);
-- INSERT INTO Table1 (id,name,place,phNumber,dob,marks)  VALUES (8,"roASDASaan","delDSSDhi",2345878233,"2000-01-30",45);
-- INSERT INTO Table1 (id,name,place,phNumber,dob,marks)  VALUES (9,"roxcASaan","delDSSDhi",2345878233,"2000-01-30",100);

-- select id,name from Table1;
-- select * from Table1;





-- select id as kuch from Table1;

-- select distinct phNumber from Table1; 
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
-- select * from Table1 where marks not between 30 and 50 order by marks;
-- select * from Table1 where marks between 30 and 50 and id not in (1,2,5)  ;

-- joins :  to join 2 or more tables


-- drop table table1;


create table Table2 (class_id varchar(10) PRIMARY KEY ,class_name varchar(10) );

create table Table1 (id integer PRIMARY KEY ,name varchar(10),place varchar(10),dob date,phNumber int ,marks int, Class varchar(10), foreign key (Class) references Table2(class_id) );

INSERT INTO Table1 (id,name,place,phNumber,dob,marks,Class)  VALUES (1,"rohaan","delhi",2345678233333,"2000-01-30",50,"");
INSERT INTO Table1 (id,name,place,phNumber,dob,marks,Class)  VALUES (2,"cx","mumbai",2345878233,"2000-01-30",32,"1a");
INSERT INTO Table1 (id,name,place,phNumber,dob,marks,Class)  VALUES (3,"cx","delDSSDhi",2345878233,"2000-01-30",54,"1b");
INSERT INTO Table1 (id,name,place,phNumber,dob,marks,Class)  VALUES (4,"rxcDASaan","delDSSDhi",2345878233,"2000-01-30",30,"1b");
INSERT INTO Table1 (id,name,place,phNumber,dob,marks,Class)  VALUES (5,"roAScxan","delDSSDhi",2345878233,"2000-01-30",75,"1a");
INSERT INTO Table1 (id,name,place,phNumber,dob,marks,Class)  VALUES (6,"roASDASaan","delDSSDhi",2345878233,"2000-01-30",36,"2b");
INSERT INTO Table1 (id,name,place,phNumber,dob,marks,Class)  VALUES (7,"roASDxcan","delDSSDhi",2345878233,"2000-01-30",99,"2b");
INSERT INTO Table1 (id,name,place,phNumber,dob,marks,Class)  VALUES (8,"roASDASaan","delDSSDhi",2345878233,"2000-01-30",45,"2a");
INSERT INTO Table1 (id,name,place,phNumber,dob,marks,Class)  VALUES (9,"roxcASaan","delDSSDhi",2345878233,"2000-01-30",100,"2a");

INSERT INTO Table2 (class_id,class_name)  VALUES ("1a","achi class");
INSERT INTO Table2 (class_id,class_name)  VALUES ("2a","buri class");
INSERT INTO Table2 (class_id,class_name)  VALUES ("1b","ok okc lass");
INSERT INTO Table2 (class_id,class_name)  VALUES ("2b","normal classn");




-- select * from Table2;
-- select * from Table1;


select Table1.id,Table1.name,Table2.class_name from Table1 INNER JOIN Table2 on Table1.class=Table2.class_id;


-- SELECT * FROM Table1 CROSS JOIN Table2;

-- select Table1.id,Table1.name,Table2.class_name from Left outer join Table2 on Table1.class=Table2.class_id;


-- https://stackoverflow.com/questions/5706437/whats-the-difference-between-inner-join-left-join-right-join-and-full-join
-- https://whatisdbms.com/e-r-diagrams-in-dbms-components-symbols-and-notations/


