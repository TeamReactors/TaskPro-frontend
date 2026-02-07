import { Link } from "react-router-dom";
import logo from "../assets/img/Image.jpg";
import logo1 from "../assets/img/logo.jpg";

const WelcomePage = () => {
  return (
    <div className="relative top-20">
          <img className=" m-auto" width={162} height={162} src={logo} alt="" />
          <img className="my-[24px] m-auto" src={logo1} width={222} height={60} alt="" />
          <p className="text-center my-10 m-auto w-[43%]">
              Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!
          </p>
          <Link className="block text-center m-auto  px-[130px] py-[14px] rounded-lg bg-[#161616] w-[25%] text-white" to="/auth/register">Registration</Link>
          <Link className="block text-center m-2" to="/auth/login">Log In</Link>
    </div>
  )
}

export default WelcomePage
