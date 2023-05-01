import { Box, Pressable, Row, Text, useColorModeValue } from "native-base";

export default function HomeScreen() {
  const bg = useColorModeValue("warmGray.100", "coolGray.800");
  return (
    <Box
      flex={1}
      bg={bg}
      alignItems="center"
      justifyContent="flex-start"
      p={5}
      pt={10}
    >
      <Row justifyContent={"space-between"} w="100%">
        <Box
          bg="gray.900"
          _light={{ bg: "white" }}
          p={8}
          rounded="3xl"
          w={"49%"}
        >
          <Text>Gasto mensal</Text>
          <Text fontSize="lg" fontWeight={"600"}>
            + R$ 1200
          </Text>
        </Box>
        <Box
          bg="gray.900"
          _light={{ bg: "white" }}
          p={8}
          rounded="3xl"
          w={"49%"}
        >
          <Text>Suas economias</Text>
          <Text fontSize="lg" fontWeight={"600"}>
            R$ 3200
          </Text>
        </Box>
      </Row>

      <Row
        justifyContent={"space-between"}
        w="100%"
        alignItems={"center"}
        mt={8}
        h={90}
      >
        <Box justifyContent={"flex-start"} alignItems={"flex-start"}>
          <Text fontSize="lg" fontWeight={"300"}>
            Balanço total
          </Text>
          <Text fontSize="4xl" fontWeight={"600"}>
            R$ 2000
          </Text>
        </Box>
        <Pressable
          bg={"gray.900"}
          h={"100%"}
          w={"60px"}
          borderRadius={20}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text color={"white"} fontWeight={"300"}>
            {">"}
          </Text>
        </Pressable>
      </Row>
    </Box>
  );
}
