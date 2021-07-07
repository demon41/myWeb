'use strict';

const Controller = require('egg').Controller;
const nodemailer = require('nodemailer');

// 封装发送者信息
const transporter = nodemailer.createTransport({
  service: 'qq', // 调用qq服务器 发送者的邮箱厂商，支持列表：https://nodemailer.com/smtp/well-known
  secureConnection: true, // 启动SSL
  port: 465, // SMTP端口
  auth: {
    user: '623619478@qq.com', // 账号
    pass: 'zeqygimmhtuvbbjf', // SMTP授权码
  },
});

const mailOptions = {
  from: '623619478@qq.com', // 发送者,与上面的user一致
  to: '', // 接收者,可以同时发送多个,以逗号隔开
  subject: '测试的邮件', // 标题
  // text: '测试内容', // 文本
  html: '<h2>测试一下:</h2><a href="https://sphard.com">测试SPhard链接</a>',
};

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
      mailOptions.to = data.email
      // 调用函数，发送邮件
      const sendMail = await transporter.sendMail(mailOptions);
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
    const { ctx } = this
    console.log(path)
    // ctx.set('content-type','image/jpeg')
    // ctx.body = fs.createReadStream('app/public/images/001.jpg');
  }
  async getImage() {
    const { ctx } = this;
    let imgurls= [
      {
        id: 1,
        url: '/public/images/4444.jpg',
        title: '游戏王',
        routeName: 'FateList'
      },
      {
        id: 2,
        url: '/public/images/4444.jpg',
        title: 'Yan',
        routeName: 'Yan'
      },
      {
        id: 3,
        url: '/public/images/4444.jpg',
        title: null,
        routeName: 'FateList'
      }
    ];
    // 生成一个文件写入 文件流
    // try {
    //   // 异步把文件流 写入
    //   await awaitWriteStream(stream.pipe(writeStream));
    // } catch (err) {
    //   // 如果出现错误，关闭管道
    //   await sendToWormhole(stream);
    //   throw err;
    // }
    ctx.body = {
      code: 200,
      imgurls
    }
  }
}

module.exports = UserController