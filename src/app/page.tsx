// 'use client'
import Link from "next/link";
import { useState } from "react";
import Select from "./component/select/select";

export default function Home() {
  // const [state, setState] = useState("");
  return (
    <div className="flex flex-row justify-around bg-slate-500 ">
      <div>
        <p>
          <Link href="/home">Home</Link>
        </p>
      </div>

      <div>
        <p>
          <Link href="/gallary">Gallary</Link>
        </p> 
      </div> 

      <div>
        <p>
          <Link href="/about">About</Link>
        </p>
      </div>
    </div>
  );
}
