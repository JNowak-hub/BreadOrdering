INSERT INTO roles (type)
VALUES ('ROLE_USER');
INSERT INTO roles (type)
VALUES ('ROLE_ADMIN');
insert into users (email, email_verified,enabled, name, password,provider, role_id, username)
values ( 'admin', true,true,'admin','$2a$10$CVNpxD6KXiAU7uW8HIvikeqiuaHja4yTKULpEISfb.sg4FmXG054.','local',2,'admin');