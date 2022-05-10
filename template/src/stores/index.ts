import TodoStore from "./todos";
import TypeStore from "./types";
import Users from "./users";

const todos = new TodoStore([]);
const types = new TypeStore();
const user = new Users();

export default {
  todos,
  types,
  user,
};
