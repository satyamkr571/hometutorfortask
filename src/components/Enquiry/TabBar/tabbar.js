import React from "react";
import "./tabbar.scss";
import { Tabs } from "antd";
import Premiumform from './premiumform/premiumform'

const { TabPane } = Tabs;

export default function Tabbar() {
  return (
    <div className="container tabconatiner">
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Premium" key="1" style={{fontSize:"larger"}}>
          <Premiumform />
        </TabPane>
        <TabPane tab="Assignment" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Project" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
}
