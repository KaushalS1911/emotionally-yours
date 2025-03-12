import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import article1 from '../../assets/home/article/article1.webp'
import article2 from '../../assets/home/article/article2.webp'
import article3 from '../../assets/home/article/article3.webp'
import article4 from '../../assets/home/article/article4.webp'

const articles = [
    {
        id: 1,
        title: "What is Mythomania (Lying Disorder)? Symptoms, Causes, and Treatment of Mythomania",
        date: "04/07/2023",
        author: "Psychologist İlayda Celebiler",
        image: article1, // Replace with actual image URL
    },
    {
        id: 2,
        title: "What is Olympic Sports Psychology?",
        date: "03/07/2024",
        author: "Clinical Psychologist Tilbe Çankaya",
        image: article2, // Replace with actual image URL
    },
    {
        id: 3,
        title: "Tension-Type Headaches: Symptoms, Causes, and Treatment",
        date: "27/07/2023",
        author: "Psychologist Pınar Karataş, M.A.",
        image: article3, // Replace with actual image URL
    },
    {
        id: 4,
        title: "Tension-Type Headaches: Symptoms, Causes, and Treatment",
        date: "27/07/2023",
        author: "Psychologist Pınar Karataş, M.A.",
        image: article4, // Replace with actual image URL
    },
];

const ArticleSlider = () => {
    return (
        <Container>
            <Box py={4}>
                <Typography variant="h4" gutterBottom sx={{display:"flex" , justifyContent:"center" , fontWeight:700}}>
                    Articles
                </Typography>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    loop={true}
                    modules={[Pagination]}
                >
                    {articles.map((article) => (
                        <SwiperSlide key={article.id}>
                            <Box sx={{ maxWidth: 400, margin: "auto", height: 400, border: "2px solid #3268f248", p: 3, borderRadius: 3 }}>
                                <Typography component="img" height="140" src={article.image} alt={article.title} borderRadius={3} />
                                <Box mt={2}>
                                    <Typography variant="body2" color="text.secondary">
                                        {article.date}
                                    </Typography>
                                    <Typography variant="h6" component="div">
                                        {article.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {article.author}
                                    </Typography>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
            <Box sx={{ display: 'flex', justifyContent:"center"}}>
                <Button sx={{ border:"1px solid #3268F3" , color:"#3268F3" , borderRadius:"12px", padding:"6px 32px", fontSize:"20px" ,"&:hover":{color:"#fff" , backgroundColor:"#3268F3"}}}>
                    See All Articles
                </Button>
            </Box>
        </Container>
    );
};

export default ArticleSlider;
