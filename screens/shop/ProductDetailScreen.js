import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
  StyleSheet
} from "react-native";

import { useSelector } from "react-redux";
import Color from "../../constans/Color";

const ProductDetailScreen = props => {
  const productId = props.navigation.getParam("productId");
  const selectedProduct = useSelector(state =>
    state.products.availableProducts.find(prod => prod.id === productId)
  );

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.actions}>
        <Button color={Color.primary} title="Add to cart" onPress={() => {}} />
      </View>

      <Text style={styles.price}>Rp. {selectedProduct.price}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

ProductDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam("productTitle")
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "open-sans-bold"
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
    fontFamily: "open-sans"
  },
  actions: {
    marginVertical: 10,
    alignItems: "center"
  }
});

export default ProductDetailScreen;
