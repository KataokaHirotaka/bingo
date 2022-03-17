import "./index.scss";

type Props = {
  maxNum: number;
}

export const Number = (props: Props) => {
  let num: number[] = [];
  for (let i = 1; i <= props.maxNum; i++) {
    num.push(i);
  }
  // console.log(num, 999);
  return (
    <div className="num_wrapper">
      {num.map((val) => {
        return (
          <div key={val} className="num">
            {val}
          </div>
        );
      })}
    </div>
  );
};
