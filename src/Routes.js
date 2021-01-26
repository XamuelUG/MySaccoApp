import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "../files/splash";
import Login from "../files/login";
import BottomTabs from "./TabNavigator";

const Stack = createStackNavigator();

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ header: () => null }}>
          <Stack.Screen name="splash" component={Splash} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="bottomNav" component={BottomTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
