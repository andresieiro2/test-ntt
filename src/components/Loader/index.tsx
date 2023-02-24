import "./style.scss";

import { FlexBox, Loader } from "@ui5/webcomponents-react";
import { useSelector } from "react-redux";

const LoaderOverlay = () => {
  const isLoading = useSelector((state: any) => state.movies.loading);

  return (
    <>
      {isLoading && (
        <FlexBox
          className="loader-overlay"
          alignItems="Center"
          justifyContent="Center"
          wrap="Wrap"
        >
          <Loader progress="60%" />
        </FlexBox>
      )}
    </>
  );
};

export default LoaderOverlay;
