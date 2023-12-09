/* eslint-disable react/prop-types */
import appointment from "../../public/appointment.png";
import action from "../../public/Action.png";
import action1 from "../../public/Action (1).png";
import Audio from "../../public/Audio.png";
import Frame1 from "../../public/Frame 1 (1).png";
import Social from "../../public/Social.png";
import { IoIosArrowForward } from "react-icons/io";

const MiniCard = () => {
  const details = [
    {
      index: 1,
      ImageUrl: appointment,
      Heading: "My Appointment",
      para: "Show your saved appointment.",
    },
    {
      index: 2,
      ImageUrl: Frame1,
      Heading: "My Clients",
      para: "Show your clients.",
    },
    {
      index: 3,
      ImageUrl: Audio,
      Heading: "Subscription Setting",
      para: "Manage your price.",
    },
    {
      index: 4,
      ImageUrl: action,
      Heading: "Security Access",
      para: "Show your saved appointment.",
    },
    {
      index: 5,
      ImageUrl: Social,
      Heading: "Notification Settings",
      para: "Change yout notification settings.",
    },
    {
      index: 6,
      ImageUrl: action1,
      Heading: "Payment Settings",
      para: "Change your payment settings.",
    },
  ];

  return (
    <>
      {details.map((item, index) => (
        <div
          key={index}
          className="h-[81px] mt-[2px] w-[370px] flex items-center ml-8 rounded-md hover:bg-[#F6F9FB]"
        >
          {/* logo */}
          <div>
            <img
              className="ml-3"
              src={item.ImageUrl}
              height="24px"
              width="24px"
              alt="name"
            />
          </div>

          {/* text */}
          <div className="flex flex-col ml-5  w-[270px]">
            <p className="text-base text-[#333333] font-[500]">
              {item.Heading}
            </p>
            <p className="text-sm font-medium text-[#999999]">{item.para}</p>
          </div>

          <div className=" ml-3 flex justify-end items-center">
            <div className="">
              <IoIosArrowForward size={14} className="text-[#999999]" />
            </div>
          </div>
        </div>
      ))}
      <div className="ml-9 text-[#E74D3D] font-medium mt-3 cursor-pointer">
        Logout
      </div>
    </>
  );
};

export default MiniCard;
