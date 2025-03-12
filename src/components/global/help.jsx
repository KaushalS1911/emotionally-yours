import React from 'react';
import {Box, Button} from "@mui/material";

function Help() {
    return (
        <>
            <Box sx={{
                mt: 8,
                backgroundColor: "#1976D2",
                color: "white",
                py: 3,
                width: '100%',
                textAlign: "center"
            }}>
                <Box sx={{fontSize: "20px", fontWeight: "600", mb: 2}}>
                    Need help? Contact us!
                </Box>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "white",
                        color: "#1976D2",
                        borderRadius: "20px",
                        px: 4,
                        py: 1,
                        fontSize: "16px",
                        fontWeight: "600",
                        '&:hover': {
                            backgroundColor: "#f0f0f0"
                        }
                    }}
                >
                    Contact Us
                </Button>
            </Box>
        </>
    );
}

export default Help;