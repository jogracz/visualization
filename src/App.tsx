import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ColumnChooser from "./components/ColumnChooser";
import Charts from "./components/charts/Charts";
import COLORS from "./colors";

export enum SiteEnum {
  A = "A",
  B = "B",
}
export enum PartEnum {
  CHARTS = "Wykresy",
  TABLE = "Tabela",
}

export const ALL_COLUMNS = "all";

const StyledApp = styled.div`
  background-color: ${COLORS.white};
  color: #2f2f2f;
  font-size: 15px;
  border-sizing: border-box;
  height: ${window.innerHeight}px;
  font-family: "Lato", sans-serif;
`;
const StyledSidebarAndContentWrapper = styled.div`
  display: flex;
  width: 100%;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
const StyledContentWrapper = styled.div`
  width: 85%;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

function App() {
  const [site, setSite] = useState(SiteEnum.A);
  const [part, setPart] = useState(PartEnum.CHARTS);
  const [columnToShow, setColumnToShow] = useState(ALL_COLUMNS);
  const [columnNames, setColumnNames] = useState<string[]>([]);

  // Change selected part to 'Wykresy' when on the top of the page

  useEffect(() => {
    const handleScroll = (e: any) => {
      if (window.pageYOffset === 0) {
        setPart(PartEnum.CHARTS);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledApp>
      <Header part={part} setPart={setPart} />
      <StyledSidebarAndContentWrapper>
        <Sidebar site={site} setSite={setSite} />
        <StyledContentWrapper>
          <ColumnChooser
            columnToShow={columnToShow}
            setColumnToShow={setColumnToShow}
            columnNames={columnNames}
          />
          <Charts
            site={site}
            part={part}
            columnToShow={columnToShow}
            setColumnNames={setColumnNames}
          />
        </StyledContentWrapper>
      </StyledSidebarAndContentWrapper>
    </StyledApp>
  );
}

export default App;
