import React, { useRef, useEffect } from "react";
import { PartEnum } from "../../App";
import MaterialTable from "material-table";
import COLORS from "../../colors";
import styled from "styled-components";

interface TableProps {
  part: PartEnum;
  data: any;
  columns: { title: string; field: string }[];
}

const StyledTableWrapper = styled.div`
  width: 650;
  margin-bottom: 20;
  fontsize: 12px;
  height: 500px;
  @media only screen and (max-width: 950px) {
    width: 70%;
  }
  @media only screen and (max-width: 700px) {
    width: 80%;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
  @media only screen and (max-width: 500px) {
    width: 98%;
  }
`;

const Table = (props: TableProps) => {
  const { part, data, columns } = props;
  const tableRef = useRef<any>();

  useEffect(() => {
    if (part === PartEnum.TABLE && tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [part]);

  return (
    <StyledTableWrapper ref={tableRef}>
      <MaterialTable
        columns={columns}
        style={{ width: "100%" }}
        data={data}
        options={{
          rowStyle: {
            fontSize: 12,
          },
          search: false,
          showTitle: false,
          toolbar: false,
          headerStyle: {
            backgroundColor: COLORS.lightestBackgroundGrey,
          },
        }}
      />
    </StyledTableWrapper>
  );
};

export default Table;
