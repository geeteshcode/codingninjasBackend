const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');


passport.use(new LocalStrategy({
    usernameField : 'email'
},
    function(email,password,done){
        User.findOne({email:email},function(err,user){
            if(err){
                console.log('err');
                return;
            }
            if(!user || user.password!=password){
                console.log('Invalid User')
                return done(null,false)
            }

            return done(null,user);
        })
    }
));


passport.serializeUser(function(user,done){
    done(null,user.id);
});




passport.deserializeUser(function(id,done){
    //de
    User.findById(id,function(err,user){
        if(err){
            console.log('err');
            return;
        }
        return done(null,user);
    })
})


module.exports = passport;