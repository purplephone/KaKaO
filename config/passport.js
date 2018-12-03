var KakaoStrategy = require('passport-kakao').Strategy;
var DataModel = require('../models/DataModel');
var time = require('../Js/Time');


module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user);
    });
    passport.deserializeUser(function(user, done) { // 매개변수 user는 serializeUser의 done의 인자 user를 받은 것
      DataModel.findById(id,(err,user)=>{
        done(null, user);
      })
    });

    passport.use('kakao-login', new KakaoStrategy({
        clientID: '9a23c80e10efd8c3308c2091dc87ebc0',
        clientSecret: 'M6bA0Id268NwzeA7icTLcYnOTiuQhf0t',
        callbackURL: 'http://localhost/oauth/kakao/callback',

    },
    function(zaccessToken, refreshToken, profile, done) {
        var data = new DataModel();
        data._id = profile.id;
        data.date=time.GetToday();
        data.schedule="";
        DataModel.findOne({ _id : profile.id},function(err,user){
          if(user){
              return done(null,user);
            }
            data.save(function(err){
              if(err){
                console.error(err);
                return;
              }
            });
          return done(null,user);
        });
  }  ));
};
