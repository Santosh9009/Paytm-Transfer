import Appbar from "../components/Appbar"
import Balance from "../components/Balance"
import Users from "../components/Users"

const Dashboard = () => {
  return (
    <div className="w-full">
      <Appbar/>
      <div className="w-full px-8">
      <Balance amount={'5,000'}/>
      <Users />
      </div>
    </div>
  )
}

export default Dashboard