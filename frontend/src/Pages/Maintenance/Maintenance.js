import React from 'react';
import './Maintenance.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {Box, Grid, Typography} from "@mui/material";


/**
 * Maintenance Page
 *
 * Renders a maintenance message along with social media icons when the page is under maintenance.
 *
 * @returns {JSX.Element} The rendered maintenance page component.
 */

function Maintenance() {
    return (
        <>
            <Box sx={{}}>
                <div className="stars"></div>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2}}>
                <Grid container
                      spacing={4}
                      sx={{minHeight: '100vh'}}
                      direction="column"
                      justifyContent="center"
                      alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <Typography
                            sx={{
                                color: '#4f64cb',
                                fontWeight: "bold",
                                zIndex: 2,
                                position: 'relative',
                                '@media (max-width: 600px)': {
                                    fontSize: '2.5rem',
                                    textAlign: 'center',
                                },
                        }}
                            variant={"h1"}>MAINTENANCE
                        </Typography>
                        <Typography
                            sx={{
                                color: 'white',
                                textAlign: 'center',
                                zIndex: 2,
                                position: 'relative',
                                '@media (max-width: 600px)': {
                                    fontSize: '1.5rem',
                                },
                        }}
                            variant={"h4"}> I am currently working on the page!
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Grid container spacing={5} justifyContent="center" alignItems="center">
                            <Grid item>
                                <a className="icons" href="https://github.com/alesgsanudoo">
                                    <FontAwesomeIcon icon={faGithub}/>
                                </a>
                            </Grid>
                            <Grid item >
                                <a className="icons" href="https://www.linkedin.com/in/alejandro-s-griffith-13b210261/">
                                    <FontAwesomeIcon icon={faLinkedin}/>
                                </a>
                            </Grid>
                            <Grid item>
                                <a className="icons" href="https://www.instagram.com/alesgsanudoo_/">
                                    <FontAwesomeIcon icon={faInstagram}/>
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Box>
        </>
    );
}

export default Maintenance;