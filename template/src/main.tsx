import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import "antd/dist/antd.css";
import { Provider } from "mobx-react";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import App from "./app";
import store from "./stores";

const children = (
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider children={children} {...store} />
);
