import React from "react";
import Divider from "@mui/material/Divider";

import NewReleases from "./NewRelease";
import styled from "styled-components";

const Home = React.memo(() => {
  return (
    <StyledWrapper>
      <NewReleases title="Hello" />
      <Divider sx={{ marginTop: 5, marginBottom: 5 }} />
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
