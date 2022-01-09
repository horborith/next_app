import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

interface IProps {
  title: string;
}
const Playlists = React.memo((props: IProps) => {
  const { title } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <StyledImgWraper>
        <img
          src="https://i.scdn.co/image/ab67706f000000035bde8d5596efdd03f31667fe"
          alt="image"
        />
      </StyledImgWraper>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="body2">subtitle</Typography>
    </Box>
  );
});
const StyledImgWraper = styled.div`
  img {
    width: 100%;
    border-radius: 5px;
  }
`;
export default Playlists;
