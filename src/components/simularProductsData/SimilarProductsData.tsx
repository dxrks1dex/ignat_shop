import styled from "styled-components";

interface Props {
  productsArray: (
    | {
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
      }
    | {}
  )[];
  showMore: boolean;
}

export const SimilarProductsData = ({ productsArray, showMore }: Props) => {
  return (
    <StyledLikedSection>
      {productsArray
        .slice(0, showMore ? productsArray.length : 3)
        .map((product) => (
          <StyledProduct key={product.id}>
            <StyledHeartIconForPrefer>
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
                <path
                  d="M17.5002 25.162C17.2647 25.162 17.0368 25.1316 16.8468 25.0633C13.9448 24.0681 9.3335 20.5355 9.3335 15.3164C9.3335 12.6575 11.4834 10.5 14.1271 10.5C15.411 10.5 16.6113 11.0014 17.5002 11.8978C18.389 11.0014 19.5893 10.5 20.8732 10.5C23.5169 10.5 25.6668 12.6651 25.6668 15.3164C25.6668 20.5431 21.0555 24.0681 18.1535 25.0633C17.9636 25.1316 17.7357 25.162 17.5002 25.162ZM14.1271 11.6395C12.114 11.6395 10.473 13.2881 10.473 15.3164C10.473 20.5051 15.4642 23.3919 17.2191 23.9921C17.3558 24.0377 17.6521 24.0377 17.7888 23.9921C19.5361 23.3919 24.5349 20.5127 24.5349 15.3164C24.5349 13.2881 22.894 11.6395 20.8808 11.6395C19.7261 11.6395 18.6549 12.1789 17.9636 13.1133C17.7509 13.402 17.2647 13.402 17.0519 13.1133C16.3454 12.1713 15.2819 11.6395 14.1271 11.6395Z"
                  fill="#343434"
                />
              </svg>
            </StyledHeartIconForPrefer>
            <StyledProductImage src={product.images[0]} />
            <StyledProductName>{product.name}</StyledProductName>
            <StyledDescription>Для чоловіків</StyledDescription>
            <StyledDescription>{product.size.length} кольори</StyledDescription>
            <StyledPrice>{product.price} грн.</StyledPrice>
          </StyledProduct>
        ))}
    </StyledLikedSection>
  );
};

const StyledProduct = styled.div`
  width: 370px;
  height: 546px;

  display: flex;

  flex-direction: column;
  justify-content: space-between;

  padding: 0 0 0 0;
`;

const StyledProductImage = styled.img`
  width: 370px;
  height: 433px;

  object-fit: cover;

  border-radius: 3px;
`;

const StyledProductName = styled.h4`
  font-size: 24px;
  font-weight: 600;
  line-height: 26px;
  text-align: left;

  color: #343434;
`;

const StyledPrice = styled.span`
  color: #4aaa4e;
  font-size: 20px;
  font-weight: 700;
  line-height: 40px;
  text-align: left;

  width: 370px;
`;

const StyledDescription = styled.span`
  color: #626262;

  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  width: 370px;
  height: 11px;
`;

const StyledHeartIconForPrefer = styled.div`
  position: absolute;

  margin-top: 10px;
  margin-left: 320px;
`;

const StyledLikedSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  grid-column-gap: 108px;
  grid-row-gap: 10px;

  margin-top: 10px;

  margin-bottom: 5%;
`;
