/*
 * @Author: your name
 * @Date: 2020-09-23 19:31:16
 * @LastEditTime: 2020-09-24 21:17:08
 * @LastEditors: Please set LastEditors
 * @Description: 注册组件
 * @FilePath: \afzhipin-client\src\containers\register\register.js
 */
import React, { Component } from 'react';
import { 
    NavBar, // 导航栏
    WingBlank, // 两翼留白
    List, // 列表
    InputItem, // 文本输入
    WhiteSpace, // 上下留白
    Radio, // 单选框
    Button // 按钮
} from 'antd-mobile';

import Logo from '../../components/logo/logo';// 引入logo

const Item = List.Item;

export default class Register extends Component {
    state = {
        username: '',//用户名
        password: '',//密码
        password2: '',//确认密码
        type: ''//用户类型
    }
    // 注册,打印表单信息
    register = () => {
        console.log(this.state);
    }
    // 处理输入数据的改变
    handleChange = (name, val) => {
        // 更新对应状态
        this.setState({
            [name]: val // 属性名不是name，而是name变量的值
        })
    }
    // 转登录
    toLogin = () => {
        this.props.history.replace('/login')
    }
    render() {
        const {type} = this.state;
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
                        <InputItem placeholder='请输入确认密码' type='password' onChange={val => this.handleChange('password2', val)}>确认密码：</InputItem>
                        <WhiteSpace/>
                        <Item>
                            用户类型：
                            <Radio checked={type==='求职者'} onChange={() => this.handleChange('type', '求职者')}>求职者</Radio>
                            <Radio checked={type==='老板'} onChange={() => this.handleChange('type', '老板')}>老板</Radio>
                        </Item>
                        <WhiteSpace/>
                        {/* 注册 */}
                        <Button type='primary' onClick={this.register}>注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</Button>
                        <WhiteSpace/>
                        {/* 转登录 */}
                        <Button onClick={this.toLogin}>已有帐户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
