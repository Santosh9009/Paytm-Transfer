import { Link } from "react-router-dom"
const Warning = ({text1,text2,to}) => {
  return (
    <div className=" font-medium text-lg">{text1}
      <Link to={to} className="underline text-blue-600 ml-2">{text2}</Link></div>
  )
}

export default Warning;