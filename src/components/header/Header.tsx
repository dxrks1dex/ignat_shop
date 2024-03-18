"use client";
import React from "react";
import styled from "styled-components";
import { StyledHeartIcon } from "../../../img/StyledHeartIcon";
import { StyledBucketIcon } from "../../../img/StyledBucketIcon";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledInfoBlock>
        <StyledPhoneSection>
          <div>098 900 09 09</div>
          <div>Допомога</div>
        </StyledPhoneSection>
        <StyledInviteSection>
          <div>Увійти</div>
          <div style={{ marginRight: 5, marginLeft: 5 }}>/</div>
          <div>Зараєструватися</div>
        </StyledInviteSection>
      </StyledInfoBlock>
      <StyledLowerHeader>
        <StyledShopName>IGNAT</StyledShopName>
        <StyledHeaderTabs>
          <div>Новинки</div>
          <StyledCurrentTab>Чоловіки</StyledCurrentTab>
          <div>Жінки</div>
          <div>Аксесуари</div>
          <div>Акції</div>
        </StyledHeaderTabs>
        <StyledSearchSection>
          <StyledSearchBar />
          <StyledHeartIcon />
          <StyledBucketIcon />
        </StyledSearchSection>
      </StyledLowerHeader>
    </StyledHeader>
  );
};

const StyledInfoBlock = styled.div`
  height: 40px;

  padding-left: 97px;
  padding-right: 97px;

  display: flex;
  justify-content: space-between;

  align-items: center;

  color: #ffffff;

  background-color: #343434;

  font-size: 13px;
  font-weight: 400;
  line-height: 17px;

  text-align: left;
`;

const StyledHeader = styled.header`
  font-family:
    Ysabeau SC,
    serif;

  width: 100%;
  height: 105px;

  background-color: #ffffff;

  box-shadow: 0px 1px 10px 0px #00000026;

  color: #343434;
`;

const StyledPhoneSection = styled.div`
  display: flex;
  justify-content: space-between;

  width: 140px;
`;

const StyledInviteSection = styled.div`
  display: flex;
  justify-content: space-between;

  width: 130px;
`;

const StyledLowerHeader = styled.div`
  padding-left: 95px;
  padding-right: 97px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledShopName = styled.h1`
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 600;
  line-height: 58px;
  letter-spacing: -2px;
  text-align: center;

  color: #343434;

  //height: 17px;
  width: 70px;
`;

const StyledHeaderTabs = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 428px;
  height: 11px;

  gap: 30px;
`;

const StyledCurrentTab = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;

    left: 0;
    bottom: -175%;

    width: 100%;
    height: 1px;

    background-color: #343434;
  }
`;

const StyledSearchSection = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;

  gap: 20px;
`;

const StyledSearchBar = styled.input`
  width: 282px;
  height: 40px;

  border-radius: 15px;
  border-color: transparent;

  padding-left: 40px;

  background-color: #e8e8e8;

  background-image: url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.25 20.5C4.6 20.5 0 15.9 0 10.25C0 4.6 4.6 0 10.25 0C15.9 0 20.5 4.6 20.5 10.25C20.5 15.9 15.9 20.5 10.25 20.5ZM10.25 1.5C5.42 1.5 1.5 5.43 1.5 10.25C1.5 15.07 5.42 19 10.25 19C15.08 19 19 15.07 19 10.25C19 5.43 15.08 1.5 10.25 1.5Z' fill='%23343434'/%3E%3Cpath d='M20.75 21.5C20.56 21.5 20.37 21.43 20.22 21.28L18.22 19.28C17.93 18.99 17.93 18.51 18.22 18.22C18.51 17.93 18.99 17.93 19.28 18.22L21.28 20.22C21.57 20.51 21.57 20.99 21.28 21.28C21.13 21.43 20.94 21.5 20.75 21.5Z' fill='%23343434'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 10px center;

  &:focus {
    outline: none;
  }
`;
