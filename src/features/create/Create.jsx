import {useState} from 'react';
import Router from "next/router";
import {Box, Button, Grid, Hidden, Paper, TextField, Typography} from "@material-ui/core";
import Link from "../../../lib/Link";
import {createRequest} from "./createRequest";
import {useUser, withPageAuthRequired} from '@auth0/nextjs-auth0';

const Create = () => {
    const { user, error, isLoading } = useUser();

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const submitData = e => {
        e.preventDefault()
        createRequest(title, content, user[process.env.AUTH0_NAMESPACE + 'username'], user.sub)
            .then(async () => await Router.push('/drafts'))
    }

    return (
        <Grid container
              direction='column'
              spacing={3}
        >
            <Hidden smUp>
                <Grid item>
                    <Typography variant='h3'
                                color='primary'
                    >
                        Create
                    </Typography>
                </Grid>
            </Hidden>
            <Grid item>
                <Paper>
                    <Box p={3}>
                        <form onSubmit={submitData}>
                            <Grid container
                                  direction='column'
                                  spacing={2}
                                  alignItems='center'
                                  justify='center'
                            >
                                <Grid item>
                                    <TextField autoFocus
                                               required
                                               variant='outlined'
                                               size='small'
                                               onChange={e => setTitle(e.target.value)}
                                               type="text"
                                               value={title}
                                               label="Title"
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField required
                                               variant='outlined'
                                               size='medium'
                                               onChange={e => setContent(e.target.value)}
                                               label="Content"
                                               multiline
                                               rows={8}
                                               value={content}
                                    />
                                </Grid>
                                <Grid item>
                                    <Grid container
                                          spacing={1}
                                          alignItems='center'
                                          justify='center'
                                    >
                                        <Grid item>
                                            <Button variant='contained'
                                                    type="submit"
                                            >
                                                Create
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Link href={{pathname: '/'}}>
                                                or Cancel
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    )
};

export default Create
