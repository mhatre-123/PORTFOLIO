import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Career } from './components/sections/Career';
import { Research } from './components/sections/Research';
import { Technical } from './components/sections/Technical';
import { Credentials } from './components/sections/Credentials';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <main className="selection:bg-primary-500 selection:text-white">
      <Navbar />
      <Hero />
      <div className="space-y-32">
        <About />
        <Career />
        <Research />
        <Credentials />
        <Technical />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

export default App;
