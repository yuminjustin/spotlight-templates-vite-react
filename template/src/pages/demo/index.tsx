import { Observer, inject } from "mobx-react";
import Heads from "./head";
import List from "./list";
import Footer from "./foot";

const Demo = inject(
  "todos",
  "types"
)((props: any) => {
  return (
    <Observer>
      {() => (
        <div className="mainbox">
          <h1>Typescript Mobx todo</h1>
          <Heads todos={props.todos} />
          <div className="listbox">
            <List todos={props.todos} types={props.types} />
          </div>
          <Footer todos={props.todos} types={props.types} />
        </div>
      )}
    </Observer>
  );
});

export default Demo;
