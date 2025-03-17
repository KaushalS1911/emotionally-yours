import {Box, Typography, Button, Accordion, AccordionSummary, AccordionDetails, Container} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQSection = () => {

    const faqs = [
        {
            question: "I filled out the questionnaire. How can I contact my therapist?",
            answer: "Based on your answers to the questionnaire, you will be matched with the most suitable online therapist. You can contact your therapist by logging into the Hiwell mobile application or via portal.hiwellapp.com. Before starting your online therapy journey, you can video call your online therapist for 15 minutes free of charge and ask your questions. You can find our mobile app on the App Store, Google Play Store, and App Gallery."
        },
        {
            question: "I would like to have a welcoming video call with my therapist before starting the sessions. How can I make an appointment?",
            answer: "You can message your therapist about the dates you are available or by selecting slots from the suggested dates. Your therapist will reach you within 24 hours to set up the 15-minute free-of-charge video call before starting your online therapy journey."
        },
        {
            question: "I have decided to start the sessions. How do I make the payment?",
            answer: "You can purchase sessions from the Hiwell mobile application and web portal. The fee for 1 session is $55 for all therapists. Don't forget to check out our packages!"
        },
        {
            question: "How can I join the online therapy and counseling sessions?",
            answer: "You can join the online therapy sessions both on your mobile device and your computer."
        }
    ];

    return (
        <Box sx={{background: "#F7F9FE" , marginTop:"100px"}}>
            <Container maxWidth={"md"}>
                <Box sx={{ py: 6, textAlign: "left" }}>
                    <Typography variant="h4" fontWeight={700} gutterBottom sx={{ pb: 3, textAlign: "center" }}>
                        Frequently Asked Questions
                    </Typography>
                    {faqs.map((faq, index) => (
                        <Accordion key={index} sx={{ mb: 2, borderRadius: "12px", boxShadow: "none", border: "1px solid #E0E0E0" }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="body1">{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: "#F8F9FA", borderRadius: "0 0 12px 12px", padding: 2 }}>
                                <Typography variant="body2" color="textPrimary">
                                    {faq.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                    <Typography variant="subtitle1" fontWeight={600} gutterBottom mt={4} sx={{color:"#0D6EFD", textAlign: "center"}}>View All Frequently Asked Questions (FAQ)</Typography>
                    <Box sx={{ textAlign: "center" }}>
                        <Button variant="contained" color="primary" sx={{ mt: 2 , fontSize:"20px" , borderRadius:"12px", paddingX: 4 }}>
                            Get Started
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default FAQSection;
