import { useState } from "react";
import styled from "styled-components";
import { data } from "@/data/data";
import { SimilarProductsData } from "@/components/simularProductsData/SimilarProductsData";

export const PossibleToUserPrefer = () => {
  const productsArray = Object.values(data).slice(1);
  const [showMore, setShowMore] = useState(false);
  return (
    <StyledSimilarProductsContainer>
      <StyledSimilarProductsTitle>
        Ще може сподобатись
      </StyledSimilarProductsTitle>
      <div>
        <SimilarProductsData
          productsArray={productsArray}
          showMore={showMore}
        />
      </div>
      <div>
        <StyledDetailsContainer onClick={() => setShowMore(!showMore)}>
          <StyleShowMoreText>
            {showMore ? "ЗГОРНУТИ" : "ДИВИТИСЬ БІЛЬШЕ"}
          </StyleShowMoreText>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13L12 18L17 13"
              stroke="#343434"
              strokeLinecap="round"
            />
            <path d="M7 7L12 12L17 7" stroke="#343434" strokeLinecap="round" />
          </svg>
        </StyledDetailsContainer>
      </div>
    </StyledSimilarProductsContainer>
  );
};

const StyledSimilarProductsTitle = styled.h3`
  color: #343434;

  font-size: 26px;
  font-weight: 600;
  line-height: 40px;
  text-align: left;
`;

const StyledSimilarProductsContainer = styled.div`
  margin-top: 40px;
`;

const StyledDetailsContainer = styled.div`
  width: 150px;
  height: 40px;

  margin-left: 45%;
  margin-bottom: 10%;

  align-items: center;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;

  transition: margin-top 0.5s ease;

  &:hover {
    margin-top: -10px;
  }
`;

const StyleShowMoreText = styled.span`
  font-size: 15px;
  font-weight: 400;
  text-align: left;

  color: #626262;
`;
