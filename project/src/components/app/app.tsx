import MainPage from '../../pages/main-page/main-page';
import Header from '../header/header';

type Props = {
  rentalCount: number
}

const App = ({rentalCount}: Props): JSX.Element => (
  <div className="page page--gray page--main">
    <Header />
    <MainPage rentalCount={rentalCount} />
  </div>
);

export default App;
