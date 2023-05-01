import { Row, Text, VStack } from "native-base";
import { Expense } from "../../@core/domain/entites";

export type Colors = {
  title: string;
  category: string;
  value: string;
  date: string;
  location: string;
  background: string;
};

export function ExpenseItem({
  expense,
  colors,
}: {
  expense: Expense;
  colors: Colors;
}) {
  return (
    <Row
      key={expense.id}
      bg={colors.background}
      p={4}
      rounded="3xl"
      w={"100%"}
      mt={2}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <VStack alignItems={"flex-start"}>
        <Text fontWeight={"600"} color={colors.title}>
          {expense.description}
        </Text>
        <Text fontSize="xs" fontWeight={"400"} color={colors.category}>
          Comida
        </Text>
      </VStack>
      <VStack alignItems={"flex-end"}>
        <Text fontWeight={"600"} color={colors.value}>
          {expense.value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Text>
        <Text fontSize="xs" fontWeight={"400"} color={colors.date}>
          {expense.date.toLocaleDateString("pt-BR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </Text>
        <Text fontSize="2xs" fontWeight={"400"} color={colors.location}>
          {expense.location}
        </Text>
      </VStack>
    </Row>
  );
}
