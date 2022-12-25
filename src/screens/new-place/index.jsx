import { View, Text, ScrollView, TextInput, Button } from "react-native";

import { styles } from "./styles";
import colors from "../../utils/colors";

const NewPlace = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Titulo</Text>
        <TextInput style={styles.input} placeholder='Escribe la direccion' />
        <Button color={colors.primary} title='Guardar Direccion' onPress={() => {null}}/>
      </View>
    </ScrollView>
  );
};

export default NewPlace;
