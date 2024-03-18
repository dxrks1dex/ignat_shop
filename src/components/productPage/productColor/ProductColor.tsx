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

export const ProductColor = ({ product0 }: Props) => {
  return (
    <>
      <ProductParamsSection>ОБЕРІТЬ КОЛІР</ProductParamsSection>
      <StyledProductPropertiesContainer>
        {product0.colors.map((color, index) => (
          <StyledColorContainer key={index} $index={index}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="30" rx="15" fill={color} />
            </svg>
          </StyledColorContainer>
        ))}
      </StyledProductPropertiesContainer>
      <div style={{ marginLeft: 2.5 }}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 14L12 8L6 14" stroke="#343434" strokeLinecap="round" />
        </svg>
      </div>
    </>
  );
};

const StyledColorContainer = styled.div<{ $index: number }>`
  svg {
    border: ${({ $index }) => $index === 0 && `1px solid black`};
    border-radius: 50%;
  }
`;
