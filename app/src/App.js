import './style/App.css';
import Header from './components/Header.js';
import SectionLeft from './components/SectionLeft.js';
import SectionRight from './components/SectionRight.js';
import SectionMiddle from './components/SectionMiddle.js';
import Footer from './components/Footer';

function App() {
  return (
    <div className="body">
      <Header />
      {/* Academics */}
      <SectionLeft />
      {/* Academics + Leadership */}
      <SectionRight />
      {/* Athletics */}
      <SectionLeft />
      {/* Extra CUrricular */}
      <SectionRight />
      {/* Awards and Honors */}
      <SectionMiddle />
      <Footer />
    </div>
  );
}

export default App;
