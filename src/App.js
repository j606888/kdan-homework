import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import SpaceBox from './components/SpaceBox/SpaceBox';

import { useState } from 'react'

function App() {
  const [term, setTerm] = useState(null)
  const handleSubmit = (term) => {
    setTerm(term)
  }

  return (
    <div className="App">
      <Header />
      <Hero onSubmit={handleSubmit}/>
      <SpaceBox term={term} />
      <Footer />
    </div>
  )
}

export default App;
