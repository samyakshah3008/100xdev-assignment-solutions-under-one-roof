import { selector } from "recoil";
import { jobAtom } from "../atoms/jobAtom";
import { messageAtom } from "../atoms/messageAtom";
import { networkAtom } from "../atoms/networkAtom";
import { notificationAtom } from "../atoms/notificationAtom";

export const totalNotificationsSelector = selector({
  key: "totalNotificationsSelector",
  get: ({ get }) => {
    const networkNotificationCount = get(networkAtom);
    const jobNotificationCount = get(jobAtom);
    const messageNotificationCount = get(messageAtom);
    const notificationCount = get(notificationAtom);

    return (
      networkNotificationCount +
      jobNotificationCount +
      messageNotificationCount +
      notificationCount
    );
  },
});
