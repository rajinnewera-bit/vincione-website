import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import WhatWeBuildPage from './pages/WhatWeBuildPage'
import ProductsPage from './pages/ProductsPage'
import ApproachPage from './pages/ApproachPage'
import FounderPage from './pages/FounderPage'
import ContactPage from './pages/ContactPage'
import RouteReset from './components/RouteReset'
import './phase1.css'

function App() {
  return (
    <BrowserRouter>
      <RouteReset />
      <Layout>
        <main className="page-main" id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-we-build" element={<WhatWeBuildPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/approach" element={<ApproachPage />} />
            <Route path="/founder" element={<FounderPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </Layout>
    </BrowserRouter>
  )
}

export default App
