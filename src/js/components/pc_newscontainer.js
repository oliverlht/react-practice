import React from "react";
import {Row, Col} from "antd";
import {Menu, Icon, Form, Modal, Tabs, Input, Button, message, Carousel} from 'antd';
import PCNewsBlock from "./pc_news_block";
import PCNewsImageBlock from "./pc_news_image_block";

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

export default class PCNewsContainer extends React.Component{


    render(){
        const settings = {
            dots: true,
            autoplay: true
        };

        return (
            <div>
                <Row>
                    <Col span={2}>col-2</Col>
                    <Col span={20} className="container">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div><img src="/src/images/carousel_1.jpg"/></div>
                                    <div><img src="/src/images/carousel_2.jpg"/></div>
                                    <div><img src="/src/images/carousel_3.jpg"/></div>
                                    <div><img src="/src/images/carousel_4.jpg"/></div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock type="yule" count={6} cardTitle="娱乐" width="400px" imageWidth="112px"/>
                        </div>
                        <div>
                            <Tabs className="tabs_news">
                                <TabPane tab="头条新闻" key="1">
                                    <PCNewsBlock type="top" count={22} />
                                </TabPane>
                                <TabPane tab="国际" key="2">
                                    <PCNewsBlock type="guoji" count={22} />
                                </TabPane>
                            </Tabs>
                        </div>
                    </Col>
                    <Col span={2}>col-2</Col>
                </Row>
            </div>
        );
    };
}