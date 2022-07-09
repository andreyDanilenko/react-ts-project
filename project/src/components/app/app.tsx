import MainPage from '../../pages/main-page/main-page';
import Header from '../header/header';

// const places = [
//   {
//     id: 'id',
//     images: 'img/apartment-01.jpg',
//     name: 'Beautiful & luxurious apartment at great location',
//     rate: 5,
//     price: 120,
//     type: 'Apartment',
//     status: 'Premium',
//     favorite: false,
//   },
// ];


type AddProps = {
  rentalCount: number
}

function App({rentalCount}: AddProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <MainPage rentalCount={rentalCount} />
    </div>
  );
}

export default App;
