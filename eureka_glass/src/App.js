import variables from './components/variables.modules.scss';
import BeforeHeader from './components/Before-Header/Before-Header';
import BHeaderHr from './components/Before-Header-Hr/Before-Header-Hr';
import Header from "./components/Header/Header";
import Catalog from './components/Catalog/Catalog';
import Slogan from './components/Slogan/Slogan';
import Advantages from './components/Advantages/Advantages';

function App() {
  return (
    <div>
      <BeforeHeader/>
      <BHeaderHr/>
      <Header/>
      <Catalog/>
      <Slogan/>
      <Advantages/>
    </div>
    
  );
}

export default App;
