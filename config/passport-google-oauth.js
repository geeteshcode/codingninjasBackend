const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');

passport.use(new googleStrategy({
    clientID: '565979662098-g3t2tolfs4qa3pj98rk8lgd6ggmef0vp.apps.googleusercontent.com',
    clientSecret : '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',
    callbackURL : 'http://localhost:4000/auth/google/callback',

},

    function(accessToken,refreshToken,profile,done){
        User.findOne({email : profile.emails[0].value}).exec(function(err,user){
            if(err){
                console.log("err");
                return;
            }

            console.log(profile);

            if(user){
                return done(null,user)
            }
            else{
                User.create({
                    name : profile.displayName,
                    email : profile.emails[0].value,
                    password : crypto.randomBytes(24).toString('hex')
                },function(err,user){
                    if(err){
                        console.log("err");
                        return;
                    }
                   
                    return done(null,user)
                    
                });
            }
        })
    }
))


module.exports = passport;