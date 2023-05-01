import { FlatList, Row, Text, VStack, useColorModeValue } from "native-base";
import { Expense } from "../../@core/domain/entites";
import { State } from "@hookstate/core";
import { Colors, ExpenseItem } from "./expense-item";

export function ExpensesList({ expenses }: { expenses: State<Expense[]> }) {
  const colors: Colors = {
    title: useColorModeValue("gray.900", "gray.100"),
    category: useColorModeValue("gray.500", "gray.400"),
    value: useColorModeValue("red.400", "red.300"),
    date: useColorModeValue("gray.800", "gray.400"),
    location: useColorModeValue("blue.500", "blue.400"),
    background: useColorModeValue("white", "gray.900"),
  };

  return (
    <VStack w={"100%"} flex={1}>
      <Text fontSize="lg" fontWeight={"300"} mt={2}>
        Despesas recentes
      </Text>
      <FlatList
        maxHeight={"100%"}
        data={expenses.value}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ExpenseItem expense={item} colors={colors} />
        )}
      />
    </VStack>
  );
}
