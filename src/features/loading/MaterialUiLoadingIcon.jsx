import React from 'react';
import {Box, SvgIcon} from "@material-ui/core";
import MaterialUiLogo from "../../assets/material-ui-logo";

const MaterialUiLoadingIcon = () => {
    return (
        <Box position='fixed' top='40%' left='50%'>
            <Box width='32px' ml='-18px'>
                <SvgIcon component={MaterialUiLogo}/>
            </Box>
        </Box>
    );
};

export default MaterialUiLoadingIcon;
