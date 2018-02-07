const JwtStratergy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('./database');

module.exports = function(passport){
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = config.secret;
    passport.use(new JwtStratergy(opts, (jwt_payload, done) => {
        User.getPersonById(jwt_payload._id, (err,user)=>{
            if(err){
                return done(err, false);
            }
            if(user){
                return done(null, user);
                //if user is found, null for error
            }else{
                return done(null, false);
                //if user is not found, null for error, false for found

            }
        });
    }));
}