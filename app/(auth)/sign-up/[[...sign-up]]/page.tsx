import { SignUp } from "@clerk/nextjs";

const SignUpPage =() => {
  return (
    <main className="flex justify-center items-center h-screen w-full">
        <SignUp path="/sign-up" />
    </main>
  )
  
}

export default SignUpPage