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
import BookCount from "../components/BookCount";
import CustomActionButton from "../components/CustomActionButton";

import { Ionicons } from "@expo/vector-icons";

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      totalCount: 0,
      readingCount: 0,
      readCount: 0,
      isAddNewBookVisible: false,
      textInputData: "",
      books: [],
    };
  }

  showAddNewBook = () => {
    this.setState({ isAddNewBookVisible: true });
  };

  hideAddNewBook = () => {
    this.setState({ isAddNewBookVisible: false });
  };

  addBook = (book) => {
    this.setState(
      (state, props) => ({
        books: [...state.books, book],
        totalCount: state.totalCount + 1,
        readingCount: state.readingCount + 1,
      }),
      () => {
        console.log(this.state.books);
      }
    );
  };

  markAsRead = (selectedBook, index) => {
    let newList = this.state.books.filter((book) => book !== selectedBook);
    this.setState((prevState) => ({
      books: newList,
      readingCount: prevState.readingCount - 1,
      readCount: prevState.readCount + 1,
    }));
  };
  renderItem = (item, index) => (
    <View style={{ height: 50, flexDirection: "row" }}>
      <View style={{ flex: 1, justifyContent: "center", paddingLeft: 5 }}>
        <Text>{item}</Text>
      </View>
      <CustomActionButton onPress={() => this.markAsRead(item, index)} style={{width: 100, backgroundColor: "#a5deba"}}>
        <Text style={{ fontWeight: "bold", color: "white" }}>Mark as Read</Text>
      </CustomActionButton>
    </View>
  );

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView />
        <View
          style={{
            height: 70,
            borderBottomWidth: 0.5,
            borderBottomColor: "pink",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 24 }}>Book Worm</Text>
        </View>
        <View style={{ flex: 1 }}>
          {this.state.isAddNewBookVisible && (
            <View style={{ height: 50, flexDirection: "row" }}>
              <TextInput
                onChangeText={(text) => this.setState({ textInputData: text })}
                style={{ flex: 1, backgroundColor: "#ececec", paddingLeft: 5 }}
                placeholder="Enter Book Name"
                placeholderTextColor="grey"
              />
              <CustomActionButton style={{backgroundColor: "#a5deba"}} 
                onPress={() => this.addBook(this.state.textInputData)}>
                <Ionicons name="ios-checkmark" color="white" size={40} />
              </CustomActionButton>
              <CustomActionButton style={{backgroundColor: "red"}} 
                onPress={this.hideAddNewBook}>
                <Ionicons name="ios-close" color="white" size={40} />
              </CustomActionButton>
            </View>
          )}
          <FlatList
            data={this.state.books}
            renderItem={({ item }, index) => this.renderItem(item, index)}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={
              <View style={{ marginTop: 50, alignItems: "center" }}>
                <Text style={{ fontWeight: "bold" }}>
                  Not Reading Any Books...
                </Text>
              </View>
            }
          />
          <CustomActionButton position="right" onPress={this.showAddNewBook} style={{backgroundColor: "pink", borderRadius: 25}}>
            <Text style={{ color: "white", fontSize: 30 }}>+</Text>
          </CustomActionButton>
        </View>
        <View
          style={{
            flexDirection: "row",
            height: 70,
            borderTopWidth: 0.5,
            borderTopColor: "pink",
          }}
        >
          <BookCount title="Total" count={this.state.totalCount} />
          <BookCount title="Reading" count={this.state.readingCount} />
          <BookCount title="Read" count={this.state.readCount} />
        </View>
        <SafeAreaView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: { height: 50, width: 50, backgroundColor: "red" },
});
