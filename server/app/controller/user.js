'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx, app } = this;
    const data = ctx.request.body
    const result = await this.app.mysql.get("user",{name:data.name})
    if (!result || !(data.password === result.password)) {
      ctx.body = { code: 500, msg: '登录失败' };
    } else {
      const token = app.jwt.sign({
        name: data.name
      }, app.config.jwt.secret)
      ctx.body = 
      { 
        code: 200, 
        msg: '登录成功',
        token: token
      };
    }
  }
  async register() {
    const { ctx } = this
    const data = ctx.request.body
    const result = await this.app.mysql.get("user",{name:data.name})
    if (!result) {
      this.app.mysql.insert('user',data)
      ctx.body = 
      { 
        code: 200, 
        msg: '注册成功'
      };
    } else {
      ctx.body = { code: 500, msg: '注册失败' };
    }
  }
  async index() {
    const { ctx } = this;
    ctx.body = { code: 201, msg: '验证成功' };
  }
}

module.exports = UserController