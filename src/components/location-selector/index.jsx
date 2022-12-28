
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { View, Text, Image, Alert, Button } from "react-native";

import { styles } from "./styles";
import  colors  from "../../utils/colors";
import MapPreview from "../map-preview";
import navigation from "../../navigation";
import { useNavigation, useRoute } from "@react-navigation/native";

const LocationSelector = ({onLocationPicker}) => {
    const navigation = useNavigation();
    const route = useRoute();
    const [pickedLocation, setPickedLocation] = useState(null);
    const mapLocation = route?.params?.mapLocation;
    const verifyPermissions = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
            Alert.alert("Permisos insuficientes", "Necesita dar permisos de la localizacion para usar la aplicacion", 
            [{ text: "Ok" },
            ]);
        return false;
        }
        return true;
    }

    const onHandleGetLocation = async () => {
        const isLocationPermission = await verifyPermissions();
        if (!isLocationPermission) return;

        const location = await Location.getCurrentPositionAsync({
            timeout: 4000,
        });

        const { latitude, longitude } = location.coords;

        setPickedLocation({ lat: latitude, lng: longitude });

        onLocationPicker({ lat: latitude, lng: longitude });

        };
        
    const onHandleMapLocation = async () => {
        const isLocationPermission = await verifyPermissions();
        if (!isLocationPermission) return;
        navigation.navigate('Maps');
        
    };

    useEffect(() => {
        if(mapLocation) {
            setPickedLocation(mapLocation);
            onLocationPicker(mapLocation);
        }
    }, [mapLocation]);

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                <MapPreview location={pickedLocation} style={styles.mapPreview}>
                    <Text style={styles.text}>No hay ubicacion seleccionada</Text>
                </MapPreview>
            </View>
            <View style={styles.containerButton}>
                <Button
                    title='Obtener ubicacion'
                    color={colors.primary}
                    onPress={onHandleGetLocation}
                    
                />
                <Button
                    title='Seleccionar desde el mapa'
                    color={colors.primary}
                    onPress={onHandleMapLocation}
                    
                />
            </View>
        </View>
    )
};

export default LocationSelector;