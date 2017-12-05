import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter} from "react-router-dom";
import MediaQuery from "react-responsive";

import 'antd/dist/antd.css';
import PCIndex from "./components/pc_index";
import MobileIndex from "./components/mobile_index";


export default class Root extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <MediaQuery query="(min-device-width:1224px)">
                        <PCIndex/>
                    </MediaQuery>
                    <MediaQuery query="(max-device-width:1224px)">
                        <MobileIndex/>
                    </MediaQuery>
                </div>
            </BrowserRouter>
        );
    };
}

ReactDom.render(<Root/>, document.getElementById("mainContainer"));