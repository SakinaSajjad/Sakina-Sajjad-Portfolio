import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid, Typography } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio({ innerRef }) {
    const hasProjects = info.portfolio && info.portfolio.length > 0;

    return (
        <Box
            id={'portfolio'}
            ref={innerRef}
            minHeight={'calc(100vh - 175px)'}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            px={{ xs: 2, sm: 4, md: 8 }}
            py={4}
        >
            <Grid
                container
                spacing={4}
                justifyContent="center"
                alignItems="stretch"
            >
                {hasProjects ? (
                    info.portfolio.map((project, index) => (
                        <Grid item xs={12} sm={10} md={6} lg={4} key={index}>
                            <PortfolioBlock
                                image={project.image}
                                live={project.live}
                                source={project.source}
                                title={project.title}
                            />
                        </Grid>
                    ))
                ) : (
                    <Grid item xs={12}>
                        <Typography
                            variant="h4"
                            align="center"
                            sx={{ mt: 6, color: 'text.secondary' }}
                        >
                            Coming Soon...
                        </Typography>
                    </Grid>
                )}
            </Grid>
            {hasProjects && (
                <Typography
                    variant="h5"
                    align="center"
                    sx={{ mt: 6, color: 'text.secondary' }}
                >
                    More Projects Coming Soon...
                </Typography>
            )}
        </Box>
    );
}