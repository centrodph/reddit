import React from "react";
import { useSelector } from "react-redux";
import { selectAppVersion } from "selectors";

const App: React.FC = () => {
  const ui = useSelector(selectAppVersion);
  return <div className="App">clean app {ui}</div>;
};

export default App;
