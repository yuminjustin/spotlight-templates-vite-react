import { useEffect } from "react";
import { Observer, inject } from "mobx-react";
import { Layout, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Header } = Layout;

const Heads = inject("user")((props: any) => {
  useEffect(() => {
    props.user.getUser();
  });
  return (
    <Observer>
      {() => (
        <Header className="head">
          <Avatar size={32} icon={<UserOutlined />} />
          <span>
            Hello，<span>{props.user.name}</span>
          </span>
        </Header>
      )}
    </Observer>
  );
});

export default Heads;
