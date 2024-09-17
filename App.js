import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";

// shimmer effect placeholder
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const App = () => {
  // State management
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetching the data from the API
  useEffect(() => {
    getData();
  }, []);

  // Function for fetching the data from the API
  const getData = async () => {
    setProducts([]);
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products {"Skeleton Loading"}</Text>
      {loading ? (
        <FlatList
          data={[1, 1, 1, 1, 1, 1, 1]}
          renderItem={() => {
            return (
              // Normal Shimmer
              // <View
              //   style={{
              //     width: "90%",
              //     flexDirection: "row",
              //     height: 100,
              //     alignSelf: "center",
              //     marginTop: 20,
              //   }}
              // >
              //   {/* Images type Box */}
              //   <View
              //     style={{
              //       width: 90,
              //       height: 90,
              //       borderRadius: 10,
              //       backgroundColor: "#9e9e9e",
              //       opacity: 0.4,
              //     }}
              //   ></View>
              //   <View style={{ width: "60%", marginLeft: 25 }}>
              //     {/* Text type Box */}
              //     <View
              //       style={{
              //         height: 25,
              //         borderRadius: 5,
              //         backgroundColor: "#9e9e9e",
              //         opacity: 0.4,
              //       }}
              //     ></View>

              //     {/* Price Box */}
              //     <View
              //       style={{
              //         height: 20,
              //         borderRadius: 5,
              //         backgroundColor: "#9e9e9e",
              //         opacity: 0.4,
              //         marginTop: 8,
              //         width: 80,
              //       }}
              //     ></View>

              //     {/* Button Box Style */}
              //     <View
              //       style={{
              //         height: 25,
              //         backgroundColor: "#9e9e9e",
              //         opacity: 0.4,
              //         marginTop: 8,
              //         borderRadius: 5,
              //       }}
              //     ></View>
              //   </View>
              // </View>
              // Package Shimmer
              <View
                style={{
                  width: "90%",
                  flexDirection: "row",
                  height: 100,
                  alignSelf: "center",
                  marginTop: 20,
                  marginLeft: 40
                }}
              >
                {/* Images type Box */}
                <ShimmerPlaceholder
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 10,
                    backgroundColor: "#9e9e9e",
                    opacity: 0.4,
                  }}
                ></ShimmerPlaceholder>
                <View style={{ width: "60%", marginLeft: 25 }}>
                  {/* Text type Box */}
                  <ShimmerPlaceholder
                    style={{
                      height: 25,
                      borderRadius: 5,
                      backgroundColor: "#9e9e9e",
                      opacity: 0.4,
                    }}
                  ></ShimmerPlaceholder>

                  {/* Price Box */}
                  <ShimmerPlaceholder
                    style={{
                      height: 20,
                      borderRadius: 5,
                      backgroundColor: "#9e9e9e",
                      opacity: 0.4,
                      marginTop: 8,
                      width: 80,
                    }}
                  ></ShimmerPlaceholder>

                  {/* Button Box Style */}
                  <ShimmerPlaceholder
                    style={{
                      height: 25,
                      backgroundColor: "#9e9e9e",
                      opacity: 0.4,
                      marginTop: 8,
                      borderRadius: 5,
                    }}
                  ></ShimmerPlaceholder>
                </View>
              </View>
            );
          }}
        />
      ) : (
        <ScrollView style={{}}>
          {products.map((item) => (
            <View key={item.id} style={styles.productContainer}>
              <Image style={styles.productImage} source={{ uri: item.image }} />
              <View style={{ marginLeft: 30 }}>
                <Text style={styles.productName}>{item.title}</Text>
                <Text style={styles.productPrice}>${item.price}</Text>
                <Button title="Add to cart" color={"#333"} />
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  title: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
  productContainer: {
    marginBottom: 20,
    padding: 10,
    justifyContent: "center",
    flexDirection: "row",
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productPrice: {
    marginBottom: 10,
    fontSize: 14,
    fontWeight: "500",
  },
  productName: {
    marginBottom: 10,
    fontSize: 16,
    textAlign: "left",
    width: 200,
    fontWeight: "600",
  },
});
