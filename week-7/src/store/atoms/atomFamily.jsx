import { atomFamily } from "recoil";
import { TODOS } from "../../constants";

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: (id) => {
    return TODOS.find((todo) => todo.id === id);
  },
});
