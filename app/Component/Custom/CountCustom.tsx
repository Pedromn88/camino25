import React from "react";
import "./styledCustom.scss";
import { ThreeDot } from "react-loading-indicators";
interface CountCustomProps {
  count: number;
  type: "beer" | "octo" | "love";
  loading: boolean;
}

const title = {
  beer: "ESTRELLÓMETRO",
  octo: "PULPÓMETRO",
  love: "MENCANTÓMETRO",
}

const color = {
  beer: "#D99130",
  octo: "#1E40AF",
  love: "#dd0873",
}

const CountCustom: React.FC<CountCustomProps> = ({ count, type, loading }) => {
  return (
    <div className="center-count subcontent">
      <h2 className={`tittle-count ${type}-letter`}>{title[type]}</h2>
      <span className="count-number">
        {loading && <ThreeDot variant="bounce" color={color[type]} size="medium" />}
        {!loading && <div key={count} className="animated-text animate">
          {count
            .toString()
            .split("")
            .map((digit: string, index: number) => (
              <span key={index} className={`${type} count-number`}>
                {digit}
              </span>
            ))}
        </div>}
      </span>
    </div>
  );
};

export default CountCustom;
