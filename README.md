# WD_Assignment2

[Github Repository](https://github.com/d-simmons/WD_Assignment2)

## User Authenitication System Tests

### Register
Successful:
![image](./WD_A2_Tests/post-posts-ok.png)

Duplicate User:
![image](./WD_A2_Tests/post-register-dupe.png)

Invalid Email:
![image](./WD_A2_Tests/post-register-invalid-email.png)

Invalid Password:
![image](./WD_A2_Tests/post-register-invalid-pass.png)

### Login
Successful:
![image](./WD_A2_Tests/post-login-ok.png)

Wrong Password:
![image](./WD_A2_Tests/post-login-wrong-pass.png)

User Does Not Exist:
![image](./WD_A2_Tests/post-login-user-nonexist.png)

### Posts
Create a post (with auth token):
![image](./WD_A2_Tests/post-posts-ok.png)

Get all posts:
![image](./WD_A2_Tests/get-posts-all.png)

Get a single post:
![image](./WD_A2_Tests/get-posts-id.png)

Update a post successfully:
![image](./WD_A2_Tests/put-posts-id-ok.png)

Update a post denied because wrong creator:
![image](./WD_A2_Tests/put-posts-wrong-creator.png)

Delete a post successfully:
![image](./WD_A2_Tests/delete-posts-ok.png)

Delete a post denied because wrong creator:
![image](./WD_A2_Tests/delete-posts-wrong-creator.png)

