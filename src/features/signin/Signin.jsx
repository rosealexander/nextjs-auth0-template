import React from 'react';
import {useUser} from "@auth0/nextjs-auth0";
import {Button, IconButton} from "@material-ui/core";
import {NextLinkComposed} from "../../../lib/Link";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Signin = () => {
    const { user, error, isLoading } = useUser();

    return(
        user ?
            <IconButton component={NextLinkComposed}
                           to={{pathname: '/profile',}}
            >
                <AccountCircleIcon />
            </IconButton>
        :
            <Button variant='contained'
                    color='primary'
                    size='small'
                    component={NextLinkComposed}
                    to={{pathname: '/api/auth/login',}}
            >
                Login
            </Button>
    )
};

export default Signin;
