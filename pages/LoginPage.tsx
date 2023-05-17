import { useNavigation } from "@react-navigation/native";
import { Box, Button } from "native-base";
import { StackNavigation } from "../navigation";

export const LoginPage = () => {
  const { navigate } = useNavigation<StackNavigation>();
  return (
    <Box>
      This is the login page
      <Button
        width="80%"
        alignSelf={"center"}
        onPress={() => {
          navigate("Setting", {
            userId: "1",
          });
        }}
      >
        Login
      </Button>
    </Box>
  );
};
