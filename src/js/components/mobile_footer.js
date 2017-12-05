import React from "react";
import {Row, Col} from "antd";

export default class MobileFooter extends React.Component{
    render(){
      return (
          <footer>
              <Row>
                  <Col span={2}>col-2</Col>
                  <Col span={20} className="footer">
                      &copy;&nbsp;2016 ReactNews. All Rigth Reserved.
                  </Col>
                  <Col span={2}>col-2</Col>
              </Row>
          </footer>
      );
    };
}