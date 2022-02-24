import React from "react";
import Divider from "@mui/material/Divider";

import NewReleases from "./NewRelease";
import HotTract from "./HotTract"
import styled from "styled-components";

const Home = React.memo(() => {
  return (
    <div>
      <StyledWrapper>
        <NewReleases title="New" />
        <Divider sx={{ marginTop: 5, marginBottom: 5 }} />
      </StyledWrapper>

      <StyledWrapper>
        <HotTract title="Hot Tract" />
        <Divider sx={{ marginTop: 5, marginBottom: 5 }} />
      </StyledWrapper>

    </div>
  );
});
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 50px;
`;

export default Home;
