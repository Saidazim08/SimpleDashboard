import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import PhotoIcon from '@material-ui/icons/Photo';
import React from 'react'
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ContainerWrapper from './ContainerWrapper';

const Container = ({ children }) => {
    return (
        <ContainerWrapper>
            <div className="sidebar">
                <h2>Menu</h2>
                <List>
                    <Link to="/dashboard/home">
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>

                    <Link to="/dashboard/users">
                        <ListItem button>
                            <ListItemIcon>
                                <PeopleAltIcon />
                            </ListItemIcon>
                            <ListItemText primary="Users" />
                        </ListItem>
                    </Link>

                    <Link to="/dashboard/todos">
                        <ListItem button>
                            <ListItemIcon>
                                <WebAssetIcon />
                            </ListItemIcon>
                            <ListItemText primary="Todos" />
                        </ListItem>
                    </Link>
                    <Link to="/dashboard/Album">
                        <ListItem button>
                            <ListItemIcon>
                                <PhotoLibraryIcon />
                            </ListItemIcon>
                            <ListItemText primary="Album" />
                        </ListItem>
                    </Link>
                    <Link to="/dashboard/Photos">
                        <ListItem button>
                            <ListItemIcon>
                                <PhotoIcon />
                            </ListItemIcon>
                            <ListItemText primary="Photos" />
                        </ListItem>
                    </Link>
                </List>
            </div>
            <div className="rightside">
                <header className="shadow p-3 mb-3">
                    <MenuIcon />
                </header>
                <div className="content">
                    {children}
                </div>
            </div>
        </ContainerWrapper>
    )
}

export default Container;