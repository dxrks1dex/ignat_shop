"use client";
import styled from "styled-components";

import { Product } from "@/components/productPage/Product";
import { Reviews } from "@/utilits/Reviews";
import { PossibleToUserPrefer } from "@/components/whatCanBeLike/PossibleToUserPrefer";

export const ProductPage = () => {
  return (
    <div>
      <StyledSrc>
        ГОЛОВНА - ЧОЛОВІКИ - ОДЯГ - ТЕРМОБІЛИЗНА - ATLANTIC - ЧОЛОВІЧИЙ
        ТЕРМОКОСТЮМ ATLANTIC MW0MW32780
      </StyledSrc>
      <ProductContainer>
        <Product />
      </ProductContainer>
      <Reviews />
      <PossibleToUserPrefer />
    </div>
  );
};

const ProductContainer = styled.div`
  font-family: Roboto, serif;

  display: grid;
  grid-template-columns: 38% 62%;
  margin-top: 1%;

  height: 708px;
`;

const StyledSrc = styled.div`
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;

  color: #959595;

  margin-top: 1%;
`;
