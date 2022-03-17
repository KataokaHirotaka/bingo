import { useState } from "react";
import "./index.scss";

type Props = {
  id?: string;
  isClick?: boolean;
  setIsClick?: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Button = (props: Props) => {
  // const [isClick, setIsClick] = useState<boolean>(false);
  const handleClick = () => {
    if (props.setIsClick)
      props.setIsClick((prevIsClick: boolean) => !prevIsClick);
  };

  if (props.id === "reset") {
    return (
      <div className="btn" id="reset">
        リセット
      </div>
    );
  }
  return (
    <div
      className="btn"
      id={props.isClick ? "stop" : "start"}
      onClick={handleClick}
    >
      {props.isClick ? "ストップ" : "スタート"}
    </div>
  );
};
