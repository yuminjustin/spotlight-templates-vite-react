import { useState } from "react";
import { Observer } from "mobx-react";

const Item = (props: any) => {
  const [isEdit, setIsEdit] = useState<boolean>(!1);
  const [editText, setIsEditText] = useState<string>("");

  const editHandler = (): void => setIsEdit(!0);

  const cancelHandler = (): void => setIsEdit(!1);

  const handleChange = (event: any): void => setIsEditText(event.target.value);

  const submitHandler = (): void => {
    if (editText) {
      props.todo.setTitle(editText);
    }
    cancelHandler();
  };

  const deleteHandler = (): void => {
    setIsEditText("");
    props.todo.destroy();
  };

  const chooseHandler = () => props.todo.toggle();

  return (
    <Observer>
      {() => (
        <li
          onDoubleClick={editHandler}
          className={props.todo.completed ? "selected" : ""}
        >
          <input
            type="checkbox"
            className="dbl"
            style=\{{ display: isEdit ? "none" : "initial" }}
            onChange={chooseHandler}
            checked={props.todo.completed}
          />
          <span
            className="dble"
            style=\{{ display: isEdit ? "none" : "initial" }}
          >
            {props.todo.title}
          </span>
          <input
            type="text"
            placeholder={props.todo.title}
            className="dbl"
            style=\{{ display: isEdit ? "initial" : "none" }}
            value={editText}
            onChange={handleChange}
          />
          <div className="operate">
            <button
              style=\{{
                display: isEdit ? "none" : "initial",
                marginRight: "8px",
              }}
              onClick={deleteHandler}
            >
              删除
            </button>
            <button
              style=\{{
                display: isEdit ? "initial" : "none",
                marginRight: "8px",
              }}
              onClick={submitHandler}
            >
              修改
            </button>
            <button
              style=\{{ display: isEdit ? "initial" : "none" }}
              onClick={cancelHandler}
            >
              取消
            </button>
          </div>
        </li>
      )}
    </Observer>
  );
};

export default Item;
