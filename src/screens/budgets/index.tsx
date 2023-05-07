import React from "react";
import { Box, Heading, Row, ScrollView, Text, View } from "native-base";
import { LayoutSpacing } from "../../components/layout/spacing";
import { PageHeader } from "../../components/layout/pages-header";
import { GastarAPI } from "../../@core/presentation/api";
import { useExpenses } from "../../store/global-state";
import ThemeToggle from "../../components/theme-toggle";
import { Expense } from "../../@core/domain/entites";
import { State } from "@hookstate/core";
import ChartBar from "../../components/chart-bar";

export default function BudgetsScreen({ navigation }: { navigation: any }) {
  const expensesState: State<Expense[]> = useExpenses();

  React.useEffect(() => {
    (async () => {
      const expensesResult = await GastarAPI.getExpenses();
      expensesState.set(expensesResult);
    })();
  }, []);

  return (
    <LayoutSpacing>
      <PageHeader title="Orçamentos" goBack={() => navigation.goBack()} />
      <ScrollView w={"100%"} h={"100%"} showsVerticalScrollIndicator={false}>
        <Box
          w={"100%"}
          bg="gray.700"
          h={265}
          alignItems="center"
          justifyContent="flex-start"
          borderRadius={33}
          pt={5}
        >
          <Text color="white" fontWeight={"300"} fontSize="sm">
            Total de gastos planejados
          </Text>
          <Text color="white" fontWeight={"500"} fontSize="md">
            R$ 1.800,00
          </Text>
          <ChartBar expenseState={expensesState} />
        </Box>

        <Box
          w={"100%"}
          bg="white"
          _dark={{ bg: "gray.300" }}
          h={200}
          alignItems="center"
          justifyContent="flex-start"
          borderRadius={33}
          pt={5}
          mt={5}
        >
          <Text color="black" fontWeight={"300"} fontSize="sm">
            Receita mensal recorrente
          </Text>
          <Text color="black" fontWeight={"500"} fontSize="md">
            R$ 5.800,00
          </Text>
        </Box>
        <Heading
          mt={5}
          size="md"
          color="black"
          _dark={{ color: "white" }}
          fontWeight={"400"}
          alignSelf={"flex-start"}
        >
          Detalhes
        </Heading>

        <Box
          w={"100%"}
          bg="white"
          h={200}
          alignItems="flex-start"
          justifyContent="flex-start"
          borderRadius={33}
          mt={5}
        >
          <Row w="100%" bg="red.200" borderRadius={33} p={5} space={3}>
            <Box
              w="50px"
              h="50px"
              bg="white"
              borderRadius={33}
              alignItems="center"
              justifyContent={"center"}
            ></Box>
            <View>
              <Text color="black" fontWeight={"500"} fontSize="md">
                Lanches e enterterimento
              </Text>
              <Text color="red.700" fontWeight={"500"} fontSize="sm">
                R$ 400,00 por mês
              </Text>
            </View>
          </Row>

          <Box w={"100%"} p={5} flexDirection="row">
            <Box w="100%" bg="gray.200" borderRadius={33}>
              <Box
                w="70%"
                bg="red.400"
                alignItems="center"
                justifyContent={"center"}
                borderRadius={33}
                p={5}
              >
                <Text color="white" fontWeight={"500"} fontSize="md">
                  R$ 290,00
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </LayoutSpacing>
  );
}
