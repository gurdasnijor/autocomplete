import React from "react";
import { Pane } from "evergreen-ui";
import Search from "./components/Search";

const App: React.FC<{}> = () => {
  return (
    <Pane width="100vw" height="100vh" display="flex" flexGrow={1}>
      <Search />
    </Pane>
  );
};

export default App;
