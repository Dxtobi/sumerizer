// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/layouts/Header.layout';
import Footer from './components/layouts/Footer.layout';

import Home from './pages/home/Home.page';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router >
      <Header />
      <div className='min-h-full bg-transparent my-[81px] absolute bg-glass-no-blur'>


        <div>
          <Routes >


            <Route exact path='/' element={<Home />} />


          </Routes>

        </div>
        <Footer />
      </div>

    </Router>
  )
}

export default App
