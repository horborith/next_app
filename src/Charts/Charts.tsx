import React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import styled from "styled-components";
const Charts = React.memo(() => {
  const [add, setAdd] = React.useState(0);
  //   const [state1, setState1] = React.useState(false);
  const handleClick = () => {
    setAdd(add + 1);
  };
  console.log("state::::", add);
  return (
    <div>
      <Typography variant="h1">{add}</Typography>
      <Button size="large" variant="contained" onClick={handleClick}>
        Click
      </Button>
      <ComA onClick={handleClick} />
    </div>
  );
});

const ComA = ({ onClick }: any) => {
  console.log("ComA");
  return (
    <StyledA>
      <Typography variant="h1">AAAAAA</Typography>
      <Button onClick={onClick} size="large" variant="contained">
        ClickA
      </Button>
    </StyledA>
  );
};
// const ComB = React.memo(({ state }: any) => {
//   console.log("ComB", state);
//   return <Typography variant="h1">BBBBBB</Typography>;
// });

const StyledA = styled.div`
  border: 1px solid red;
`;
export default Charts;
