import React from 'react';
import {AppBar, BottomNavigation, BottomNavigationAction, Grid, Hidden, Toolbar, withStyles} from "@material-ui/core";
import ThemeToggle from "../theme/ThemeToggle";
import SideMenu from "./SideDrawer";
import {navigationItems, selectedIndex} from "./navigationSlice";
import {NextLinkComposed} from "../../../lib/Link";
import {useDispatch, useSelector} from "react-redux";
import Signin from "../signin/Signin";
import {useUser} from "@auth0/nextjs-auth0";
import hash from 'object-hash'

const StyledNavigation = withStyles({
    root: {
        backgroundColor: 'transparent',
        disableRipple: true,
    },
})(BottomNavigation);

const TopNav = () => {
    const dispatch = useDispatch()
    const value = useSelector(selectedIndex)
    const { user, error, isLoading } = useUser();

    return (
        <AppBar position='static' color='transparent' elevation={0}>
            <Toolbar>
                <Grid container
                      justify='space-between'
                      alignItems='center'
                >
                    <Hidden smUp>
                        <Grid item>
                            <SideMenu/>
                        </Grid>
                        <Grid item>
                            <ThemeToggle/>
                        </Grid>
                    </Hidden>
                    <Hidden xsDown>
                        <Grid item>
                            <StyledNavigation showLabels
                                              value={value}
                                              onChange={(event, newValue) => {
                                                  dispatch({type: 'navigation/setSelectedIndex', payload: newValue})
                                              }}
                            >
                                {navigationItems.map((item, index) => {
                                    if (item.visible || user)
                                        return (
                                            <BottomNavigationAction key={hash(item)}
                                                                    label={item.label}
                                                                    component={NextLinkComposed}
                                                                    to={{pathname: item.pathname}}
                                            />
                                        )
                                })}
                            </StyledNavigation>
                        </Grid>
                        <Grid item>
                            <Grid container
                                  justify='center'
                                  alignItems='center'
                                  spacing={2}
                            >
                                <Grid item>
                                    <ThemeToggle/>
                                </Grid>
                                <Grid item>
                                    <Signin/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Hidden>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default TopNav
