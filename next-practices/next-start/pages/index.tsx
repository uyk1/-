import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Hello Next.js</h1>
      <ul>
        <li>
          <a href="/sub">/pages/sub/index.tsx</a>
        </li>
        <li>
          <a href="/sub/about">/pages/sub/about.tsx</a>
        </li>
        <li>
          <a href="/sub/1">/pages/sub/[id].tsx</a>
        </li>
        <li>
          <a href="/sub/2">/pages/sub/[id].tsx</a>
        </li>
        <li>
          <a href="/sub/fetch">/pages/sub/fetch.tsx</a>
        </li>
      </ul>
    </div>
  );
}
