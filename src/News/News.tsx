import React from "react";
import styled from "styled-components";
import { Typography, Grid, Button } from "@mui/material";
import { Playlists } from "components/Items";
import { range } from "lodash";
import { useAppSelector, useAppDispatch } from "@redux";
import { selectProduct, addNewProduct } from "@redux/reducers/productSlice";
const News = React.memo(() => {
  const dispatch = useAppDispatch();
  const haddleClick = () => {
    const item = { id: "3", name: "Water" };
    dispatch(addNewProduct(item));
  };
  return (
    <StyledWrapper>
      <Button onClick={haddleClick}>Add</Button>
      <Typography variant="h4">New Releases</Typography>
      <Grid container spacing={2}>
        {range(0, 30).map((item, i) => (
          <Grid item xs={3}>
            <Playlists key={i} title={`Title ${item}`} subtitle="subtitle" />
          </Grid>
        ))}
      </Grid>
    </StyledWrapper>
  );
});

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 50px;
`;

export default News;
