import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import COLORS from "../colors";

interface ColumnChooserProps {
  columnToShow: string;
  setColumnToShow: Dispatch<SetStateAction<string>>;
  columnNames: string[];
}

const StyledColumnChooser = styled.div`
  width: 100%;
  height: 100px;
  background-color: #f5f5f5;
  border-bottom: solid 1px ${COLORS.borderGrey};
  display: flex;
  align-items: center;
`;
const StyledSelectWrapper = styled.label`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: flex-end;
  padding-right: 5%;
  width: 50%;
  height: 38px;
  @media only screen and (max-width: 800px) {
    margin-left: 0;
    width: 50%;
    line-height: auto;
    height: 80px;
    align-items: center;
    justify-content: space-between;
  }
`;
const StyledSelect = styled.select`
  width: 200px;
  background-color: ${COLORS.white};
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  color: #2f2f2f;
  border: solid 1px ${COLORS.borderGrey};
  cursor: pointer;
  @media only screen and (max-width: 500px) {
    width: 150px;
  }
  @media only screen and (max-width: 320px) {
    width: 120px;
  }
`;
const StyledResetButtonWrapper = styled.label`
  margin-right: 3%;
  margin-top: 10px;
  font-size: 14px;
  color: #989797;
  text-transform: uppercase;
  font-weight: bold;
  height: 38px;
  display: flex;
  width: 50%;
  justify-content: flex-end;
  align-items: center;
  @media only screen and (max-width: 800px) {
    margin: 0;
    flex-direction: column;
    width: 50%;
    line-height: auto;
    height: 80px;
    align-items: center;
    justify-content: space-between;
  }
`;
const StyledResetButton = styled.button`
  width: 200px;
  padding: 10px;
  border-radius: 4px;
  border: solid 1px ${COLORS.borderGrey};
  background-color: ${COLORS.teal};
  margin-left: 3%;
  color: ${COLORS.white};
  cursor: pointer;
  @media only screen and (max-width: 500px) {
    width: 150px;
  }
  @media only screen and (max-width: 320px) {
    width: 120px;
  }
`;
const DEFAULT_COLUMN_TO_SHOW = "all";

const ColumnChooser = (props: ColumnChooserProps) => {
  const { columnToShow, setColumnToShow, columnNames } = props;

  const resetFilters = () => {
    setColumnToShow(DEFAULT_COLUMN_TO_SHOW);
  };

  return (
    <StyledColumnChooser>
      <StyledSelectWrapper>
        <span
          style={{
            fontSize: "13px",
            fontWeight: "bold",
            textAlign: "center",
            paddingBottom: "4px",
            paddingRight: "5px",
          }}
        >
          Wybierz kolumny do wizualizacji
        </span>
        <StyledSelect
          value={columnToShow}
          onChange={(e) => setColumnToShow(e.target.value)}
        >
          <option value="all">Wszystkie</option>
          {columnNames.map((name, index) => (
            <option value={`column${index}`} key={index}>
              {name}
            </option>
          ))}
        </StyledSelect>
      </StyledSelectWrapper>
      <StyledResetButtonWrapper>
        <span>RESETUJ FILTRY</span>
        <StyledResetButton onClick={() => resetFilters()}>
          POKAŻ
        </StyledResetButton>
      </StyledResetButtonWrapper>
    </StyledColumnChooser>
  );
};

export default ColumnChooser;
