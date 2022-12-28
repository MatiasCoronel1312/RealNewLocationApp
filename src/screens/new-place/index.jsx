import { View, Text, ScrollView, TextInput, Button } from "react-native";

import { styles } from "./styles";
import colors from "../../utils/colors";
import { useDispatch } from "react-redux";
import React ,{ useState } from "react";
import {  savePlace } from "../../store/place.slice";
import { ImageSelector, LocationSelector } from "../../components";

const NewPlace = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [ title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [ coords, setCoords ] = useState(null);
  

  const onHandleSubmit = () => {
    dispatch(savePlace({title, image, coords}));
    navigation.navigate('Places');
    
  }
const onHandleChange = (text) => {
  setTitle(text);
  
};

const onImagePicker = (uri) => {
  setImage(uri);  
};
const onLocationPicker = (location) => {
  
  setCoords(location);
}

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Titulo</Text>
        <TextInput style={styles.input} placeholder='Escribe la direccion' onChangeText={onHandleChange}/>
        <ImageSelector onImagePicker={onImagePicker}/>
        <LocationSelector onLocationPicker={onLocationPicker}/>
        <Button color={colors.primary} title='Guardar Direccion' onPress={onHandleSubmit}/>
      </View>
    </ScrollView>
  );
};

export default NewPlace;
