import React from "react";
import Features from "../components/home/Features.jsx";
import HeroSection from "../components/home/HeroSection.jsx";
import HowItWorks from "../components/home/HowItWorks.jsx";
import ProfessionalTherapistSection from "../components/home/ProfessionalTherapistSection.jsx";
import FAQSection from "../components/home/FAQSection.jsx";
import CardSection from "../components/home/CardSection.jsx";
import ArticleSlider from "../components/home/ArticleSlider.jsx";
import UserSlider from "../components/home/userSlider.jsx";
import UserThink from "../components/home/UserThink.jsx";


const Home = () => (
    <>
        <HeroSection/>
        <Features/>
        <HowItWorks/>
        <ProfessionalTherapistSection/>
        <UserThink />
        <UserSlider/>
        <FAQSection/>
        <CardSection/>
        <ArticleSlider/>
    </>
);

export default Home;
