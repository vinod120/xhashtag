import BitcionPages from './pages/container/bitcionPages';
import SubHeader from './pages/container/subHeader';
import Footer from './pages/HeaderAndFooter/footer';
import Header from './pages/HeaderAndFooter/header';

function App() {
  return (
    <div className="App">
      <div style={{background:' #000000 0% 0% no-repeat padding-box'}}>
        <Header />
        <SubHeader />
        <BitcionPages />
      </div>
      <div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
