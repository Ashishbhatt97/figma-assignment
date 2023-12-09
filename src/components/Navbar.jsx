import social from "../../public/Social (1).png";
import Navigation from "../../public/Navigation.png";
import logo from "../../public/group 889.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import avatar from "../../public/avatar.png";
const Navbar = () => {
  return (
    <div className="bg-white w-full h-[89px]  text-black flex ">
      <div id="logo" className="w-[500px] cursor-pointer  items-center flex pl-14">
        <img src={logo} height="15px" width={"150px"} alt="logo" />
      </div>

      <div
        id="logo"
        className=" flex items-center justify-center p-5 w-[660px]"
      >
        <div className="relative w-[400px] h-[50px] rounded-xl justify-center bg-[#F6F9FB] flex items-center ">
          <div className="ml-3 absolute left-2">
            <FaArrowLeftLong size={18} className="" />
          </div>

          <h3 className="text-center font-bold">Settings</h3>
        </div>
      </div>

      <div
        id="avatar"
        className=" flex items-center p-5 justify-between  w-[400px]"
      >
        <div className="w-[160px] flex items-center gap-3">
          <div className="h-[46px] w-[46px] cursor-pointer  rounded-xl">
            <img src={avatar} width={"46px"} alt="" />
          </div>
          <h3 className="font-bold cursor-pointer">Yondu</h3>
        </div>
        <div className="flex gap-2">
          <div className="h-[57px] w-[57px] flex items-center justify-center cursor-pointer bg-[#F6F9FB] rounded-full">
            <img src={social} width={"24px"} alt=""></img>
          </div>
          <div className="h-[57px] w-[57px] flex items-center justify-center cursor-pointer bg-[#F6F9FB] rounded-full">
            <img src={Navigation} width={"24px"} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
