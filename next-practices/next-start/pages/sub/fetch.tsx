import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Fetch() {
  const [user, setUser] = useState({ name: null });
  useEffect(() => {
    fetch(API_URL + "api/hello")
      .then((type) => type.json())
      .then((result) => {
        console.log(result);
        setUser(result);
      });
  }, []);
  return (
    <>
      <h1>/pages/sub/fetch.tsx</h1>
      <p>{user.name}</p>
      <a href="/">/pages/index.tsx</a>
    </>
  );
}
