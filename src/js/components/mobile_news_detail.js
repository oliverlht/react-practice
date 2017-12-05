import React from "react";
import {Row, Col, BackTop} from "antd";


export default class PCNewsDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            newsItem: ""
        };
    };

    componentDidMount() {
        var fetchOption = {
            method: "GET"
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey, fetchOption)
            .then(response => response.json())
            .then(json => {
                this.setState({newsItem: json});
                document.title = this.state.newsItem.title + "React News | React 驱动的新闻平台";
            });
    };


    render() {
        console.log(this.props);
        const htmlContent = {__html: this.state.newsItem.pagecontent};
        return (
            <div id="mobileDetailsContainer">
                <div className="ucmobileList">
                    <Row>
                        <Col span={24} className="container">
                            <div className="articleContainer" dangerouslySetInnerHTML={htmlContent}></div>
                        </Col>
                        <BackTop/>
                    </Row>
                </div>
            </div>
        );
    };
}