const apiRouter = require('express').Router();

apiRouter.use('/auth', require('controllers/auth.controller'));

apiRouter.use('/email-code', require('controllers/emailToken.controller'));

apiRouter.use('/api/user', require('controllers/user.controller'));
apiRouter.use('/api/user', require('controllers/userSettings.controller'));

module.exports = apiRouter;
