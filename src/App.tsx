import { Button } from "components/button";
import { Number } from "components/number";
import { Panel } from "components/panel";
import { useEffect, useState } from "react";

export const App = () => {
  const [isClick, setIsClick] = useState<boolean>(false);
  useEffect(() => {
    if (isClick) {
    }
  }, [isClick]);
  return (
    <>
      <Panel isClick={isClick} />
      <div className="btn_wrapper">
        <Button id="" isClick={isClick} setIsClick={setIsClick} />
      </div>
      <Number />
      <div className="btn_wrapper">
        <Button id="reset" />
      </div>
    </>
  );
};
