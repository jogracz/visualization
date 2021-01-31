import React, { SetStateAction, Dispatch } from "react";
import styled from "styled-components";
import { SiteEnum } from "../App";

interface SidebarProps {
  site: SiteEnum;
  setSite: Dispatch<SetStateAction<SiteEnum>>;
}

const StyledSidebar = styled.div`
  width: 15%;
  min-width: 130px;
  border-right: solid 1px #dedede;
  height: auto;
  @media only screen and (max-width: 800px) {
    height: auto;
    display: flex;
    width: 100%;
  }
`;
interface SiteNameProps {
  current: boolean;
}
const StyledSiteName = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: 23px;
  border-right: ${(props: SiteNameProps) =>
    props.current && "3px solid #50B4C8"};
  background-color: ${(props: SiteNameProps) => props.current && "#EDEDED"};
  cursor: ${(props: SiteNameProps) => !props.current && "pointer"};
  font-weight: ${(props: SiteNameProps) => props.current && "bold"};
  @media only screen and (max-width: 800px) {
    width: 50%;
  }
`;

const Sidebar = (props: SidebarProps) => {
  const { site, setSite } = props;

  return (
    <StyledSidebar>
      <StyledSiteName
        onClick={() => setSite(SiteEnum.A)}
        current={site === SiteEnum.A}
      >
        Strona A
      </StyledSiteName>
      <StyledSiteName
        onClick={() => setSite(SiteEnum.B)}
        current={site === SiteEnum.B}
      >
        Strona B
      </StyledSiteName>
    </StyledSidebar>
  );
};

export default Sidebar;
