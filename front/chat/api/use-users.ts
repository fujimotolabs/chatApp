import { NextResponse } from "next/server";
import useSWR from "swr";
import axios from "axios";

type users = {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
  isAdmin: boolean;
};

export async function Get() {
  await axios
    .get("http://api:3000/users")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}

Get();
