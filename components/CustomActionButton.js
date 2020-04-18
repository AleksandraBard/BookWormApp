import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types'

function getPosition(position) {
    switch(position) {
        case 'left' :
            return {position: 'absolute', left: 20, bottom: 20}
        default:
            return {position: 'absolute', left: 20, bottom: 20}
    }
}


const CustomActionButton = ({children, onPress, style, position}) => {
    const floatingActonButton = position ? getPosition(position) : []
    return (
  <TouchableOpacity
  style={floatingActonButton}
    onPress={onPress}
    style={[styles.button, style]}
  >
  {children}
  </TouchableOpacity>
    )
};

CustomActionButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
    style: PropTypes.object
}

export default CustomActionButton;

const styles = StyleSheet.create({
  button: {
    width: 50,
      height: 50,
      backgroundColor: "#a5deba",
      alignItems: "center",
      justifyContent: "center",
  },
});
