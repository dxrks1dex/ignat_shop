import styled from "styled-components";
import StarRating from "@/components/rating/StarRating";

interface Props {
  review: {
    id: number;
    user: string;
    avatar: string;
    comment: string;
    rating: number;
  };
}

export const SliderContent = ({ review }: Props) => {
  return (
    <ReviewContainer>
      <FirstRow>
        <Avatar src={review.avatar} alt="User Avatar" />
        <UserInfoColumn>
          <RatingContainer>
            <StarRating initialRating={review.rating} />
          </RatingContainer>
          <UserName>{review.user}</UserName>
        </UserInfoColumn>
      </FirstRow>

      <CommentContainer>
        <Comment>{review.comment}</Comment>
      </CommentContainer>
    </ReviewContainer>
  );
};

const ReviewContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 20px;
`;

const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;

  width: 196px;
  height: 50px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 50px;

  object-fit: cover;
`;

const UserInfoColumn = styled.div``;

const UserName = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: left;
`;

const RatingContainer = styled.div`
  svg {
    width: 12px;
    height: 12px;

    margin-left: 2px;
  }
`;

const CommentContainer = styled.div`
  color: #959595;
`;

const Comment = styled.span`
  font-size: 18px;
  font-weight: 400;

  line-height: 24px;

  text-align: left;
`;
