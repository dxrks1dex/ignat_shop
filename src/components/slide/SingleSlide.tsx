import { SliderContent } from "@/utilits/SliderContent";
import { StyledSlide } from "@/components/slide/StyledSlide";

interface Props {
  product: {
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
  currentIndex: number;
  itemsPerPage: number;
}

export const SingleSlide = ({ product, currentIndex, itemsPerPage }: Props) => {
  return product.reviews
    .slice(currentIndex, currentIndex + itemsPerPage)
    .map((review, index) => (
      <StyledSlide key={review.id}>
        <SliderContent review={review} />
      </StyledSlide>
    ));
};
