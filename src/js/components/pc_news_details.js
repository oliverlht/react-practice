import React from "react";
import {Row, Col, BackTop} from "antd";

import PCNewsImageBlock from "./pc_news_image_block";

export default class PCNewsDetails extends React.Component{
    constructor(){
        super();
        this.state = {
            newsItem:""
        };
    };

    componentDidMount(){
        var fetchOption = {
            method: "GET"
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey,fetchOption)
            .then(response => response.json())
            .then(json => {
                this.setState({newsItem: json});
                document.title = this.state.newsItem.title + "React News | React 驱动的新闻平台";
            });
    };


    render(){
        console.log(this.props);
        const htmlContent = {__html: this.state.newsItem.pagecontent};
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="container">
                        <div className="articleContainer" dangerouslySetInnerHTML={htmlContent}></div>
                    </Col>
                    <Col span={6}>
                        <PCNewsImageBlock count={20} type="top" cardTitle="相关新闻" width="100%" imageWidth="150px"/>
                    </Col>
                    <Col span={2}></Col>
                    <BackTop/>
                </Row>
            </div>
        );
    };
}