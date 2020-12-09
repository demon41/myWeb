'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const user = await ctx.service.user.find()
    ctx.body = user
  }
  async insert() {
    const { ctx } = this
    const result = await this.app.mysql.insert('test', ctx.request.body)
    console.log(result)
    ctx.body = true
  }
  async delete() {
    const { ctx } = this
    const result = await this.app.mysql.delete('test', { id: ctx.request.query.id })
    ctx.body = true
  }
  async put() {
    const { ctx } = this
    const result = await this.app.mysql.update('test', ctx.request.body)
    ctx.body = true
  }
}

module.exports = HomeController
