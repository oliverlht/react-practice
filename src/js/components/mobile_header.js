import React from "react";
import {Row, Col} from "antd";
import {Menu, Icon, Form, Modal, Tabs, Input, Button, message} from 'antd';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class MobileHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: "top",
            modalVisble: false,
            action: "login",
            hasLogined: false,
            userNickName: "",
            userId: 0,
        };
    };

    setModalVisible(value){
        this.setState({modalVisble: value});
    };

    handleSubmit(e){
        e.preventDefault();
        var fetchOption = {
            method: "GET"
        }
        var formData = this.props.form.getFieldsValue();
        console.log(formData);
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action="+this.state.action
            +"&username="+formData.userName+"&password="+formData.password
            +"&r_userName="+formData.r_userName+"&r_password="+formData.r_password
            +"&r_confirmPassword="+formData.r_confirmPassword,fetchOption)
            .then(response=>response.json())
            .then(json=>{
                this.setState({userNickName:json.NickUserName,userid:json.UserId});
                if(this.state.action == "login"){
                    this.setState({hasLogined:true});
                }
                message.success("请求成功");
                this.setModalVisible(false);
            });
    };

    changeTab(key){
        if(key == "1"){
            this.setState({action: "login"});
        }else if (key == "2"){
            this.setState({action: "register"});
        }
    }

    login(){
        this.setModalVisible(true);
    };


    render() {
        const {getFieldDecorator} = this.props.form;
        const userShow = this.state.hasLogined ?
            <Icon type="smile-o"/>
            :
            <Icon type="user" onClick={this.login.bind(this)}/>;

        return (
            <div id="mobileheader">
                <header>
                    <img src="/src/images/logo.png" alt="logo"/>
                    <span>ReactNews</span>
                    {userShow}
                </header>
                <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisble}
                       onCancel={() => this.setState({modalVisble: false})}
                       onOk={() => this.setState({modalVisble: false})} okText="关闭">
                    <Tabs type="card" onChange={this.changeTab.bind(this)}>
                        <TabPane tab="登录" key="1">
                            <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    {getFieldDecorator("userName")(<Input placeholder="请输入您的账号"/>)}
                                </FormItem>
                                <FormItem label="密码">
                                    {getFieldDecorator("password")(<Input type="password" placeholder="请输入您的密码"/>)}
                                </FormItem>
                                <Button type="primary" htmlType="submit">登录</Button>
                            </Form>
                        </TabPane>
                        <TabPane tab="注册" key="register">
                            <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    {getFieldDecorator("r_userName")(<Input placeholder="请输入您的账号"/>)}
                                </FormItem>
                                <FormItem label="密码">
                                    {getFieldDecorator("r_password")(<Input type="password" placeholder="请输入您的密码"/>)}
                                </FormItem>
                                <FormItem label="确认密码">
                                    {getFieldDecorator("r_confirmPassword")(<Input type="password" placeholder="请再次输入您的密码"/>)}
                                </FormItem>
                                <Button type="primary" htmlType="submit">注册</Button>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>
            </div>
        );
    };
}

export default MobileHeader = Form.create({})(MobileHeader);