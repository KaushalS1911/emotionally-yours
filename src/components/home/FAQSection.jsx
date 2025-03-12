import {Box, Typography, Button, Accordion, AccordionSummary, AccordionDetails, Container} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQSection = () => {

    const faqs = [
        "I filled out the questionnaire. How can I contact my therapist?",
        "I would like to have a welcoming video call with my therapist before starting the sessions. How can I make an appointment?",
        "I have decided to start the sessions. How do I make the payment?",
        "How can I join the online therapy and counseling sessions?"
    ];

    return (
        <Box sx={{background: "#F7F9FE"}}>
            <Container>
                <Box sx={{ py: 8, textAlign: "center" }}>
                    <Typography variant="h4" fontWeight={700} gutterBottom>
                        Frequently Asked Questions
                    </Typography>
                    {faqs.map((question, index) => (
                        <Accordion key={index} sx={{ mb: 1 , p:1 , borderRadius: "12px"}}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="body1">{question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body2" color="textSecondary">
                                    Answer for {question} will be here.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                    <Typography variant="subtitle1" fontWeight={600} gutterBottom mt={4}>View All Frequently Asked Questions (FAQ)</Typography>
                    <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                        Get Started
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default FAQSection;