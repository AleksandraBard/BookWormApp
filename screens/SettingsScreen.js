import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import CustomActionButton from '../components/CustomActionButton'

export default class SettingsScreen extends React.Component {
    render() {
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#777'}}>
                <CustomActionButton
            style={{
              width: 200,
              backgroundColor: "transparent",
              borderWidth: 0.5,
              borderColor: "red",
            }}
            title="Log Out"
            onPress={() => this.props.navigation.navigate('WelcomeScreen')}
          >
            <Text style={{color: 'white', fontWeight: '100'}}>Log Out</Text>
          </CustomActionButton>
            </View>
        )
    }
}