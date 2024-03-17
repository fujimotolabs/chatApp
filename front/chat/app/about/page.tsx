"use client";
import { useState } from "react";

const Page = () => {
  const [state, setState] = useState(0);
  return (
    <>
      <p>{state}</p>
      <button onClick={() => setState(state + 1)}>Increment</button>
      <p>about</p>
      <p>about1</p>
    </>
  );
};
export default Page;
