import * as React from "react";
import { useState, useCallback, useRef } from "react";

const MainPage = () => {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭해서 시작하세요");
  const [result, setResult] = useState<number[]>([]);
  const timeout = useRef<number | null>(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  const onClickScreen = useCallback(() => {
    if (state === "waiting") {
      timeout.current = window.setTimeout(() => {
        setState("now");
        setMessage("지금클릭");
        startTime.current = new Date().getTime();
      }, Math.floor(Math.random() * 1000) + 2000);
      setState("ready");
      setMessage("초록색이 되면 클릭하세요");
    } else if (state === "ready") {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      setState("waiting");
      setMessage("너무 성급하시군요! 초록색이 된 후에 클릭하세요");
    } else if (state === "now") {
      endTime.current = new Date().getTime();
      setState("wating");
      setMessage("클릭해서 시작하세요");
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  }, [state]);

  const onReset = useCallback(() => {
    setResult([]);
  }, []);

  const renderAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div>평균시간 : {result.reduce((a, c) => a + c) / result.length}ms</div>
        <button onClick={onReset}>리셋</button>
      </>
    );
  };

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </>
  );
};

export default MainPage;
