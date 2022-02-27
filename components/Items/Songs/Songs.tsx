import React from "react";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import { useAppDispatch } from "@redux";
import { setplayTrack } from "@redux/reducers/playerSlice";
interface IProps {
  title?: string;
  subtitle?: string;
}
const Songs = React.memo((props: IProps) => {
  const { title, subtitle } = props;
  const dispatch = useAppDispatch();
  const handleFavourite = (title: string) => {
    console.log("Favourite:::::", title);
  };
  const handlePlaySong = () => {
    dispatch(setplayTrack());
  };
  return (
    <StyledWrapper flexDirection="row" justifyContent="space-between">
      <Stack flexDirection="row" alignItems="center">
        <StyledImgWraper onClick={handlePlaySong}>
          <img
            src="https://i.scdn.co/image/ab67706f000000035bde8d5596efdd03f31667fe"
            alt="image"
          />
        </StyledImgWraper>
        <Stack>
          <Typography>{title}</Typography>
          <Typography>{subtitle}</Typography>
        </Stack>
      </Stack>
      <Stack justifyContent="center">
        <Typography className="text-time">3:50</Typography>
        <Stack className="icon-right" direction="row">
          <IconButton size="small" onClick={() => handleFavourite(title || "")}>
            <FavoriteIcon />
          </IconButton>
          <IconButton size="small">
            <AddIcon />
          </IconButton>
        </Stack>
      </Stack>
    </StyledWrapper>
  );
});
const StyledWrapper = styled(Stack)`
  .icon-right {
    display: none;
  }
  &:hover {
    .text-time {
      display: none;
    }
    .icon-right {
      display: block;
    }
  }
`;

const StyledImgWraper = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 20px;
  cursor: pointer;
  img {
    width: 100%;
    border-radius: 5px;
  }
`;
export default Songs;
