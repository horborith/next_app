import React from "react";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
interface IProps {
  title?: string;
  subtitle?: string;
}
const Songs = React.memo((props: IProps) => {
  const { title, subtitle } = props;
  return (
    <Stack flexDirection="row" justifyContent="space-between">
      <Stack flexDirection="row" alignItems="center">
        <StyledImgWraper>
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
        <Typography>3:50</Typography>
      </Stack>
    </Stack>
  );
});

const StyledImgWraper = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 20px;
  img {
    width: 100%;
    border-radius: 5px;
  }
`;
export default Songs;
