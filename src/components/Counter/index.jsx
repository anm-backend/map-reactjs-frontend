import { useSelector } from "react-redux";

import ShowResult from "./ShowResult";
import ActionSender from "./ActionSender";

export function Counter() {
  const { isLoadding } = useSelector((state) => state.counter);

  return (
    <>
      <h1>{isLoadding ? `LOADDING...` : `Counter Component`}</h1>
      <ShowResult />
      <ActionSender />
    </>
  );
}
