import React from "react";
import {Route} from "react-router-dom";
import MobileHeader from "./mobile_header";
import MobileFooter from "./mobile_footer";
import MobileNewsContainer from "./mobile_newscontainer";
import MobileNewsDetails from "./mobile_news_detail";

export default class MoblieIndex extends React.Component {
    render() {
        const settings = {
            dots: true,
            autoplay: true
        };
        return (
                <div>
                    <MobileHeader/>
                    <Route exact path="/" component={MobileNewsContainer}/>
                    <Route path="/details/:uniquekey" component={MobileNewsDetails}/>
                    <MobileFooter/>
                </div>
        );
    };
}