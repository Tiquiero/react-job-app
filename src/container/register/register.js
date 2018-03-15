import React from 'react';
import Logo from '../../component/logo/logo';
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile';

export default class Register extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Logo></Logo>
                <h2>注册页</h2>
                <WingBlank>
                    <Button type='primary'>登录</Button>
                    <WhiteSpace/>
                    <Button onClick={() => this.register()} type='primary'>注册</Button>
                </WingBlank>
            </div>
        )
    }

    register(){
        alert(1);
    }
}
