import React from "react";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

import NewReleases from "./NewRelease";
import Track from "./Track";
import Discover from "./Discover";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "@redux";
import { selectProduct, addNewProduct } from "@redux/reducers/productSlice";

const Home = React.memo(() => {
  const product = useAppSelector(selectProduct);
  const dispatch = useAppDispatch();
  const haddleClick = () => {
    const item = { id: "3", name: "Water" };
    dispatch(addNewProduct(item));
  };

  return (
    <StyledWrapper>
      <NewReleases title="Releases" subtitle="New" showSeeAll={true} />
      <Divider sx={{ marginTop: 5, marginBottom: 5 }} />
      <Stack
        sx={{ maxHeight: 550, overflow: "hidden" }}
        flex="1"
        flexDirection="row"
      >
        <Track title="Global Top 50" subtitle="Hot Track" />
        <Discover title={`Genres & Moods`} subtitle="Discover" />
      </Stack>
      <Divider sx={{ marginTop: 5, marginBottom: 5 }} />
      <NewReleases title="Featured Playlists" subtitle="Pilihan Editor" />
    </StyledWrapper>
  );
});
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 50px;
`;

export default Home;
