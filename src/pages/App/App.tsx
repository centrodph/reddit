import React from "react";
import { useSelector } from "react-redux";
import { selectAppVersion } from "selectors";
import { Reddit, Header, Footer } from "components";

const App: React.FC = () => {
  const version = useSelector(selectAppVersion);
  return (
    <div className="App">
      <Header />
      <Reddit />
      <Footer version={version} />
    </div>
  );
};

export default App;
