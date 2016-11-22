const passport = require('passport');

const AuthenticationController = require('../controllers/authentication_controller');
const passportService = require('./passport');

var requireAuth = passport.authenticate('jwt', {session: false});
var requireLogin = passport.authenticate('local', {session: false});
var router = require('express').Router();

function protected(req, res, next) {
  res.send("Here's the secret");
}

// Auth routes
router.route('/signup')
  .post(AuthenticationController.signup);

router.route('/signin')
  .post([requireLogin, AuthenticationController.signin]);

router.route('/protected')
  .get(requireAuth, protected);

module.exports = router;
