import {
  AmazonOutlined,
  AppleFilled,
  BehanceOutlined,
  GoogleOutlined,
  NodeCollapseOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import React from "react";
import "./index.css";
const LogoesComponant = () => {
  return (
    <>
      <div className="logo-pairnt">
        <NodeCollapseOutlined style={{ cursor: "pointer" }} />
        <AppleFilled style={{ cursor: "pointer" }} />
        <BehanceOutlined style={{ cursor: "pointer" }} />
        <AmazonOutlined style={{ cursor: "pointer" }} />
        <GoogleOutlined style={{ color: "red", cursor: "pointer" }} />
        <WhatsAppOutlined style={{ color: "green", cursor: "pointer" }} />
      </div>
    </>
  );
};

export default LogoesComponant;
