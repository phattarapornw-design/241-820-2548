const express = require('express');
const bodyParser = require('body-parser');
const e = require('express');
const { use } = require('react');
const app = express();
const port =  8000;

app.use(bodyParser.json());

let users = []
let conter = 1;

///path = get /users
app.get('/users', (req, res) => {
   res.json(users);
});

//path = Post /user
    app.post('/user', (req, res) => {
       let user = req.body;
       user.id = conter
       conter++;
         users.push(user);
      res.json({
        message: 'User created successfully',
        user: user});
    });

    //path = Put/user/:id
    app.put('/user/:id', (req, res) => {
        let id = req.params.id
        //หา user ที่มี id ตรงกับ id ที่ส่งมา
        let selectedUser = users.findIndex(user => {
            if(user.id == id) {
                return true
            } else {
                return false
            }

        } )
        //อัพเดตข้อมูลของ user นั้น
        users[selectedIndex] = updatedUser;

        //ส่ง response กลับไปว่าอัพเดตสำเร็จ
        
        res.json({
            message: 'User updated successfully',
           data :{
            user: updatedUser,
            indexUpdated: selectedIndex
           }
        });

        res.json(selectedIndex='');
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});