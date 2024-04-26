"use client"

import React from 'react'
import SignUpForm from '@/components/form/SignUpForm'
import { Button, Grid, Typography } from "@mui/material";
import Link  from 'next/link';

const SignUpPage = () => {
  return (
    <div>
      <Link href="/login">
        <Button color={"primary"}>
          <Typography fontSize={"h3"}>
            ログイン
          </Typography>
        </Button>
      </Link>
      <h1>サインアップ</h1>
      <SignUpForm />
    </div>
  )
}

export default SignUpPage
