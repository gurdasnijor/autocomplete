import React from "react";
import { Pane, majorScale } from "evergreen-ui";

interface Props {}

const Page: React.FC<Props> = ({ children }) => {
  return (
    <Pane
      display="flex"
      flexDirection="column"
      flex={1}
      width="100%"
      overflow="hidden"
      padding={majorScale(5)}
      maxWidth={1440}
    >
      {children}
    </Pane>
  );
};

export default Page;
