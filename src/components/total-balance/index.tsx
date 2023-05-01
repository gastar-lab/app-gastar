import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Box, Pressable, Row, Text } from "native-base";

export function TotalBalance({ totalBalance }: { totalBalance: number }) {
  return (
    <Row
      justifyContent={"space-between"}
      w="100%"
      alignItems={"center"}
      mt={4}
      h={90}
    >
      <Box justifyContent={"flex-start"} alignItems={"flex-start"}>
        <Text fontSize="lg" fontWeight={"300"}>
          Saldo total
        </Text>
        <Text fontSize="2xl" fontWeight={"600"}>
          {totalBalance.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
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
        <MaterialCommunityIcons name="arrow-right" size={24} color="white" />
      </Pressable>
    </Row>
  );
}
