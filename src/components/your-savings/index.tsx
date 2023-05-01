import { Box, Text } from "native-base";

export function YourSavings({ yourSavings }: { yourSavings: number }) {
  return (
    <Box bg="gray.900" _light={{ bg: "white" }} p={6} rounded="3xl" w={"49%"}>
      <Text>Suas economias</Text>
      <Text fontSize="md" fontWeight={"600"}>
        {yourSavings.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </Text>
    </Box>
  );
}
