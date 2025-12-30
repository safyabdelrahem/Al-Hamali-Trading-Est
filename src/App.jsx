import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CategoryDetail from './pages/CategoryDetail'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'
import Articles from './pages/Articles'
import Policy from './pages/Policy'
import WhatsAppButton from './components/WhatsAppButton'


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/category/:slug" element={<CategoryDetail />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
