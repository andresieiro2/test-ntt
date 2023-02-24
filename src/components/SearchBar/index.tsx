import { Grid } from "@ui5/webcomponents-react";

import { Input, Button } from "@ui5/webcomponents-react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/slices/movies";

import "./style.scss";

import { AppDispatchType } from "./../../store";

const SearchBar = () => {
  const dispatch = useDispatch<AppDispatchType>();
  const isLoading = useSelector((state: any) => state.movies.loading);

  const [searchValue, setSearchValue] = useState<string>("");

  const changeInput = (event: any) => {
    setSearchValue(event.target.value || "");
  };

  const searchMovies = () => {
    dispatch(actions.fetchMovies({ search: searchValue }));
  };

  const reset = () => {
    dispatch(actions.resetState({}));
    setSearchValue("");
  };

  return (
    <div
      className="search-bar"
      style={{ pointerEvents: `${isLoading ? "none" : "all"}` }}
    >
      <Grid>
        <div
          data-layout-indent="XL1 L1 M0 S0"
          data-layout-span="XL5 L5 M12 S12"
        >
          <Input
            className="search-field"
            placeholder="Type the movie title"
            onInput={changeInput}
            value={searchValue}
          />
        </div>

        <div data-layout-span="XL2 L2 M12 S12">
          <Button
            className="buttons"
            onClick={searchMovies}
            disabled={!searchValue}
          >
            Search
          </Button>
        </div>

        <div data-layout-span="XL2 L2 M12 S12">
          <Button className="buttons" onClick={reset}>
            Reset
          </Button>
        </div>
      </Grid>
    </div>
  );
};

export default SearchBar;
