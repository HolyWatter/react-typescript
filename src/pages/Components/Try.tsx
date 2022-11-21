import * as React from "react";
import { FunctionComponent } from "react";
import { TryInfo } from "../NumBaseball";

const Try: FunctionComponent<{ tryInfo: TryInfo }> = ({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
};

export default Try;
