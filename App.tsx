import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Box, Text } from "native-base";
import { NavigationStack } from "./navigation";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* <Box alignSelf="center" justifyContent={"center"} safeArea>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </Box> */}
        <NavigationStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
