"use client"

import useSWR from "swr";
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper, { paperClasses } from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { dividerClasses } from "@mui/material";
import axios from "axios";
import { User } from "@/models/User";

const headers = {
  "access-token": localStorage.getItem('access-token'),
  "client": localStorage.getItem('client'),
  "uid": localStorage.getItem('uid'),
}
const fetcher = (url: string) => axios.get(url, {headers: headers}).then(res => res.data);

// 表示レイアウトの設定
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: grey[600],
    color: grey[50],
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Home() {
  const {data, error, isLoading} = useSWR<User[]>("http://localhost:3001/api/users", fetcher)
  if (isLoading) return (
    <Stack sx={{ width: '85%', color: 'grey.500' }}>
      <LinearProgress color="inherit"/>
    </Stack>
  )
  if (error) return (<div className={error} >Data acquisition failed.</div>)
  if (data) return (
    <Paper sx={{ width: "85%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: "100vh" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell>名前(name)</StyledTableCell>
              <StyledTableCell align="right">メールアドレス(email)</StyledTableCell>
              <StyledTableCell align="right">役割(role)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell component="th" scope="row">
                  {user.name}
                </StyledTableCell>
                <StyledTableCell align="right">{user.email}</StyledTableCell>
                {user.isAdmin ? <StyledTableCell align="right">管理者</StyledTableCell> : <StyledTableCell align="right">メンバー</StyledTableCell>}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
  }
