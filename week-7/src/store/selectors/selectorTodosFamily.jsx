import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";

export const selectorTodosFamily = atomFamily({
  key: "selectorTodosFamily",
  default: selectorFamily({
    key: "selectorTodosFamilyDefault",
    get:
      (id) =>
      async ({ get }) => {
        const res = await axios.get(
          `https://sum-server.100xdevs.com/todo?id=${id}`
        );
        return res.data.todo;
      },
  }),
});
