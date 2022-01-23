import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styled from "styled-components";
import { Songs } from "components/Items";
import { range } from "lodash";

interface IProps {
  title?: string;
  subtitle?: string;
  showSeeAll?: boolean;
}
const Track = React.memo((props: IProps) => {
  const { title, subtitle, showSeeAll } = props;

  return (
    <StyledWrapper>
      {subtitle && <Typography variant="h6">{subtitle}</Typography>}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h5">{title}</Typography>
        {showSeeAll && <Button endIcon={<ArrowForwardIcon />}>see all</Button>}
      </Stack>
      <Stack sx={{ overflow: "auto", paddingRight: 2 }} spacing={2}>
        <Songs title={"title" + 1} subtitle={"sub" + 1} />
        {range(0, 10).map((item, i) => (
          <Songs key={i} title={"title" + item} subtitle={"sub" + item} />
        ))}
      </Stack>
    </StyledWrapper>
  );
});
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export default Track;
