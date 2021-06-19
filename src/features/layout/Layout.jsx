import React from 'react';
import {Box, Container, CssBaseline} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import {darkTheme, lightTheme} from "../theme/theme";
import {useSelector} from "react-redux";
import Nav from "../navigation/TopNav";
import Footer from "../footer/Footer";
import {selectStyle} from "../theme/themeSlice";
import MaterialUiLoadingIcon from "../loading/MaterialUiLoadingIcon";

const Layout = (props) => {
    const themeStyle = useSelector(selectStyle)
    const isLoading = useSelector((state) => state.loading.isLoading)

    return (
        <ThemeProvider theme={themeStyle === 'light' ? {...lightTheme} : {...darkTheme}}>
            <CssBaseline/>
            <Container maxWidth='xs'
                       style={{padding: '0'}}
            >
                <Box display='flex'
                     minHeight='90vh'
                     flexDirection='column'
                     justifyContent='space-between'
                >
                    <Nav/>
                    {isLoading ? <MaterialUiLoadingIcon/> :
                        <Box m={5}
                             minHeight='60vh'
                        >
                            {props.children}
                        </Box>
                    }
                    <Footer/>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Layout
