import React from "react";
import { Expense } from "../../@core/domain/entites";
import { State } from "@hookstate/core";
import { VictoryBar, VictoryLabel } from "victory-native";
import { useChartBar } from "./hook/useChartBar";

/** const BARS_LIMIT = 5; */

type Props = {
  expenseState: State<Expense[]>;
};

function limitLabelLength(label: string) {
  if (label.length > 10) {
    return label.slice(0, 10) + "...";
  }
  return label;
}

export default function ChartBar({ expenseState }: Props) {
  const { dataToChart } = useChartBar(expenseState);

  if (!dataToChart.length) return null;

  return (
    <VictoryBar
      data={dataToChart}
      y="value"
      cornerRadius={{
        top: 14,
        bottom: 14,
      }}
      barRatio={0.8}
      height={225}
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
      labels={({ datum }) => limitLabelLength(datum.category)}
      labelComponent={
        <VictoryLabel style={[{ fill: "white", fontSize: 12 }]} />
      }
      width={350}
    />
  );
}
