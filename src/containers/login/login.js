/*
 * @Author: your name
 * @Date: 2020-09-23 19:31:16
 * @LastEditTime: 2020-09-24 21:23:11
 * @LastEditors: Please set LastEditors
 * @Description: 登陆组件
 * @FilePath: \afzhipin-client\src\containers\register\register.js
 */
import React, { Component } from 'react';
import { 
    NavBar, // 导航栏
    WingBlank, // 两翼留白
    List, // 列表
    InputItem, // 文本输入
    WhiteSpace, // 上下留白
    Button // 按钮
} from 'antd-mobile';

import Logo from '../../components/logo/logo';// 引入logo

export default class Login extends Component {
    state = {
        username: '',//用户名
        password: '',//密码
    }
    // 注册,打印表单信息
    login = () => {
        console.log(this.state);
    }
    // 处理输入数据的改变
    handleChange = (name, val) => {
        // 更新对应状态
        this.setState({
            [name]: val // 属性名不是name，而是name变量的值
        })
    }
    // 转注册
    toRegister = () => {
        this.props.history.replace('/register')
    }
    render() {
        return (
            <div>
                <NavBar>阿&nbsp;飞&nbsp;直&nbsp;聘</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        {/* 自定义handleChange方法 */}
                        <InputItem placeholder='请输入用户名' onChange={val => this.handleChange('username', val)}>用户名：</InputItem>
                        <WhiteSpace/>
                        <InputItem placeholder='请输入密码' type='password' onChange={val => this.handleChange('password', val)}>密&nbsp;&nbsp;&nbsp;码：</InputItem>
                        <WhiteSpace/>
                        {/* 登录 */}
                        <Button type='primary' onClick={this.login}>登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</Button>
                        <WhiteSpace/>
                        {/* 转注册 */}
                        <Button onClick={this.toRegister}>注册帐户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
