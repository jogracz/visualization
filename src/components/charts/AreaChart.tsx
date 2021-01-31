import React from "react";
import {
  AreaChart,
  Area,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { Data } from "./Charts";
import COLORS from "../../colors";
import styled from "styled-components";

interface AreaChartProps {
  data: Data[];
}

export const StyledChartWrapper = styled.div`
  margin: 10px;
  width: 45%;
  max-width: 650px;
  height: 270px;
  @media only screen and (max-width: 950px) {
    width: 70%;
  }
  @media only screen and (max-width: 550px) {
    width: 80%;
  }
  @media only screen and (max-width: 400px) {
    width: 90%;
    height: 240px;
    font-size: 12px;
  }
  @media only screen and (max-width: 300px) {
    width: 98%;
    height: 220px;
  }
`;

const AreaChartComponent = (props: AreaChartProps) => {
  const { data } = props;
  return (
    <StyledChartWrapper>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 30,
            right: 30,
            bottom: 30,
            left: 30,
          }}
          style={{
            border: `solid 1px ${COLORS.borderGrey}`,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={COLORS.blue} stopOpacity={0.8} />
              <stop offset="95%" stopColor={COLORS.blue} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#54D8FF"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </StyledChartWrapper>
  );
};

export default AreaChartComponent;
