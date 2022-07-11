import { MainPage } from 'src/pages';
import { Header } from 'src/components';

type Props = {
  rentalCount: number;
};

const App = ({ rentalCount }: Props): JSX.Element => (
  <div className="page page--gray page--main">
    <Header />
    <MainPage rentalCount={rentalCount} />
  </div>
);

export default App;
