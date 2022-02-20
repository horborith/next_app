import React from "react";
import { Playlists } from "components/Items";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styled from "styled-components";
import { range } from "lodash";
// import { SPOTIFY_API } from "config";
import Slider from "react-slick";

interface IProps {
  title?: string;
  subtitle?: string;
  showSeeAll?: boolean;
}
const NewReleases = React.memo((props: IProps) => {
  const { title, subtitle, showSeeAll } = props;
  // SPOTIFY_API.setAccessToken(
  //   "BQB_hbNif50utQpVs1FvvUgswkjJn5AidoKpHss6qi1I46UxFrUt2qNDcMkOX9_nbGFfV_y64bZPlT1_yfhiPiY1vZmAXS5j1-3g8BkrelDWmZ1NdeCZZeL9ekB2FXpHPLR1qbTqTiOO0xbp7242tJj0OXmcc2MxHvJFAbUxLlh52xQ2tekgtJvxO7g0qMVO2WvfJA"
  // );
  // SPOTIFY_API.getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE", function (err, data) {
  //   console.log("data:::::::", data);
  // });
  // SPOTIFY_API.getUserPlaylists("jmperezperez", function (err, data) {
  //   console.log("data::::jmperezperez:::", data);
  // });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <StyledWrapper>
      <Typography variant="h6">{subtitle || "New"}</Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        my={4}
      >
        <Typography variant="h4">{title}</Typography>
        {showSeeAll && <Button endIcon={<ArrowForwardIcon />}>see all</Button>}
      </Stack>
      <Slider {...settings}>
        {range(0, 12).map((item, i) => (
          <Playlists
            key={i}
            title={"title" + item}
            subtitle={"subtitle" + item}
          />
        ))}
      </Slider>
    </StyledWrapper>
  );
});
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export default NewReleases;
