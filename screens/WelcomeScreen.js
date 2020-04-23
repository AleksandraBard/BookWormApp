import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomActionButton from "../components/CustomActionButton";

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 , backgroundColor: '#777'}}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="ios-bookmarks" size={150} color="green" />
          <Text style={{ fontSize: 50, fontWeight: "100", color: 'white' }}>Book Worm</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <CustomActionButton
            style={{
              width: 200,
              backgroundColor: "transparent",
              borderWidth: 0.5,
              borderColor: "pink",
              marginBottom: 10
            }}
            title="Login In"
            onPress={() => this.props.navigation.navigate('LoginScreen')}
          >
            <Text style={{color: 'white', fontWeight: '100'}}>Login In</Text>
          </CustomActionButton>
          <CustomActionButton
            style={{
              width: 200,
              backgroundColor: "transparent",
              borderWidth: 0.5,
              borderColor: "red",
            }}
            title="Sign Up"
            onPress={() => this.props.navigation.navigate('SignUpScreen')}
          >
            <Text style={{color: 'white', fontWeight: '100'}}>Sign Up</Text>
          </CustomActionButton>
        </View>
      </View>
    );
  }
}
