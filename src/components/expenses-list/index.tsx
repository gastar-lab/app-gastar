import { FlatList, Row, Text, VStack } from "native-base";
import { Expense } from "../../@core/domain/entites";
import { State } from "@hookstate/core";
import { ExpenseItem } from "./expense-item";

export function ExpensesList({ expenses }: { expenses: State<Expense[]> }) {
  return (
    <VStack w={"100%"} flex={1}>
      <Text fontSize="lg" fontWeight={"300"} mt={2}>
        Despesas recentes
      </Text>
      <FlatList
        maxHeight={"100%"}
        data={expenses.value}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ExpenseItem expense={item} />}
      />
    </VStack>
  );
}
