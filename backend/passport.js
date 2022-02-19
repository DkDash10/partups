// var GoogleStrategy = require('passport-google-oauth20').Strategy;
// const passport = require("passport");

// const GOOGLE_CLIENT_ID = "250759915933-vrgts2h10j4nstco7kucavu6kt13k8s3.apps.googleusercontent.com"

// const GOOGLE_CLIENT_SECRET = "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"
  
// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile) {
//     // User.findOrCreate({ googleId: profile.id }, function (err, user) {
//     //   return cb(err, user);
//     // });
//     //  const user ={
//     //    username: profile.displayName,
//     //    avatar: profile.photos[0]
//     //  };
//     //  user.save
//     done(null, profile);
//   }
// ));

// passport.serializeUser((user,done)=>{
//   done(null,user)
// })
// passport.deserializeUser((user,done)=>{
//   done(null,user)
// })