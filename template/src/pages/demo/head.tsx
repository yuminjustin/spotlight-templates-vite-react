import { useRef } from "react";
import { Observer } from "mobx-react";

const Heads = (props: any) => {
  const { todos } = props;
  const ipt = useRef<HTMLInputElement | null>(null);
  const all = useRef(null);

  const clickHandler = (): void => {
    let v = ipt.current?.value;
    if (v) {
      todos.addTodo(v);
      ipt.current && (ipt.current.value = "");
    }
  };

  const chooseHandler = (): void => todos.toggle();

  return (
    <Observer>
      {() => (
        <div className="addbox">
          <label>
            <input
              type="checkbox"
              className="dbl"
              ref={all}
              onChange={chooseHandler}
              checked={todos.chooseAll}
            />
            全选
          </label>
          <input type="text" placeholder="输入需要添加的文字" ref={ipt} />
          <button onClick={clickHandler}>添加</button>
        </div>
      )}
    </Observer>
  );
};

export default Heads;
