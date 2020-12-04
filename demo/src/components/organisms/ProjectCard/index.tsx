import React from "react";
import { Card } from "antd";

export default function index() {
  return (
    <Card
      hoverable
      style={{ width: 400, margin: "10px" }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      title={"相談室"}
    ></Card>
  );
}
