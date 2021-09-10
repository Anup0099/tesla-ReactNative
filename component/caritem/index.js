import React from "react";
import { Text, View, ImageBackground, Image,TouchableOpacity } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCog, faToolbox } from "@fortawesome/free-solid-svg-icons";

function CarItem() {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.backgroundImage}
      />

      <View style={styles.header}>
        <FontAwesomeIcon style={styles.icon} icon={faCog} size={24} />

        <Text style={styles.headerTitle}>AyanMobile</Text>
        <FontAwesomeIcon style={styles.icon} icon={faToolbox} size={24} />
      </View>
      <View style={styles.batterySection}>
        <Image
          style={styles.battery}
          source={require("../../assets/battery.png")}
        ></Image>
        <Text style={styles.batteryText}>150 miles</Text>
      </View>
      <View style={styles.status}>
          <Text style ={styles.statusbar}>Parked</Text>
      </View>
      
    </View>
  );
}

export default CarItem;
