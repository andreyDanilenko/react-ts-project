import React from 'react';
import { ReviewItem } from 'src/components';
import { Review } from 'src/types/offers';

type Props = {
   reviews: Review[],
}

const ReviewList = (props: Props) : JSX.Element => (
  <React.Fragment>
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ props.reviews.length }</span></h2>
    <ul className="reviews__list">
      {
        props.reviews.map((review) => <ReviewItem review={review} key={review.id}/>)
      }
    </ul>
  </React.Fragment>
);

export default ReviewList;
