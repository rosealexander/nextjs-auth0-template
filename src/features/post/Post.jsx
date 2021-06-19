import React from 'react';
import Router from "next/router";
import {Box, Button, Grid, Icon, Paper, Tooltip, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {destroyPost, publishPost} from "./postRequest";
import {useUser} from "@auth0/nextjs-auth0";
import DraftsIcon from '@material-ui/icons/Drafts';

const Post = () => {
    const { user, error, isLoading } = useUser();
    const data = useSelector((state) => state.post.data)

    return (
        <Paper>
            <Box p={2}>
                <Grid container
                      direction='column'
                      spacing={ 2 }
                >
                    <Grid item>
                        <Grid container
                              alignItems='center'
                              spacing={1}
                        >
                            <Grid item>
                                <Typography variant='h4'
                                            display='inline'
                                >
                                    {data.title}
                                </Typography>
                            </Grid>
                        {!data.published &&
                            <Grid item>
                                <Tooltip title="Draft">
                                    <Icon >
                                        <DraftsIcon color='primary'
                                                    fontSize='small'
                                                    style={{marginBottom: '-4px'}}
                                        />
                                    </Icon>
                                </Tooltip>
                            </Grid>
                        }
                        </Grid>
                        <Typography variant='subtitle2'>
                            By {data.author ? data.author.name : 'Unknown author'}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='body1'>
                            {data.content}
                        </Typography>
                    </Grid>
                    {data.author && user && (data.author.user_id === user.sub) &&
                        <Grid item>
                            <Grid container spacing={2}>
                                <Grid item>
                                    {!data.published && (
                                        <Button variant='contained'
                                                onClick={() => publishPost(data.id)
                                                    .then(async () => await Router.push('/'))}
                                        >
                                            Publish
                                        </Button>
                                    )}
                                </Grid>
                                <Grid item>
                                    <Button variant='contained'
                                            onClick={() => destroyPost(data.id)
                                                .then(async () => await Router.push('/'))}
                                    >
                                        Delete
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    }
                </Grid>
            </Box>
        </Paper>
    )
};

export default Post;
