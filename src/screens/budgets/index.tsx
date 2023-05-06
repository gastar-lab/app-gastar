import React from "react";
import { Box, Heading, Row, ScrollView, Text, View } from "native-base";
import { LayoutSpacing } from "../../components/layout/spacing";
import { PageHeader } from "../../components/layout/pages-header";
import { GastarAPI } from "../../@core/presentation/api";
import { useExpenses } from "../../store/global-state";
import ThemeToggle from "../../components/theme-toggle";
import { VictoryBar } from "victory-native";
import { Expense } from "../../@core/domain/entites";
import { State } from "@hookstate/core";
import { CategorysService } from "../../@core/infra/services/category.services";

type ChartDataType = {
  category: string | undefined;
  value: number;
};

export default function BudgetsScreen({ navigation }: { navigation: any }) {
  const [dataToChart, setDataToChart] = React.useState<ChartDataType[]>([]);
  const expensesState: State<Expense[]> = useExpenses();
  const categoriesService = new CategorysService();

  React.useEffect(() => {
    (async () => {
      const expensesResult = await GastarAPI.getExpenses();
      let expensesWithCategoryName: ChartDataType[] = [];

      expensesResult.forEach(async (item) => {
        const category = await categoriesService.getCategoryById(
          item.categoryId
        );

        expensesWithCategoryName.push({
          category: category!.name,
          value: item.value,
        });

        const result = expensesWithCategoryName.reduce(
          (acc: ChartDataType[], obj) => {
            const category = obj.category;
            const isRepeat = acc.find((c) => c.category === category);

            if (isRepeat) {
              isRepeat.value += obj.value;
            } else {
              acc.push(obj);
            }

            return acc;
          },
          []
        );

        setDataToChart(result);
      });
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
          {dataToChart.length && (
            <VictoryBar
              data={dataToChart}
              y="value"
              cornerRadius={16}
              height={250}
              style={{
                labels: {
                  fill: "white",
                },
                data: {
                  fill: ({ datum }) => {
                    switch (datum.category) {
                      case "Aluguel":
                        return "#E0C1FF";
                      case "Comida":
                        return "#E4FFC1";
                      case "Entretenimento":
                        return "#FFDBDB";
                      case "Transporte":
                        return "#FB5D5D";
                      case "Internet":
                        return "#fb5";
                      case "Games":
                        return "#25cf6f";
                      default:
                        return "#ccc";
                    }
                  },
                  width: 30,
                },
              }}
              labels={({ datum }) => datum.category}
              width={350}
            />
          )}
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
