import styled from "styled-components";
import { useState } from "react";
import { data } from "@/data/data";
import { Plus } from "@/components/Plus";
import { LeftArrow, RightArrow } from "@/components/Arrows";
import { SingleSlide } from "@/components/slide/SingleSlide";
import { StyledSlide } from "@/components/slide/StyledSlide";

const ITEMS_PER_PAGE = 3;

export const Reviews = () => {
  const { product0 } = data;
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPages = Math.ceil(product0.reviews.length / ITEMS_PER_PAGE);
  const currentPage = Math.floor(currentIndex / 3) + 1;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= product0.reviews.length - ITEMS_PER_PAGE
        ? prevIndex
        : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  return (
    <ReviewsContainer>
      <ReviewsSection>
        <ReviewsTextContainer>
          <StyledReviewsText>Відгуки про товар</StyledReviewsText>
          <StyledAllReviews>({product0.reviews.length})</StyledAllReviews>
        </ReviewsTextContainer>
        <StyledReviewCount>
          <StyledSlideCount>
            {currentPage.toString().padStart(2, "0")}/
            {totalPages.toString().padStart(2, "0")}
          </StyledSlideCount>
          <StyledArrowsContainer>
            <LeftArrow onClick={prevSlide} disabled={currentIndex === 0} />
            <RightArrow
              onClick={nextSlide}
              disabled={
                currentIndex >= product0.reviews.length - ITEMS_PER_PAGE
              }
            />
          </StyledArrowsContainer>
        </StyledReviewCount>
      </ReviewsSection>
      <SliderContainer>
        <Slides>
          <StyledSlide>
            <Plus />
          </StyledSlide>
          <SingleSlide
            product={product0}
            currentIndex={currentIndex}
            itemsPerPage={ITEMS_PER_PAGE}
            key={product0.id}
          />
        </Slides>
      </SliderContainer>
    </ReviewsContainer>
  );
};

const ReviewsContainer = styled.div`
  font-family: Roboto, serif;

  margin-top: 5%;
`;

const SliderContainer = styled.div`
  display: flex;
`;

const Slides = styled.div`
  width: 100%;

  display: flex;

  justify-content: space-between;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #ddd;
  border: none;
  cursor: pointer;
`;

const StyledReviewsText = styled.h3`
  font-size: 26px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0px;
  text-align: left;
`;

const StyledAllReviews = styled.span`
  font-size: 15px;
  font-weight: 300;
  line-height: 40px;
  text-align: left;

  color: #959595;

  align-items: flex-end;
`;

const ReviewsSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

const StyledArrowsContainer = styled.section`
  display: flex;
  justify-content: space-between;

  width: 70px;
  height: 1px;
`;

const StyledReviewCount = styled.div`
  display: flex;
  justify-content: space-between;

  width: 151px;
`;

const StyledSlideCount = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  letter-spacing: 2px;

  width: 51px;
  height: 11px;
`;

const ReviewsTextContainer = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: flex-end;

  height: 40px;
  width: 235px;
`;
