import Link from "next/link";


export default function Home() {



  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
     
      
       <h1> Sign in SignUp testin purpose </h1>
       <Link href="/signUp">Sign Up</Link>
       <Link href="/signIn">Sign In</Link>
       
     
    </div>
  );
}
