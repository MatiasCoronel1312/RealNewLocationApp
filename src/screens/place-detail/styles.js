import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
     height: '40%',
     minHeight: 280,
     width: '95%',
     margin: 5,
     borderRadius: 5,
  },
  location: {
    margin: 10,
    width: '90%',
    maxWidth: 350,
    backgroundColor: colors.black,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 5,
    elevation: 5,
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: colors.primary,
    textAlign: 'center',
  },
  map: {
    height: 300,
  },
});
