import React from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";
import { evenSelector } from "./store/selectors/even";

const StatemanagementUsage = () => {
  return (
    <div>
      {" "}
      <RecoilRoot>
        <Count />{" "}
      </RecoilRoot>
    </div>
  );
};

const Count = () => {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
};

const CountRenderer = () => {
  const count = useRecoilValue(countAtom);
  //   const [count, setCount] = useRecoilState(countAtom) if we want both read and write
  return (
    <div>
      <b>{count}</b>
    </div>
  );
};

const EvenCountRederer = () => {
  const count = useRecoilValue(countAtom);
  const isEven = useRecoilValue(evenSelector);
  //   const isEven = count % 2 === 0;

  //   const isEvenMemo = useMemo(() => {
  //     return count % 2 === 0;
  //   }, [count]); // if we want to memoize the value

  return <div> {isEven ? "it is even" : null} </div>;
};

const Buttons = () => {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        {" "}
        Decrement
      </button>
    </div>
  );
};

export default StatemanagementUsage;
