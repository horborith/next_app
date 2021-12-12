import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import MyButton from "./../src/components/Button";

const Home: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <MyButton title="Hello" />
      </Box>
    </Container>
  );
};
const StyledButton = styled(Button)`
  display: flex;
  /* background-color: #097979;
  &:hover {
    background-color: blue;
  } */
`;
export default Home;
