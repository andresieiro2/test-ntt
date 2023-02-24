import { Grid, StandardListItem, List, Icon } from "@ui5/webcomponents-react";
import { Text, Button, Title } from "@ui5/webcomponents-react";
import { useDispatch, useSelector } from "react-redux";
import { IMovie } from "./../../types/movie";
import { actions } from "../../store/slices/movies";

import "./style.scss";

const MovieCard = () => {
  const movies = useSelector((state: any) => state.movies.list);
  const selected = useSelector((state: any) => state.movies.selected);

  const dispatch = useDispatch();

  const setSelected = (item: IMovie) => {
    dispatch(actions.setSelectedMovie(item));
  };
  return (
    <>
      {!selected && movies && movies.length > 0 && (
        <Grid>
          <div
            data-layout-indent="XL3 L3 M0 S0"
            data-layout-span="XL6 L6 M12 S12"
          >
            <List
              className="list-movies"
              headerText="Select your movie:"
              mode="SingleSelect"
            >
              {movies.map((movie: IMovie, index: number) => (
                <StandardListItem
                  key={`movie-list-item-${index}`}
                  icon="globe"
                  onClick={() => setSelected(movie)}
                >
                  {movie.Title}
                </StandardListItem>
              ))}
            </List>
          </div>
        </Grid>
      )}

      {selected && (
        <div className="movie-card">
          {selected && (
            <Grid>
              <div
                data-layout-indent="XL1 L1 M0 S0"
                data-layout-span="XL6 L6 M12 S12"
              >
                <Title className="title">{selected.Title}</Title>
                <Text className="paragraph description">
                  {selected.Description ||
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum nibh luctus, fermentum ex ac, egestas urna. Donec molestie quis sapien eget hendrerit. Aenean in tortor enim. Nam porta tellus quis magna lacinia rutrum. Nulla eget suscipit velit. Vestibulum et arcu quam. Phasellus suscipit tempus lorem, eget rutrum orci sagittis vitae. Donec non enim urna."}
                </Text>
                <Text className="paragraph">
                  <span>Actor: </span>
                  {selected.Actor || "Lorem ipsum dolor"}
                </Text>
                <Text className="paragraph">
                  <span>Year: </span>
                  {selected.Year}
                </Text>
                <Text className="paragraph">
                  <span>Review:</span>
                  {selected.Review}
                  <Icon name="favorite" />
                  <Icon name="favorite" />
                  <Icon name="favorite" />
                  <Icon name="favorite" />
                </Text>
                <Button className="button-favourite">
                  Favourite
                  <Icon name="heart" />
                </Button>
              </div>

              <div data-layout-span="XL4 L4 M12 S12">
                <img
                  src={selected.Poster}
                  alt={selected.Title}
                  className="poster"
                />
              </div>
            </Grid>
          )}
        </div>
      )}
    </>
  );
};

export default MovieCard;
