import MiniCard from "./MiniCard";
import MiniCardR from "./MiniCardR";

const Card = () => {
  return (
    <div className="w-full h-[89vh] bg-slate-100 flex justify-center items-center  ">
      <div className="w-[880px] h-[580px] flex border-2 bg-white rounded-2xl ">
        <div className="w-[450px] max-h-full border-[#DEDEDE] border-r-[1px] p-3">
          <MiniCard />
        </div>
        <div className="w-[590px] max-h-full flex flex-col items-center ">
          <MiniCardR />
        </div>
      </div>
    </div>
  );
};

export default Card;
