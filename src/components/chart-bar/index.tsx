import React from "react";
import { Expense } from "../../@core/domain/entites";
import { State } from "@hookstate/core";
import { VictoryBar } from "victory-native";
import { useChartBar } from "./hook/useChartBar";

type Props = {
  expenseState: State<Expense[]>;
};

export default function ChartBar({ expenseState }: Props) {
  const { dataToChart } = useChartBar(expenseState);

  if (!dataToChart.length) return null;
  return (
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
  );
}
