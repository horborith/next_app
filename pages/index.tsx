import type { NextPage } from "next";
import Layouts from "../components/Layouts";
import Home from "src/Home";

const HomePage: NextPage = () => {
  return (
    <Layouts>
      <Home />
    </Layouts>
  );
};

export default HomePage;
