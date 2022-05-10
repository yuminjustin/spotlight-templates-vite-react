import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
import { Layout, Spin, Space } from "antd";
const { Content } = Layout,
  Hello = lazy(() => import("../../pages/hello")),
  Demo = lazy(() => import("../../pages/demo")),
  Test = lazy(() => import("../../pages/test")),
  NoMatch = lazy(() => import("../../pages/error")),
  Contents = () => {
    return (
      <Content className="content">
        <Suspense
          fallback={
            <div className="_error_404">
              <Space size="middle">
                <Spin size="large" />
              </Space>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Hello />} />
            <Route path="/test" element={<Test />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Suspense>
      </Content>
    );
  };

export default Contents;
