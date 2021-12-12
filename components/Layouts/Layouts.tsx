import React from "react";
import SideBar from "./SideBar";
import styled from "styled-components";

interface IProps {
  children: any;
}
const Layouts = React.memo((props: IProps) => {
  return (
    <main>
      <StyleLayoutWrapper id="id-layout">
        <SideBar></SideBar>
        {props.children}
      </StyleLayoutWrapper>
    </main>
  );
});
const StyleLayoutWrapper = styled.div`
  display: flex;
`;
export default Layouts;
