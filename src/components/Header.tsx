import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { PartEnum } from "../App";
import COLORS from "../colors";

interface HeaderProps {
  part: PartEnum;
  setPart: Dispatch<SetStateAction<PartEnum>>;
}

const StyledHeader = styled.div`
  background-color: ${COLORS.white};
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #767676;
  height: 50px;
  border-bottom: solid 1px ${COLORS.borderGrey};
  @media only screen and (max-width: 700px) {
    flex-wrap: wrap;
    height: 70px;
  }
`;
const StyledHeaderElement = styled.div`
  width: 30%;
  height: 50px;
  line-height: 50px;
  @media only screen and (max-width: 700px) {
    height: 30px;
    line-height: 30px;
  }
`;
const StyledTitle = styled(StyledHeaderElement)`
  width: 30%;
  padding-left: 5%;
  font-size: 18px;
  order: 1;
  @media only screen and (max-width: 800px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 700px) {
    width: 50%;
    font-size: 10px;
  }
`;
const StyledParNameWrapper = styled(StyledHeaderElement)`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  order: 2;
  @media only screen and (max-width: 700px) {
    width: 100%;
    order: 3;
    margin-top: 10px;
    border-bottom: solid 1px #dedede;
  }
`;
const StyledLogout = styled(StyledHeaderElement)`
  width: 30%;
  text-align: right;
  padding-right: 20px;
  font-size: 16px;
  order: 3;
  cursor: pointer;
  @media only screen and (max-width: 700px) {
    width: 20%;
    font-size: 13px;
    order: 2;
  }
`;
interface PartNameProps {
  current: boolean;
}
const StyledPartName = styled.div`
  border-bottom: ${(props: PartNameProps) =>
    props.current && "2px solid #50B4C8"};
  cursor: ${(props: PartNameProps) => !props.current && "pointer"};
  color: ${(props: PartNameProps) => props.current && "#2f2f2f"};
  margin-right: 30px;
  padding-right: 10px;
  margin-left: 30px;
  padding-left: 10px;
  height: 100%;
`;

const Header = (props: HeaderProps) => {
  const { part, setPart } = props;

  return (
    <StyledHeader>
      <StyledTitle>Zadanie rekrutacyjne React</StyledTitle>
      <StyledParNameWrapper>
        <StyledPartName
          onClick={() => setPart(PartEnum.CHARTS)}
          current={part === PartEnum.CHARTS}
        >
          Wykresy
        </StyledPartName>
        <StyledPartName
          onClick={() => setPart(PartEnum.TABLE)}
          current={part === PartEnum.TABLE}
        >
          Tabela
        </StyledPartName>
      </StyledParNameWrapper>
      <StyledLogout>Wyloguj</StyledLogout>
    </StyledHeader>
  );
};

export default Header;
