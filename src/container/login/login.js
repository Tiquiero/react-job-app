import React from 'react';
import Logo from '../../component/logo/logo';
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile';


export default class Login extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Logo></Logo>
                <h2>登录页</h2>
                <WingBlank>
                    <List>
                        <InputItem>用户名</InputItem>
                        <WhiteSpace/>
                        <InputItem>密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type='primary'>登录</Button>
                    <WhiteSpace/>
                    <Button onClick={() => this.register()} type='primary'>注册</Button>
                </WingBlank>
            </div>
        )
    }

    register(){
        this.props.history.push('/register');
    }
}