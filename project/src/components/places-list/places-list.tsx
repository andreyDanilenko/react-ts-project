import React from 'react';
import { Offer } from 'src/types/offers';
import {PlaceCard} from 'src/components';

type Props = {
    offers: Offer[]
    title?: string

}

const PlacesList = (props: Props ) => (
  <React.Fragment>
    { props.title && <h2 className="near-places__title">{ props.title }</h2> }
    <div className="near-places__list places__list">
      {
        props.offers.map((offer) => <PlaceCard offer={offer} key={offer.id}/>)
      }
    </div>
  </React.Fragment>

);

export default PlacesList;
