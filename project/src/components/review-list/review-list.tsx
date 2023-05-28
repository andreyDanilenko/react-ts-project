/* eslint-disable no-console */
import React from 'react';
import { ReviewItem } from 'src/components';
import { Review } from 'src/types/offers';

type Props = {
   reviews: Review[],
}

const ReviewList = ({reviews}: Props) : JSX.Element =>
{
  console.log('props', reviews);

  return (

    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ reviews.length }</span></h2>
      <ul className="reviews__list">
        {
          reviews && reviews.map((review) => <ReviewItem review={review} key={review.id}/>)
        }
      </ul>
    </React.Fragment>
  );
};


export default ReviewList;
