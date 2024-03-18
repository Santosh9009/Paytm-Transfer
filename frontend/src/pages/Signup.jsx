import Button from "../components/Button"
import Header from "../components/Header"
import Inputbox from "../components/Inputbox"
import Subheading from "../components/Subheading"
import Warning from "../components/Warning"

const Signup = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col gap-5 w-96 text-center shadow-md p-5 rounded-lg ">
      <Header heading={'Sign up'} />
      <Subheading Subheading={'Enter your information to create an account'} />
      <Inputbox label={'First Name'} placeholder={'John'}/>
      <Inputbox label={'Last Name'} placeholder={'Doe'}/>
      <Inputbox label={'Email'} placeholder={'jogndoe@gmail.com'}/>
      <Inputbox label={'Password'} placeholder={'Jogn@123'}/>
      <Button title={'Sign up'}/>
      <Warning text1={'Already have an account?'} text2={'Sign in'} to={'/signin'} />
        </div>
      </div>
  )
}

export default Signup