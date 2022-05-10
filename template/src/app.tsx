import React, { useState } from "react";
import { HashRouter } from "react-router-dom";
import { Layout } from "antd";
import Left from "./components/layout/menu";
import Heads from "./components/layout/head";
import Content from "./components/layout/content";

const App = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <HashRouter>
      <Layout style=\{{ height: "100vh" }}>
        <Left
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        />
        <Layout className="site-layout">
          <Heads />
          <Content />
        </Layout>
      </Layout>
    </HashRouter>
  );
};

export default App;
