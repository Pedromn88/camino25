import React from "react";
import "./styledCustom.scss";
interface CountCustomProps {
  count: number;
  type: string;
}

const CountCustom: React.FC<CountCustomProps> = ({ count, type }) => {
  return (
    <div className="center-count subcontent">
      <h2 className="tittle-count">ESTRELLÓMETRO</h2>
      <div key={count} className="animated-text animate">
        {count
          .toString()
          .split("")
          .map((digit: string, index: number) => (
            <span key={index} className={`${type} count-number`}>
              {digit}
            </span>
          ))}
      </div>
    </div>
  );
};

export default CountCustom;
