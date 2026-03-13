import React from "react";
import "./styledCustom.scss";
interface CountCustomProps {
  count: number;
  type: "beer" | "octo" | "love";
}

const title = {
  beer: "ESTRELLÓMETRO",
  octo: "PULPÓMETRO",
  love: "MENCANTÓMETRO",
}

const CountCustom: React.FC<CountCustomProps> = ({ count, type }) => {
  return (
    <div className="center-count subcontent">
      <h2 className={`tittle-count ${type}-letter`}>{title[type]}</h2>
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
