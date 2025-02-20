import Link from "next/link";


export default function Home() {



  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to the App</h1>
      <div className="space-y-4">
       <h1>Home</h1>
       <p>Testing deply</p>
       <li><Link href="/signIn">Sign In</Link> </li>
       <li><Link href="/signUp">Sign Up</Link></li>
      </div>
    </div>
  );
}
