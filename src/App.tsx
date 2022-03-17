import { Button } from "components/button";
import { Number } from "components/number";
import { Panel } from "components/panel";
import { useEffect, useState } from "react";

export const App = () => {
  const maxNum: number = 75;
  const [isClick, setIsClick] = useState<boolean>(false);
  const [num, setNum] = useState<number>();
  useEffect(() => {
    if (isClick) {
      // setNum
    }
  }, [isClick]);
  return (
    <>
      <Panel isClick={isClick} />
      <div className="btn_wrapper">
        <Button id="" isClick={isClick} setIsClick={setIsClick} />
      </div>
      <Number maxNum={maxNum}/>
      <div className="btn_wrapper">
        <Button id="reset" />
      </div>
    </>
  );
};
