import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { registerRootComponent } from "expo";
import { Amplify, Auth } from "aws-amplify";
// @ts-expect-error
import { withAuthenticator } from "aws-amplify-react-native";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const withAuthenticatorConfig = {
  usernameAttributes: "email",
  signUpConfig: { hiddenDefaults: ["phone_number"] },
};
registerRootComponent(withAuthenticator(App, withAuthenticatorConfig));
