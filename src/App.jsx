import React from 'react';
import { Header, Services, Health, Applicaiton, Testimonials, Blog, Footer } from './containers'
import './App.css'
import { Navbar } from "./components"

const App = () => (
      <div className="App">
        <Navbar />
        <Header />
        <Services />
        <Health />
        <Applicaiton />
        <Testimonials />
        <Blog />
        <Footer />
    </div>
  )


export default App
