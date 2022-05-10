import { Result, Button } from "antd";
import { Link } from "react-router-dom";
const NotMatch = () => {
  return (
    <Result
      className="_error_404"
      status="404"
      title="404"
      subTitle="抱歉，您访问的页面不存在。"
      extra={
        <Button type="primary">
          <Link to="/">返回</Link>
        </Button>
      }
    />
  );
};

export default NotMatch;
