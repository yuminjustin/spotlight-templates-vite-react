import { Observer, inject } from "mobx-react";

const Footer = inject(
  "todos",
  "types"
)((props: any) => {
  const { todos, types } = props;
  const showAll = (): void => {
    /* 查看所有 */
    types.changeType(0);
  };

  const showNone = (): void => {
    /* 查看未选择 */
    types.changeType(1);
  };

  const showChoose = (): void => {
    /* 查看已选择 */
    types.changeType(2);
  };

  const deleteHandler = (): void => {
    todos.delete();
  };

  return (
    <Observer>
      {() => (
        <div className="last_info">
          <p className="info">{todos.noChoose}项未选择</p>
          <p className="choose_btn">
            <span className={types.type == 0 ? "active" : ""} onClick={showAll}>
              所有
            </span>
            <span
              className={types.type == 1 ? "active" : ""}
              onClick={showNone}
            >
              未选
            </span>
            <span
              className={types.type == 2 ? "active" : ""}
              onClick={showChoose}
            >
              已选
            </span>
          </p>
          <button
            className="del"
            style=\{{ display: todos.active ? "initial" : "none" }}
            onClick={deleteHandler}
          >
            删除选中项
          </button>
        </div>
      )}
    </Observer>
  );
});

export default Footer;
