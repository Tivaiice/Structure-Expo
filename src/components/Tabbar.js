import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: "#FF5733",
      contact: "#FF5733",
    };
  }
  componentDidMount() {
    if (this.props.col == "Home") {
      this.home1();
      this.fonthome();
    }
    if (this.props.col == "Contact") {
      this.contact1();
      this.fontcontact();
    }
  }
  
  home1() {
    this.setState({ home1: "#FFFFFF" });
    this.setState({ contact1: "#FF5733" });
  }
  contact1(){
    this.setState({ home1: "#FF5733" });
    this.setState({ contact1: "#FFFFFF" });
  }
  fonthome(){
    this.setState({ fonthome: "#FF5733" });
    this.setState({ fontcontact : "#FFFFFF" });
  }
  fontcontact() {
    this.setState({ fonthome: "#FFFFFF" });
    this.setState({ fontcontact: "#FF5733" });
  }
  

  render() {
    return (
      <View style={{flex: 1,flexDirection: "row",backgroundColor: this.state.home }}>
        {/** btn 1 */}
        <TouchableOpacity  
          activeOpacity={0.5}
          onPress={() => {
            this.props.navigation.navigate("Home");
          }}
          style={{ flex: 1, backgroundColor: this.state.home1 }}
        >
          <View style={styles.boxTabbar}>
            <Image
              style={{ width: 25, height: 25 }} 
              source={require("../images/news.png")}
              resizeMode="contain"
            />
            <Text style={{ color: this.state.fonthome, fontSize: 15, fontFamily : 'CloudBold'}}>
              Home
            </Text>
          </View>
        </TouchableOpacity>
        {/** btn 2 */}
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            this.props.navigation.navigate("Contact");
          }}
          style={{ flex: 1, backgroundColor: this.state.contact1 }}
        >
          <View style={styles.boxTabbar}>
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../images/tablet.png")}
              resizeMode="contain"
            />
            <Text style={{ color: this.state.fontcontact, fontSize: 15, fontFamily : 'CloudBold'}}>
              Contact
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxTabbar : { 
    flex: 1, 
    alignItems: "center", 
    justifyContent : 'center'
  },
})

export default Tabbar;
