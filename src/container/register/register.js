import React from 'react';
import Logo from '../../component/logo/logo';
import {List, InputItem, WingBlank, WhiteSpace, Button ,Radio} from 'antd-mobile';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {regisger} from '../../redux/user.redux';

@connect(
    state => state.user,
    {regisger}
)

export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user:'',
            pwd:'',
            repeatpwd:'',
            type:'genius'
        }
    }
    render(){
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                <Logo></Logo>
                <h2>注册页</h2>
                <WingBlank>
                    <List>
                        {this.props.msg?<p style={styles.errorMsg}>{this.props.msg}</p>:null}
                        <InputItem 
                            onChange={v => this.handleChange('user',v)}>用户名</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password"
                            onChange={v => this.handleChange('pwd',v)}>密码</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password"
                            onChange={v => this.handleChange('repeatpwd',v)}>确认密码</InputItem>
                        <WhiteSpace/>
                        <RadioItem 
                            checked={this.state.type == 'genius'}
                            onChange={() => this.handleChange('type','genius')}>牛人</RadioItem>
                        <RadioItem 
                            checked={this.state.type == 'boss'}
                            onChange={() => this.handleChange('type','boss')}>BOSS</RadioItem>
                        <WhiteSpace/>
                        <Button onClick={() => this.handleRegister()} type='primary'>注册</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }

    handleRegister(){
        this.props.regisger(this.state)
    }

    handleChange(key,val){
        this.setState({
            [key]:val
        });
    }
}


const styles = {
    errorMsg:{
        color:'#f50',
        padding:'10px 0 0 10px'
    }
}