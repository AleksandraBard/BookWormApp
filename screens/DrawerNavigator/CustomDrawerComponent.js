import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
Platform
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {DrawerItems} from 'react-navigation-drawer'

export default class CustomDrawerComponent extends React.Component {
  render() {
    return (
      <ScrollView>
        <SafeAreaView style={{ backgroundColor: "grey" }} />
        <View
          style={{
            height: 150,
            backgroundColor: "grey",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: Platform.OS == 'android' ? 20 : 0
          }}
        >
          <Ionicons name="ios-bookmarks" size={100} color="green" />
          <Text style={{fontSize: 24, color: 'white', fontWeight: '100'}}>Book Worm</Text>
        </View>
        <DrawerItems {...this.props} />
      </ScrollView>
    );
  }
}
