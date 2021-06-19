import React from 'react';
import {useUser, withPageAuthRequired} from "@auth0/nextjs-auth0";
import {Box, Button, Grid, Paper, Typography} from "@material-ui/core";
import {NextLinkComposed} from "../../../lib/Link";

const Profile = () => {
    const { user, error, isLoading } = useUser();

    return (
        <Paper>
            <Box p={3}>
                <Grid container
                      direction='column'
                      justify='center'
                      spacing={2}
                >
                    <Grid item>
                        <Typography variant='body1'
                                    display='inline'
                                    style={{ marginRight: 16 }}
                        >
                            Username:
                        </Typography>
                        <Typography variant='body2'
                                    display='inline'
                        >
                            {user[process.env.AUTH0_NAMESPACE + 'username']}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='body1'
                                    display='inline'
                                    style={{ marginRight: 16 }}
                        >
                            Email:
                        </Typography>
                        <Typography variant='body2'
                                    display='inline'
                        >
                            {user.name}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant='contained'
                                component={NextLinkComposed}
                                to={{pathname: '/api/auth/logout',}}
                        >
                            Logout
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
};

export default Profile
