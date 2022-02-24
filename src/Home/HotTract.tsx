import React from "react";
import { Playlists } from "components/Items";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styled from "styled-components";
import { range } from "lodash";


import Slider from "react-slick";

interface IProps {
  title?: string;
}
const HotTract = React.memo((props: IProps) => {
  const { title } = props;
  return (
    <StyledWrapper>
      <Typography variant="h6">{title || "Hot Tract"}</Typography>
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        my={4}
      >
        <Typography variant="h4">Gobal Top 50</Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        {range(0, 4).map((item, i) => (
          <Playlists key={i} title={"title" + item} />
        ))}
      </Stack>
    </StyledWrapper>
  );
});

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
`;

export default HotTract;