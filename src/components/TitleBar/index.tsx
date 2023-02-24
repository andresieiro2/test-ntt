import { FlexBox } from "@ui5/webcomponents-react";

import { Grid } from "@ui5/webcomponents-react";

import { Title, Text } from "@ui5/webcomponents-react";

import "./style.scss";

const TitleBar = () => (
  <header className="title-bar">
    <FlexBox
      alignItems="Center"
      justifyContent="Center"
      wrap="Wrap"
      direction="Column"
    >
      <Title level="H1" className="title">
        Movies Search
      </Title>

      <Grid position="Center">
        <div data-layout-indent="XL3 L3 M3 S3" data-layout-span="XL6 L6 M6 S6">
          <Text className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ut tristique odio. Fusce gravida, lacus pharetra accumsan consequat,
            est nisi sollicitudin urna, vitae blandit orci velit ut magna.
          </Text>
        </div>
      </Grid>
    </FlexBox>
  </header>
);

export default TitleBar;
