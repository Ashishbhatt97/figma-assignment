const MiniCardR = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="mt-5">
        <h1 className="font-bold">Subscription Setting</h1>
      </div>

      <div className="w-[295px] h-[66px] mt-6 flex text-[44px] font-semibold items-center justify-center text-[#A61B1B] leading-[66px]">
        $25
      </div>

      <div className="flex justify-center h-[360px] w-[436px] text-center ">
        <div className="flex">
          <h4 className="text-black">weekly</h4>
          <h4 className="text-[#999999] ml-1">&#183; 2 appointments</h4>
        </div>
      </div>

      <div className="w-[366px] h-[44px] rounded-lg cursor-pointer text-white bg-[#A61B1B] flex items-center justify-center">
        <p className="text-sm text-semibold  ">Edit Price</p>
      </div>
    </div>
  );
};

export default MiniCardR;
