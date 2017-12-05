import React from "react";
import {Card} from "antd";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

export default class PCNewsImageBlock extends React.Component {
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
        const styleImage = {
            display: "block",
            width: this.props.imageWidth,
            height: "90px"
        }
        const styleH3 = {
            width: this.props.imageWidth,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
        }

        const {news} = this.state;
        const newsList = news.length
            ?
            news.map(function (newsItem, index) {
                return (
                    <div key={index} className="imageblock">
                        <Link to={`/details/${newsItem.uniquekey}`} target="_blank" className="custom-image">
                            <div className="custom-image">
                                <img src={newsItem.thumbnail_pic_s} alt={newsItem.title} style={styleImage}/>
                            </div>
                            <div className="custom-card">
                                <h3 style={styleH3}>{newsItem.title}</h3>
                                <p>{newsItem.author_name}</p>
                            </div>
                        </Link>
                    </div>
                );
            })
            :
            "没有加载到任何新闻";

        console.log(newsList);

        return (
                <div className="topNewsList">
                    <Card title={this.props.cardTitle} style={{width:this.props.width}}>
                        {newsList}
                    </Card>
                </div>
        );
    }
}