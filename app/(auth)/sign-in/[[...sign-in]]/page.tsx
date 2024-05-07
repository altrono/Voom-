import { SignIn } from "@clerk/nextjs";


const SignInPage =() => {
    return (
      <main className="flex justify-center items-center h-screen w-full">
          <SignIn path="/sign-in" />
      </main>
    )
    
  }
  
  export default SignInPage