import axios from "axios";
import { atom, selector } from "recoil";

export const notifications = atom({
  key: "myNetworkAtom",
  default: selector({
    key: "networkAtomSelector",
    get: async () => {
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      return res.data;
    },
  }),
});
