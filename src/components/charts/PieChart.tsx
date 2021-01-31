import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Data } from "./Charts";
import COLORS from "../../colors";
import { StyledChartWrapper } from "./AreaChart";

interface PieChartProps {
  data: Data[];
}

const PieChartComponent = (props: PieChartProps) => {
  const { data } = props;
  const pieChartColors = [
    COLORS.blue,
    COLORS.red,
    COLORS.teal,
    COLORS.green,
    COLORS.darkPurple,
  ];

  return (
    <StyledChartWrapper>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart style={{ border: `solid 1px ${COLORS.borderGrey}` }}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={90}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={pieChartColors[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            align="right"
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
          />
        </PieChart>
      </ResponsiveContainer>
    </StyledChartWrapper>
  );
};

export default PieChartComponent;
