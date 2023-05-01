import { Box, Text } from "native-base";

export function MonthlyExpense({ monthlyExpense }: { monthlyExpense: number }) {
  return (
    <Box bg="gray.900" _light={{ bg: "white" }} p={6} rounded="3xl" w={"49%"}>
      <Text>Gasto mensal</Text>
      <Text fontSize="md" fontWeight={"600"}>
        {monthlyExpense.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </Text>
    </Box>
  );
}
