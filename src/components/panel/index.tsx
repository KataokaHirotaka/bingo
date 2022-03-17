import "./index.scss";

type Props = {
  isClick: boolean;
};

export const Panel = (props: Props) => {
  return (
    <div className="panel_wrapper">
      <div id="panel1" className="panel"></div>
      <div id="panel10" className="panel"></div>
    </div>
  );
};
