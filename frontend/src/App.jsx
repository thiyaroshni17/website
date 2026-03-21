import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Refund from './pages/Refund'
import Chatbot from './components/Chatbot'
import Blog from './pages/Blog'
import Addblog from './pages/Addblog'
import BlogDetail from './pages/BlogDetail'
import ScrollToTop from './components/ScrollToTop'
import { ModalProvider } from './context/ModalContext'
import CallModal from './components/CallModal'

const App = () => {
  return (
    <ModalProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/addblog/17292005" element={<Addblog />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund" element={<Refund />} />
      </Routes>
      <Chatbot />
      <CallModal />
    </ModalProvider>
  )
}

export default App
