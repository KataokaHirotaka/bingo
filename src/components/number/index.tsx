import "./index.scss";

export const Number = () => {
  let num: number[] = [];
  for (let i = 1; i <= 75; i++) {
    num.push(i);
  }
  console.log(num, 999);
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
