import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import AreaChartComponent from "./AreaChart";
import PieChartComponent from "./PieChart";
import { CSVDataA, CSVDataB } from "../../data/CSVdata";
import Papa from "papaparse";
import { SiteEnum, PartEnum, ALL_COLUMNS } from "../../App";
import Table from "./Table";

interface ChartsProps {
  site: SiteEnum;
  part: PartEnum;
  columnToShow: string;
  setColumnNames: Dispatch<SetStateAction<string[]>>;
}
export interface Data {
  name: string;
  value: number;
}
export interface ChartData {
  chartTitle: string;
  chartData: Data[];
}
interface DataElement {
  [key: string]: string;
}
export interface TableColumn {
  title: string;
  field: string;
}
const StyledCharts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5%;
  @media only screen and (max-width: 1200px) {
    padding: 10px;
  }
`;
const StyledChartAndTitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 50px;
  width: 100%;
`;
const StyledChartTitle = styled.p`
  font-weight: bold;
`;
const StyledTwoChartsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  height: auto;
  @media only screen and (max-width: 950px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

const Charts = (props: ChartsProps) => {
  const { site, part, columnToShow, setColumnNames } = props;
  const [data, setData] = useState<any>([]);
  const [CSVdata, setCSVData] = useState<any>(null);
  const [tableColumns, setTableColumns] = useState<TableColumn[]>([]);
  const [allChartsData, setAllChartsData] = useState<ChartData[]>([]);

  const convertToChartData = (element: DataElement) => {
    let chartData: Data[] = [];
    let columnName = "";
    Object.keys(element).forEach((key: string, index: number) => {
      if (key !== "tableData")
        if (index === 0) {
          columnName = element[key];
        } else {
          chartData.push({
            name: key,
            value:
              typeof element[key] === "string"
                ? Number(element[key].replace(/,/g, "."))
                : 0,
          });
        }
    });
    return { columnName, chartData };
  };

  useEffect(() => {
    setCSVData(site === SiteEnum.A ? CSVDataA : CSVDataB);
  }, [site]);

  useEffect(() => {
    if (CSVdata) {
      setData(
        Papa.parse<any>(CSVdata, {
          header: true,
        }).data
      );
      setTableColumns(
        Papa.parse<any>(CSVdata, {
          header: false,
        }).data[0].map((element: string) => ({
          title: element,
          field: element,
        }))
      );
    }
  }, [CSVdata]);

  useEffect(() => {
    const convertedData = data.map((element: DataElement) => {
      const { columnName, chartData } = convertToChartData(element);
      return { chartTitle: columnName, chartData };
    });
    setAllChartsData(convertedData);
  }, [data]);

  useEffect(() => {
    setColumnNames(allChartsData.map((element) => element.chartTitle));
  }, [allChartsData, setColumnNames]);

  return (
    <StyledCharts>
      {allChartsData.map((chart, index) => {
        if (columnToShow === ALL_COLUMNS || columnToShow === `column${index}`) {
          return (
            <StyledChartAndTitleWrapper key={index}>
              <StyledChartTitle>{chart.chartTitle}</StyledChartTitle>
              <StyledTwoChartsWrapper>
                <AreaChartComponent data={chart.chartData} />
                <PieChartComponent data={chart.chartData} />
              </StyledTwoChartsWrapper>
            </StyledChartAndTitleWrapper>
          );
        } else {
          return undefined;
        }
      })}
      <Table part={part} data={data} columns={tableColumns} />
    </StyledCharts>
  );
};

export default Charts;
