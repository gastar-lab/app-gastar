import { Row, Text, VStack } from "native-base";
import { Expense } from "../../@core/domain/entites";

export function ExpenseItem({ expense }: { expense: Expense }) {
  return (
    <Row
      key={expense.id}
      bg="gray.900"
      _light={{ bg: "white" }}
      p={4}
      rounded="3xl"
      w={"100%"}
      mt={2}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <VStack alignItems={"flex-start"}>
        <Text fontWeight={"600"}>{expense.description}</Text>
        <Text fontSize="xs" fontWeight={"400"} color={"gray.500"}>
          Comida
        </Text>
      </VStack>
      <VStack alignItems={"flex-end"}>
        <Text fontWeight={"600"} color={"red.200"}>
          {expense.value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Text>
        <Text fontSize="xs" fontWeight={"400"} color={"gray.500"}>
          {expense.date.toLocaleDateString("pt-BR")}
        </Text>
        <Text fontSize="2xs" fontWeight={"400"} color={"gray.500"}>
          {expense.location}
        </Text>
      </VStack>
    </Row>
  );
}
