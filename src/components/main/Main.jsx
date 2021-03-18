import React from "react";
import NavigationRoutes from "../navigation/NavigationRoutes";
import { MainContainer } from "./MainStyles";
import { mainRoutes } from "../../routes/mainRoutes";

const Main = ({ cart, addToCart, deleteFromCart, sendOrder }) => {
  return (
    <MainContainer>
      <NavigationRoutes
        cart={cart}
        routes={mainRoutes}
        addToCart={addToCart}
        deleteFromCart={deleteFromCart}
        sendOrder={sendOrder}
      />
    </MainContainer>
  );
};

export default Main;
