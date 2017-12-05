import React from "react";
import MobileList from "./mobile_list";
import {Tabs, Carousel} from "antd";
const {TabPane} = Tabs;

export default class MoblieNewsContainer extends React.Component {
    render() {
        const settings = {
            dots: true,
            autoplay: true
        };
        return (
            <div>
                <Tabs>
                    <TabPane tab="头条" key="1">
                        <div className="carousel">
                            <Carousel {...settings}>
                                <div><img src="./src/images/carousel_1.jpg"/></div>
                                <div><img src="./src/images/carousel_2.jpg"/></div>
                                <div><img src="./src/images/carousel_3.jpg"/></div>
                                <div><img src="./src/images/carousel_4.jpg"/></div>
                            </Carousel>
                        </div>
                        <MobileList type="top" count={5} />
                    </TabPane>
                    <TabPane tab="社会" key="2">
                        <MobileList type="shehui" count={5} />
                    </TabPane>
                    <TabPane tab="国内" key="3">
                        <MobileList type="guonei" count={5} />
                    </TabPane>
                    <TabPane tab="国际" key="4">
                        <MobileList type="guoji" count={5} />
                    </TabPane>
                    <TabPane tab="娱乐" key="5">
                        <MobileList type="yule" count={5} />
                    </TabPane>
                    <TabPane tab="体育" key="6">
                        <MobileList type="tiyu" count={5} />
                    </TabPane>
                    <TabPane tab="科技" key="7">
                        <MobileList type="keji" count={5} />
                    </TabPane>
                    <TabPane tab="时尚" key="8">
                        <MobileList type="shishang" count={5} />
                    </TabPane>
                </Tabs>
            </div>
        );
    };
}