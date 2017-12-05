import React from "react";
import {Card} from "antd";
import {BrowserRouter, Switch, Link} from "react-router-dom";

export default class PCNewsBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            news: ""
        };
    }

    componentWillMount() {
        var fetchOption = {
            method: "GET"
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, fetchOption)
            .then(response => response.json())
            .then(json => this.setState({news: json}));
    }

    render() {
        const {news} = this.state;
        const newsList = news.length
            ?
            news.map(function (newsItem, index) {
                return (

                    <li key={index}>
                        <Link to={`/details/${newsItem.uniquekey}`} target="_blank">
                            {newsItem.title}
                        </Link>
                    </li>
                )
            })
            :
            "没有加载到任何新闻";

        console.log(newsList);

        return (
            <div className="topNewsList">
                <Card>
                        <ul>
                            {newsList}
                        </ul>
                </Card>
            </div>
        );
    }
}