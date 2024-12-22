// Base URL: 
// https://jsonplaceholder.typicode.com.
// Goto https://jsonplaceholder.typicode.com/.
// Goto Resources section and choose any route you want.
// Fetch the ALL API data in server component.
// Fetch single data by id in Dynamic Route.

import Link from "next/link";
export default async function Home() {
  const url = await fetch("https://jsonplaceholder.typicode.com/todos");
  const res = await url.json();
  // console.log(res);
    return (
    <main>
      <h1 className="text-7xl font-bold text-center p-10">Using JSON Placeholder</h1>

      {res.map((obj: any) => (
        <div key={obj.id}>
          <Link href={`${obj.id}`}>
            <h2>{obj.id} &nbsp; &nbsp; {obj.title}</h2>
          </Link>
        </div>
      ))}
    </main>
  );
}

