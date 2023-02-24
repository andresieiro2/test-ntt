import "./style.scss";

import { FlexBox } from "@ui5/webcomponents-react";

import { Text } from "@ui5/webcomponents-react";

const Header = () => (
  <FlexBox
    className="header"
    alignItems="Center"
    justifyContent="Center"
    wrap="Wrap"
  >
    <Text>Header</Text>
  </FlexBox>
);

export default Header;
