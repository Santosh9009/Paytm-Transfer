import Button from "../components/Button"
import Header from "../components/Header"
import Inputbox from "../components/Inputbox"
import Subheading from "../components/Subheading"
import Warning from "../components/Warning"
const Signin = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
           <div className="flex flex-col gap-5 w-96 text-center shadow-md p-5 rounded-lg">
      <Header heading={'Sign in'} />
      <Subheading Subheading={'Enter your credentials to access your account'} />
      <Inputbox label={'Email'} placeholder={'jogndoe@gmail.com'}/>
      <Inputbox label={'Password'} placeholder={''}/>
      <Button title={'Sign in'}/>
      <Warning text1={`Don't have an account?`} text2={'Sign Up'} to={'/signup'} />
        </div>
      </div>
  )
}

export default Signin