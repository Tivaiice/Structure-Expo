import React from "react";
import App from "../App";
import { YellowBox } from "react-native";

class BootSetup extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    YellowBox.ignoreWarnings([]);
  }
  render() {
    return <App />;
  }
}

export default BootSetup;