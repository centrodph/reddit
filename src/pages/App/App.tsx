import React from "react";
import { useSelector } from "react-redux";
import { selectAppVersion } from "selectors";
import { Reddit } from "components";

const App: React.FC = () => {
  const version = useSelector(selectAppVersion);
  return (
    <div className="App">
      <Reddit />
      app {version}
    </div>
  );
};

export default App;
