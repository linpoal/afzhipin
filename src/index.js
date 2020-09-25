/*
 * @Author: your name
 * @Date: 2020-09-23 15:59:55
 * @LastEditTime: 2020-09-24 21:14:37
 * @LastEditors: Please set LastEditors
 * @Description: 入口文件
 * @FilePath: \afzhipin-client\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
// import {Provider} from 'react-redux';

import 'antd-mobile/dist/antd-mobile.css';// 引入样式

import Register from './containers/register/register';// 引入注册组件
import Login from './containers/login/login';// 引入登陆组件
import Main from './containers/main/main';// 引入主界面组件
// import store from './redux/store';

ReactDOM.render((
  // <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/register' component={Register}></Route>
        <Route path='/login' component={Login}></Route>
        <Route><Main/></Route>
      </Switch>
    </HashRouter>
  // </Provider>
), document.querySelector('#root'));
