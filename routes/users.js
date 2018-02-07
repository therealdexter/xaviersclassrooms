const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Notices = require('../models/notices');

//Register route
router.post('/register', (req,res,next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        uid: req.body.uid,
        password: req.body.password,
        isTeacher: false
    });

    User.addUser(newUser, (err, user)=>{
        if(err){
            res.json({
                success: false,
                message: "Failed to register"
            });
        } else {
            res.json({
                success: true,
                message: "Registration successful"
            });
        }
    });
});

//UID route

router.post('/uidexists', (req,res,next) => {
    const uid = req.body.uid;
    User.getPersonByUID(uid, (err,person) => {
        if(!person){
            res.json({
                success: true,
                message: "UID not yetregistered",
                person: person
            });
        } else {
            res.json({
                success: false,
                message: uid + " is already registered",
                person: person
            });
        }
    })
})

//Authentication route

router.post('/authenticate', (req,res,next) => {
    const uid = req.body.uid;
    const password = req.body.password;
    User.getPersonByUID( uid, (err, person) => {
        if(err) throw err;
        if(!person){
            return res.json({success: false, message: "Incorrect UID or password"});
        }
        User.comparePassword(password, person.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(JSON.parse(JSON.stringify(person)), config.secret,{
                    expiresIn: 604800
                });

                res.json({
                    success: true,
                    token: "Bearer "+token,
                    person: {
                        id: person._id,
                        name: person.name,
                        uid: person.uid,
                        email: person.email,
                        isTeacher: person.isTeacher
                    }
                })
            } else {
                res.json({
                    success: false,
                    message: "Incorrect password"
                });
            }
        });
    })

});

//Send message route


router.post('/send',(req,res,next) => {
    const message = req.body;

    const bool = true;

    User.insertMessageIntoInbox(message, (err,mess) => {
        if(err){
            bool = bool && err;
            throw err;
        }
    });

    User.insertMessageIntoOutBox(message, (err,mess) => {
        if(err){
            bool = bool && err;
            throw err;
        }
    });

    if(bool){
        res.json({
            success: true,
            message: "Message sent"
        });
    }else{
        res.json({
            success: true,
            message: "Message not sent"
        });
    }

});

//Profile route
router.get('/profile', passport.authenticate('jwt',{session: false}), (req,res,next) => {
    res.json({
        user: req.user,
    })
});

router.get('/notices', (req,res,next) => {
    Notices.getNotices((err,notices)=>{
        if (err) throw err;
        res.json(notices);
    });
});

router.post('/addnotice', (req,res,next) => {

    let date = new Date();

    let notice = new Notices({
        title: req.body.title,
        notice: req.body.notice,
        author: req.body.author,
        date: req.body.date,
        time: req.body.time
    });

    Notices.addNotice(notice, (err, not)=>{
        if(err){
            res.json({
                success: false,
                message: "Notice could not be added"
            });
        } else {
            res.json({
                success: true,
                message: "Notice added"
            });
        }
    });
});

module.exports = router;