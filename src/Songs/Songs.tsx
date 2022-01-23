import React from "react";
import Track from "./../Home/Track";
import styled from "styled-components";

const Songs = React.memo(() => {
  return (
    <StyledWrapper>
      <Track title="Favorite Songs" />
    </StyledWrapper>
  );
});
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 30px 50px;
`;

export default Songs;
