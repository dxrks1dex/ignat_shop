import styled from "styled-components";
import {
  ProductParamsSection,
  StyledProductPropertiesContainer,
} from "@/style/productParamsStyles";

interface Props {
  product0: {
    id: number;
    name: string;
    price: number;
    size: string[];
    type: string;
    colors: string[];
    description: string;
    images: string[];
    reviews: {
      id: number;
      user: string;
      avatar: string;
      comment: string;
      rating: number;
    }[];
  };
}

export const ProductSize = ({ product0 }: Props) => {
  return (
    <>
      <ProductParamsSection>ОБЕРІТЬ РОЗМІР</ProductParamsSection>
      <StyledProductPropertiesContainer>
        {product0.size.map((item, index) => (
          <StyledSvgContainer $index={index} key={index}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="30" rx="5" fill="#D9D9D9" />
            </svg>
          </StyledSvgContainer>
        ))}
      </StyledProductPropertiesContainer>
    </>
  );
};

const StyledSvgContainer = styled.div<{ $index: number }>`
  svg {
    border: ${({ $index }) => $index === 5 && `1px solid black`};
    border-radius: 5px;
  }
`;
