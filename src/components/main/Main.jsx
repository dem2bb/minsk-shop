import React from "react";
import NavigationRoutes from "../navigation/NavigationRoutes";
import { MainContainer } from "./MainStyles";
import { mainRoutes } from "../../routes/mainRoutes";

const Main = () => {
  return (
    
    <MainContainer>
      <NavigationRoutes routes={mainRoutes}/>
    </MainContainer>
  );
};

export default Main;
