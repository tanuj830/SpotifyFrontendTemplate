import React from 'react'
import Header from '../components/Header';
import Accordion from '../components/AccordionComponent';
import Footer from '../components/Footer';
import MainSection from '../components/MainSection';


const Home = () => {
    return (
        <div>
            <MainSection />
            <Header />
            <Accordion />
            <Footer />
        </div>
    )
}

export default Home
