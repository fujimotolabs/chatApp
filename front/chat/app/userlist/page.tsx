"use client"

import useSWR from "swr";

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
  isAdmin: boolean;
};

const fetcher = async (key: string) => {
  return await fetch(key).then((res) => res.json());
}

export default function Home() {
  const {data, error, isLoading} = useSWR<User[]>("http://localhost:3001/users", fetcher)
  if (isLoading) return (<div className={"loading"} >Loading...</div>)
  if (error) return (<div className={error} >Data acquisition failed.</div>)
  if (data) return (
    <main>
      <h1>Users</h1>
      <div>
        {data.map((user) => (
          <div>
            {user.id},{user.name},{user.email},{user.password},{user.isAdmin}
          </div>
        ))}
      </div>
    </main>
  );
  }
