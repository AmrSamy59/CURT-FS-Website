import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from "next/image";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#1a1a2e',
    ...theme.typography.body2,
    padding: theme.spacing(1.5),
    textAlign: 'center',
    height: '5rem',
    color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid({items, size, title, className}) {
    return (
        <div className={className}>
            <h5 className="col-12 text-center mb-10 section-title"> {title} </h5>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {items.map((imgUrl) => (
                        <Grid item xs={2} sm={4} md={size} key={imgUrl} >
                            <Item className="flex justify-center">
                                <img className={"sm:grayscale hover:grayscale-0"}
                                     src={imgUrl}
                                     style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                     alt={imgUrl}
                                />
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}
