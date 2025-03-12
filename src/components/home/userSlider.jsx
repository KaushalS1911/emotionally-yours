import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Autoplay  } from "swiper/modules";
function UserSlider() {

    const slider = [
        {
            title: "Great service",
            description:"I was struggling with depression, but the matching algorithm is spot on and found me the perfect therapist for my needs. The therapist I was matched with was incredibly supportive and helpful, and I highly recommend this app to anyone needing support.",
            name:"James J."
        },
        {
            title:"Fav app",
            description: "Hiwell has been a great help in managing my anxiety. My therapist is amazing, she is very knowledgeable and provides great insights that have helped me navigate my anxiety, and the privacy features make me feel comfortable opening up.",
            name:"Melinda C."
        },
        {
            title:"High-quality therapy app",
            description:"I've been going through a rough patch in my marriage, and Hiwell has helped me gain perspective and communicate better with my spouse. My therapist is non-judgmental and provides helpful insights. I appreciate the convenience of being able to access therapy from my phone.",
            name:"Daniel M."
        },
        {
            title:"A good option for a busy schedule",
            description: "I don't have time to attend in-person therapy sessions. But here, I can schedule my sessions at a time that works for me. I recommend this app to anyone who needs mental health support.",
            name: "Stephen G."
        },
        {
            title: "Excellent app",
            description: "I've tried several online therapy apps, but Hiwell is the best. The clinical psychologists are all highly qualified and professional. I've been using it for a few weeks now, and I am so glad I found this app!",
            name:"Emily B."
        },
        {
            title: "Great app",
            description: "I was feeling overwhelmed with work and didn't know where to turn. A friend recommended Hiwell Online Therapy, and I gave it a shot. My therapist is so understanding and provides practical advice that has helped me manage my stress and anxiety. I highly recommend this app!",
            name:"Lucas B."
        },
        {
            title: "Amazing!",
            description: "I was initially skeptical about online therapy but Hiwell has exceeded my expectations. The fact that the sessions are entirely confidential is a huge plus, and I feel like I can open up and be honest with my therapist without any judgment. Highly recommended!",
            name:"Michael A."
        },
        {
            title: "Long time favorite",
            description:"I've been using Hiwell for a few months now, and I'm so happy with the service. The therapists are all professional and compassionate, and the app is affordable compared to other therapy options.",
            name:"Olivia D."
        },
        {
            title: "Highly recommended",
            description: "Hiwell has been a lifeline for me during a difficult time. The privacy and anonymity features are amazing - I feel safe opening up to my therapist. I highly recommend this app to anyone in need of support.",
            name:"Scarlett R."
        },
        {
            title: "Easy to use",
            description: "The app is very easy to use, and you can access therapy as long as you connect to the internet. Also, you don’t need to search for your therapist because the matching algorithm finds you the perfect fit. I'm so grateful for this service.",
            name:"Peter L."
        },
        {
            title: "Love my therapist",
            description: "I've been dealing with depression for a while and hesitated to try therapy. But Hiwell has provided me with such a positive experience. My therapist is empathetic and has helped me understand the root causes of my depression.",
            name:"Debbie C."
        },
    ]

    return (
        <Container>
            <Box py={4}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    autoplay={{
                        delay: 1000,
                        // disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    modules={[Pagination,Autoplay]}
                >
                    {slider.map((article) => (
                        <SwiperSlide key={article.id}>
                            <Box sx={{ maxWidth: 400,height:280 ,border:"2px solid #3268f248",p:3,borderRadius:3,}} >
                                <Box sx={{display: "flex", justifyContent: "flex-end"}}>
                                <img src={'https://www.hiwellapp.com/assets/images/quote.svg'} />
                                </Box>

                                <Box mt={1} >

                                    <Typography variant="h6" component="div">
                                        {article.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" my={1}>
                                        {article.description}
                                    </Typography>
                                    <Typography variant="h7" component="div">
                                        {article.name}
                                    </Typography>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Container>
    );
}

export default UserSlider;