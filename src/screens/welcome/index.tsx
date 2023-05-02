import { Box, Row, Text, VStack, View } from "native-base";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export function WelcomeScreen() {
  return (
    <VStack flex={1} bg={"#1F2937"}>
      <StatusBar style="light" />
      <Row flex={2}>
        <View flex={1} pt={20} pl={4} w="100%">
          <Text color={"white"} fontSize={26} fontWeight="600">
            Gastar.
          </Text>
        </View>
      </Row>

      <VStack flex={1} alignItems={"flex-start"} paddingLeft={6}>
        <Text color={"white"} fontSize={26} fontWeight="300" textAlign="center">
          Controle suas finanças
        </Text>
        <Text color={"white"} fontSize={26} fontWeight="300" textAlign="center">
          Economize dinheiro
        </Text>
        <Row mt={5} space={2} flexWrap={"wrap"}>
          <Box p={4} bg={"white"} borderRadius={22}>
            <Text
              color={"#1F2937"}
              fontSize={16}
              fontWeight="800"
              textAlign="center"
            >
              Entrar
            </Text>
          </Box>
          <Box p={4} bg={"green.800"} borderRadius={22}>
            <Text
              color={"#fff"}
              fontSize={16}
              fontWeight="800"
              textAlign="center"
            >
              Cadastrar
            </Text>
          </Box>
          <Box
            p={4}
            bg={"gray.700"}
            borderRadius={22}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <MaterialCommunityIcons name="apple" size={24} color="#fff" />
          </Box>
          <Box
            p={4}
            bg={"gray.700"}
            borderRadius={22}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <MaterialCommunityIcons name="google" size={24} color="#fff" />
          </Box>
        </Row>
      </VStack>
    </VStack>
  );
}
