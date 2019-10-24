import { createStackNavigator, createAppContainer } from "react-navigation";
import { Platform } from "react-native";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import Color from "../constans/Color";

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Color.primary : ""
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold"
      },
      headerBackTitleStyle: {
        fontFamily: "open-sans"
      },
      headerTintColor: Platform.OS === "android" ? "white" : Color.primary
    }
  }
);

export default createAppContainer(ProductsNavigator);
