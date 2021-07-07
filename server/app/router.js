'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.post('/user/login', controller.user.login);
  router.post('/user/register', controller.user.register);
  router.get('/user/getChooseImage', jwt, controller.user.getImage);
};  