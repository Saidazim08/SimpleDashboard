import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { setUsers } from '../../redux/action';
import AlbumWrapper from './AlbumWrapper';

const Album = () => {
    const users = useSelector(state => state.users);
    console.log(users);

    const dispatch = useDispatch();

    useEffect(() => {
        setUsers(dispatch);
    }, [])

    return (
        <AlbumWrapper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>name</TableCell>
                        <TableCell>username</TableCell>
                        <TableCell>email</TableCell>
                        <TableCell>phone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(v => <TableRow>
                        <TableCell>{v.id}</TableCell>
                        <TableCell>{v.name}</TableCell>
                        <TableCell>{v.username}</TableCell>
                        <TableCell>{v.email}</TableCell>
                        <TableCell>{v.phone}</TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </AlbumWrapper>
    )
}

export default Album