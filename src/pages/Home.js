import React from 'react'
import About from '../components/about/About';
import Navbar from '../components/navbar/Navbar';
import Products from '../components/products/Products';
import Section from '../components/section/Section';
import Orders from '../components/orders/Orders';
import Footer from '../components/footer/Footer';
import CartIcon from '../components/cart/CartIcon'

function Home() {
    return (
    <>
    <CartIcon />
    <Navbar />
    <Section />
    <About />
    <Products/>
    <Orders />
    <Footer />
    </>
    )
}

export default Home
