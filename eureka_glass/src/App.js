import BeforeHeader from './components/Before-Header/Before-Header';
import BHeaderHr from './components/Before-Header-Hr/Before-Header-Hr';
import Header from "./components/Header/Header";
import Catalog from './components/Catalog/Catalog';
import Slogan from './components/Slogan/Slogan';
import Advantages from './components/Advantages/Advantages';
import Services from './components/Services/Services';
import Reviews from './components/Reviews/Reviews';
import Feedback from './components/Feedback/Feedback';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <BeforeHeader/>
      <BHeaderHr/>
      <Header/>
      <Catalog/>
      <Slogan/>
      <Advantages/>
      <Services/>
      <Reviews/>
      <Feedback/>
      <Faq/>
      <Footer/>
    </div>
    
  );
}

export default App;
