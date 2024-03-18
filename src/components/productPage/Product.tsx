import styled from "styled-components";
import { data } from "@/data/data";
import { ProductSize } from "@/components/productPage/productSize/ProductSize";
import { ProductColor } from "@/components/productPage/productColor/ProductColor";
import { StyledHeartIcon } from "../../../img/StyledHeartIcon";
import { StyledBucketIcon } from "../../../img/StyledBucketIcon";

export const Product = () => {
  const { product0 } = data;

  return (
    <>
      <StyledImagesContainer>
        <StyledLargeImage src={product0.images[0]} />
        <StyledSmallImage
          src={product0.images[1]}
          alt={`Small Image 1`}
          $gridColumnStart={1}
          $gridColumnEnd={2}
        />
        <StyledSmallImage
          src={product0.images[0]}
          alt={`Small Image 2`}
          $gridColumnStart={2}
          $gridColumnEnd={3}
        />
        <StyledSmallImage
          src={product0.images[1]}
          alt={`Small Image 3`}
          $gridColumnStart={3}
          $gridColumnEnd={4}
          style={{ transform: "scaleX(-1)" }}
        />
      </StyledImagesContainer>
      <StyledProductInfo>
        <StyledProductName>{product0.name.toUpperCase()}</StyledProductName>
        <StyledProductType>{product0.type.toUpperCase()}</StyledProductType>
        <StyledPrice>{product0.price} грн.</StyledPrice>
        <ProductSize product0={product0} />
        <ProductColor product0={product0} />
        <StyledDescriptionTitle>
          {`інформація про товар`.toUpperCase()}
        </StyledDescriptionTitle>
        <StyledDescriptionText
          dangerouslySetInnerHTML={{ __html: product0.description }}
        />
        <StyledRow />
        <StyledProductOptions>
          <StyledButton>ОФОРМИТИ ЗАМОВЛЕННЯ</StyledButton>
          <StyledCreditButton>КУПИТИ У КРЕДИТ</StyledCreditButton>
          <StyledIcons>
            <StyledHeartIcon />
          </StyledIcons>
          <StyledIcons>
            <StyledBucketIcon />
          </StyledIcons>
        </StyledProductOptions>
      </StyledProductInfo>
    </>
  );
};

const StyledImagesContainer = styled.section`
  width: 470px;
  height: 708px;

  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(3, 1fr);
`;

const StyledLargeImage = styled.img`
  width: 100%;
  height: 550px;
  object-fit: cover;
  grid-column: 1 / span 3;
`;

const StyledSmallImage = styled.img<{
  $gridColumnStart: number;
  $gridColumnEnd: number;
}>`
  width: 154px;
  height: 154px;

  object-fit: cover;

  grid-column: ${({ $gridColumnStart, $gridColumnEnd }) =>
    `${$gridColumnStart} / span ${$gridColumnEnd - $gridColumnStart}`};
`;

const StyledProductInfo = styled.div`
  color: #343434;

  p:nth-child(even) {
    color: #959595;

    margin-bottom: 10px;
  }
`;

const StyledProductName = styled.h3`
  font-size: 26px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0px;
  text-align: left;

  color: #343434;
`;

const StyledProductType = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  color: #626262;
`;

const StyledPrice = styled.h3`
  font-size: 26px;
  font-weight: 500;
  line-height: 40px;
  text-align: left;

  color: #4aaa4e;
`;

const StyledDescriptionText = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`;

const StyledDescriptionTitle = styled.h4`
  color: #343434;

  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  text-align: left;

  margin-top: 20px;
  margin-bottom: 15px;
`;

const StyledRow = styled.div`
  width: 100%;

  border: 1px solid #cccccc;

  margin-top: 80px;
`;

const StyledProductOptions = styled.section`
  display: flex;
  justify-content: space-between;

  align-items: center;

  margin-top: 24px;
`;

const StyledButton = styled.button`
  width: 269px;
  height: 55px;

  padding: 22px 46px 22px 46px;

  border: none;

  border-radius: 15px;

  background-color: #000000;

  color: #ffffff;
`;

const StyledCreditButton = styled.button`
  width: 269px;
  height: 55px;

  padding: 22px 46px 22px 46px;

  border-radius: 15px;

  border: 1px solid;

  background-color: #ffff;
`;

const StyledIcons = styled.div`
  svg {
    width: 30px;
    height: 30px;
  }
`;
