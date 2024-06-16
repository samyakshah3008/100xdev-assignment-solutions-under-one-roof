import React from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";

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

const Buttons = () => {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        {" "}
        Decrement
      </button>
    </div>
  );
};

export default StatemanagementUsage;
