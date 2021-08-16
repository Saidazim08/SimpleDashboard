import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../containers/Container';
import Home from '../Home';
import Users from '../Users';
import Album from '../Album';
import Todos from '../Todos/Todo';
import MenuWrapper from './MenuWrapper'


const Menu = () => {
    const { menu } = useParams();

    return (
        <MenuWrapper>
            <Container>
                <h1>{menu}</h1>
                {menu == "home" && <Home />}
                {menu == "users" && <Users />}
                {menu == "todos" && <Todos />}
                {menu == "album" && <Album />}
            </Container>
        </MenuWrapper>
    )
}

export default Menu;