import React from 'react';
import {Grid, Typography} from "@material-ui/core";

const Footer = () => {
    return (
        <Grid container
              justify='center'
              alignItems='center'
              direction='column'
        >
            <Grid item>
                <Typography variant="body2"
                            color="textSecondary"
                            display='inline'
                >
                    (ɔ) 2021 cop·y·left
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="subtitle2"
                            color="textSecondary"
                            display='inline'
                >
                    /ˈkäpēˌleft/
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Footer
