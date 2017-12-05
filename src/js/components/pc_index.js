import React from "react";
import {Route} from "react-router-dom";
import PCHeader from "./pc_header";
import PCFooter from "./pc_footer"
import PCNewsContainer from "./pc_newscontainer"
import PCNewsDetails from "./pc_news_details"

export default class PCIndex extends React.Component {
    render() {
        return (
                <div>
                    <PCHeader/>
                    <Route exact path="/" component={PCNewsContainer}/>
                    <Route path="/details/:uniquekey" component={PCNewsDetails}/>
                    <PCFooter/>
                </div>
        );
    };
}