import { Observer, inject } from "mobx-react";
import Item from "./item";
import Todo from "../../stores/models/todo";

const List = inject(
  "todos",
  "types"
)((props: any) => {
  const { todos, types } = props;

  return (
    <Observer>
      {() =>
        todos.list.length === 0 ? (
          <div></div>
        ) : (
          <ul>
            {todos.list
              .filter((todo: Todo) => {
                if (types.type == 2 && todo.completed) {
                  return !0;
                }
                if (types.type == 1 && !todo.completed) {
                  return !0;
                }
                if (types.type == 0) {
                  return !0;
                }
              })
              .map((todo: Todo, key: number) => {
                return <Item todo={todo} key={key} />;
              })}
          </ul>
        )
      }
    </Observer>
  );
});

export default List;
