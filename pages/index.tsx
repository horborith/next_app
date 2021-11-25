import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-beta with TypeScript example
        </Typography>
        <StyledButton variant="contained">Welcome</StyledButton>
        <IconButton aria-label="fingerprint" color="secondary">
          <Fingerprint />
        </IconButton>
      </Box>
    </Container>
  );
};
const StyledButton = styled(Button)`
  && {
    background-color: #097979;
  }
`;
export default Home;
