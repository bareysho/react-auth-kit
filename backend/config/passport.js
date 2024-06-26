const passport = require('passport');
const LocalStrategy = require('passport-local');

const JwtStrategy = require('passport-jwt').Strategy; // Auth via JWT
const ExtractJwt = require('passport-jwt').ExtractJwt; // Auth via JWT

const { INVALID_CREDENTIALS_ERROR } = require('constants/error');

const { User } = require('database/mongoose');

passport.use('local', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    session: false
  },
  (username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) { return done(err) }

      if (!user || !user.validatePassword(password)) {
        return done(null, false, { message: INVALID_CREDENTIALS_ERROR });
      }

      return done(null, user);
    });
  })
);

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY
};

passport.use('jwt', new JwtStrategy(jwtOptions, (payload, done) => {
    User.findById(payload.id, (err, user) => {
      if (err) {
        return done(err)
      }
      if (user) {
        done(null, user)
      } else {
        done(null, false)
      }
    })
  })
);

module.exports = passport;
