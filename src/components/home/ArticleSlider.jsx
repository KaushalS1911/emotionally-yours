import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const articles = [
    {
        id: 1,
        title: "What is Mythomania (Lying Disorder)? Symptoms, Causes, and Treatment of Mythomania",
        date: "04/07/2023",
        author: "Psychologist İlayda Celebiler",
        image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
    {
        id: 2,
        title: "What is Olympic Sports Psychology?",
        date: "03/07/2024",
        author: "Clinical Psychologist Tilbe Çankaya",
        image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
    {
        id: 3,
        title: "Tension-Type Headaches: Symptoms, Causes, and Treatment",
        date: "27/07/2023",
        author: "Psychologist Pınar Karataş, M.A.",
        image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
];

const ArticleSlider = () => {
    return (
        <Box textAlign="center" py={4}>
            <Typography variant="h4" gutterBottom>
                Articles
            </Typography>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[Pagination]}
            >
                {articles.map((article) => (
                    <SwiperSlide key={article.id}>
                        <Card sx={{ maxWidth: 345, margin: "auto" }}>
                            <CardMedia component="img" height="140" image={article.image} alt={article.title} />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {article.date}
                                </Typography>
                                <Typography variant="h6" component="div">
                                    {article.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {article.author}
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Button variant="contained" sx={{ mt: 3 }}>
                See All Articles
            </Button>
        </Box>
    );
};

export default ArticleSlider;
