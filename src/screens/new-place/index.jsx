import { View, Text, ScrollView, TextInput, Button } from "react-native";

import { styles } from "./styles";
import colors from "../../utils/colors";
import { useDispatch } from "react-redux";
import React ,{ useState } from "react";
import {  savePlace } from "../../store/place.slice";
import { ImageSelector } from "../../components";

const NewPlace = ({ navigation }) => {
  const dispatch = useDispatch();
  const [ title, setTitle] = useState('');
  const [image, setImage] = useState('');
  

  const onHandleSubmit = () => {
    dispatch(savePlace({title, image}));
    navigation.navigate('Places');
  }
const onHandleChange = (text) => {
  setTitle(text);
  
};

const onImagePicker = (uri) => {
  setImage(uri);
  
};

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Titulo</Text>
        <TextInput style={styles.input} placeholder='Escribe la direccion' onChangeText={onHandleChange}/>
        <ImageSelector onImagePicker={onImagePicker}/>
        <Button color={colors.primary} title='Guardar Direccion' onPress={onHandleSubmit}/>
      </View>
    </ScrollView>
  );
};

export default NewPlace;
