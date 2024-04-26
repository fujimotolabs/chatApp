"use client"

import React from 'react'
import LoginForm from '@/components/form/LoginForm'
import { Button, Grid, Typography } from "@mui/material";
import Link  from 'next/link';


const LoginPage = () => {
  return (
    <div>
      <Link href="/signup">
        <Button color={"primary"}>
          <Typography fontSize={"h3"}>
            新規登録
          </Typography>
        </Button>
      </Link>
      <h1>ログイン</h1>
      <LoginForm />
    </div>
  )
}

export default LoginPage