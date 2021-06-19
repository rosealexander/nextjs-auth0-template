import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {MenuOpen} from "@material-ui/icons";
import {Box, IconButton, useTheme, withStyles} from "@material-ui/core";
import {NextLinkComposed} from "../../../lib/Link";
import {navigationItems, selectedIndex} from "./navigationSlice";
import {useDispatch, useSelector} from "react-redux";
import ReduxLogo from "../../assets/redux-logo";
import {useUser} from "@auth0/nextjs-auth0";

const SideDrawer = () => {
    const { user, error, isLoading } = useUser();
    const dispatch = useDispatch()
    const value = useSelector(selectedIndex)

    const [isOpen, setIsOpen] = React.useState(false);
    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsOpen(open);
    };

    const theme = useTheme();
    const StyledListItem = withStyles({
        button: {
            width: '128px',
            paddingLeft: '32px',
        },
        root: {
            "&$selected": {
                fontWeight: 'bold',
                color: theme.palette.primary.main,
                "& .MuiListItemIcon-root": {
                    color: theme.palette.primary.main,
                }
            },
        },
        selected: {},
    })(ListItem);

    return (
        <>
            <IconButton onClick={toggleDrawer(true)}>
                <MenuOpen/>
            </IconButton>
            <SwipeableDrawer
                open={isOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <Box role="presentation"
                     onClick={toggleDrawer(false)}
                     onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        <ListItem>
                            <Box ml='16px' width='32px'>
                                <ReduxLogo/>
                            </Box>
                        </ListItem>

                        {!user ?
                            <StyledListItem button
                                            component={NextLinkComposed}
                                            to={{pathname: '/api/auth/login'}}
                                            onClick={() => {
                                                dispatch({type: 'navigation/clearSelectedIndex'})
                                            }}
                            >
                                Login
                            </StyledListItem>
                            :
                            <StyledListItem button
                                            component={NextLinkComposed}
                                            to={{pathname: '/profile'}}
                                            onClick={() => {
                                                dispatch({type: 'navigation/clearSelectedIndex'})
                                            }}
                            >
                                Profile
                            </StyledListItem>
                        }

                        {navigationItems.map((item, index) => {
                                if (item.visible || user)
                                    return (
                                        <StyledListItem button
                                                        key={item.label}
                                                        selected={index === value}
                                                        component={NextLinkComposed}
                                                        to={{pathname: item.pathname}}
                                                        onClick={() => {
                                                            dispatch({type: 'navigation/setSelectedIndex', payload: index})
                                                        }}
                                        >
                                            {item.label}
                                        </StyledListItem>
                                    )
                        })}
                    </List>
                </Box>
            </SwipeableDrawer>
        </>
    );
}

export default SideDrawer
