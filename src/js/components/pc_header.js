import React from "react";
import {Row, Col} from "antd";
import {Menu, Icon, Form, Modal, Tabs, Input, Button, message} from 'antd';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class PCHeader extends React.Component {
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

    componentWillMount(){
        if(localStorage.userId != ""){
            this.setState({
                hasLogined: true,
                userNickName: localStorage.userNickName,
                userId: localStorage.userId
            });
        }
    }

    setModalVisible(value){
        this.setState({modalVisble: value});
    };

    handleClick(e){
        if (e.key == "register"){
            this.setState({current: "register"});
            this.setModalVisible(true);
        }else{
            this.setState({current: e.key});
        }
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
                if(this.state.action == "login"){
                    this.setState({userNickName:json.NickUserName,userId:json.UserId});
                    localStorage.userNickName = this.state.userNickName;
                    localStorage.userId = this.state.userId;
                    this.setState({hasLogined:true});
                    message.success("登录成功");
                }else{
                    message.success("注册成功");
                }
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

    logout(){
        this.setState({hasLogined:false});
        localStorage.userNickName = "";
        localStorage.userId = "";
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const userShow = this.state.hasLogined
            ?
            <Menu.Item key="logout" class="register">
                <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
                &nbsp;&nbsp;
                {/*<Link target="_blank">*/}
                    <Button type="dashed" htmlType="button">个人中心</Button>
                {/*</Link>*/}
                &nbsp;&nbsp;
                <Button type="ghost" htmlType="button" onClick={this.logout.bind(this)}>退出</Button>
            </Menu.Item>
            :
            <Menu.Item key="register" class="register">
                <Icon type="appstore"/>注册/登录
            </Menu.Item>
        ;
        return (
            <header>
                <Row>
                    <Col span={2}>col-2</Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src="/src/images/logo.png" alt="logo"/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
                            <Menu.Item key="top">
                                <Icon type="appstore"/>头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="appstore"/>社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type="appstore"/>国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="appstore"/>国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="appstore"/>娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="appstore"/>体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                                <Icon type="appstore"/>科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                                <Icon type="appstore"/>时尚
                            </Menu.Item>
                            {userShow}
                        </Menu>
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
                                <TabPane tab="注册" key="2">
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
                    </Col>
                    <Col span={2}>col-2</Col>
                </Row>
            </header>
        );
    };
}

export default PCHeader = Form.create({})(PCHeader);