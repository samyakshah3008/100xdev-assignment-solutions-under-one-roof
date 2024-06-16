import axios from "axios";
import React, { useEffect } from "react";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { jobAtom } from "./store/atoms/jobAtom";
import { messageAtom } from "./store/atoms/messageAtom";
import { networkAtom } from "./store/atoms/networkAtom";
import { notificationAtom } from "./store/atoms/notificationAtom";
import { totalNotificationsSelector } from "./store/selectors/totalNotifications";

const RecoilDeepDive = () => {
  return (
    <RecoilRoot>
      <RecoilDeepDiveChild />
    </RecoilRoot>
  );
};

const RecoilDeepDiveChild = () => {
  const [networkNotificationCount, setNetworkNotificationCount] =
    useRecoilState(networkAtom);
  const [jobNotificationCount, setJobNotificationCount] =
    useRecoilState(jobAtom);
  const [messageNotificationCount, setMessageNotificationCount] =
    useRecoilState(messageAtom);
  const [notificationCount, setNotificationCount] =
    useRecoilState(notificationAtom);

  const sumOfAllNotifications = useRecoilValue(totalNotificationsSelector);
  //   const sumOfAllNotifications =
  //     networkNotificationCount +
  //     jobNotificationCount +
  //     messageNotificationCount +
  //     notificationCount; // sum of all notifications ugly approach, rather use selector for this. similar to useMemo, we will perform this calculation only when the value of the atom changes

  //     const sumOfAllNotifications = useMemo(()=>{
  //         return networkNotificationCount + jobNotificationCount + messageNotificationCount + notificationCount
  //     }, networkNotificationCount, jobNotificationCount, messageNotificationCount, notificationCount)

  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/notifications")
      .then((response) => {
        console.log(response.data);
        const { network, jobs, messaging, notifications } = response.data;
        setNetworkNotificationCount(network);
        setJobNotificationCount(jobs);
        setMessageNotificationCount(messaging);
        setNotificationCount(notifications);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <button>Home</button>

      <button>
        My Network (
        {networkNotificationCount > 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobNotificationCount})</button>
      <button>Messaging ({messageNotificationCount})</button>
      <button>Notifications ({notificationCount})</button>

      <button>Me ({sumOfAllNotifications})</button>

      <JobCountUpdater />
    </div>
  );
};

const JobCountUpdater = () => {
  const setJobCount = useSetRecoilState(jobAtom);

  const increaseJobCountHandler = () => {
    setJobCount((count) => count + 1);
  };
  return (
    <div>
      <button onClick={increaseJobCountHandler}>Increase job count</button>
    </div>
  );
};

export default RecoilDeepDive;
