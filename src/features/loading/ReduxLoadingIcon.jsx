import React from 'react';
import {Box, SvgIcon} from "@material-ui/core";
import ReduxLogo from "../../assets/redux-logo";

const ReduxLoadingIcon = () => {
    return (
        <Box position='fixed' top='40%' left='50%'>
            <Box width='40px' ml='-20px'>
                <SvgIcon component={ReduxLogo}/>
            </Box>
        </Box>

    );
};

export default ReduxLoadingIcon;
