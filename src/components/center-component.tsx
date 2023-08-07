import { FunctionComponent } from "react";

const CenterComponent: FunctionComponent = () => {
  return (
    <div className="absolute top-[140px] left-[280px] bg-white w-[720px] h-[300px] flex flex-row items-center justify-start gap-[21px]">
      <button className="cursor-pointer [border:none] p-0 bg-white relative rounded-mini w-[226px] h-[300px]">
        <img
          className="absolute top-[0px] left-[0px] w-[226px] h-[205px]"
          alt=""
          src="/rectangle-7.svg"
        />
        <img
          className="absolute h-[52%] w-[71%] top-[9%] right-[14.4%] bottom-[39%] left-[14.6%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-144.svg"
        />
        <div className="absolute top-[225px] left-[28px] w-[170px] h-[51px] flex flex-col items-center justify-center gap-[10px]">
          <div className="relative text-base tracking-[0.02em] font-extrabold font-avenir text-darkslategray text-center">
            Real Wild Cyclist
          </div>
          <div className="relative text-sm tracking-[0.02em] font-avenir text-lightslategray text-center">
            We are the wildest cyclist.
          </div>
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-white relative rounded-mini w-[226px] h-[300px]">
        <img
          className="absolute top-[0px] left-[0px] w-[226px] h-[205px]"
          alt=""
          src="/rectangle-7.svg"
        />
        <img
          className="absolute h-[53.33%] w-[51.99%] top-[7.67%] right-[24.11%] bottom-[39%] left-[23.89%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-126.svg"
        />
        <div className="absolute top-[225px] left-[28px] w-[171px] h-[51px] flex flex-col items-center justify-center gap-[10px]">
          <div className="relative text-base tracking-[0.02em] font-extrabold font-avenir text-darkslategray text-center">
            Yoga Forces
          </div>
          <div className="relative text-sm tracking-[0.02em] font-avenir text-lightslategray text-center">
            Welcome to the biggest...
          </div>
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-white relative rounded-mini w-[226px] h-[300px]">
        <img
          className="absolute top-[0px] left-[0px] w-[226px] h-[205px]"
          alt=""
          src="/rectangle-7.svg"
        />
        <img
          className="absolute h-3/6 w-[63.54%] top-[11%] right-[18.32%] bottom-[39%] left-[18.14%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-127.svg"
        />
        <div className="absolute top-[225px] left-[28px] w-[171px] h-[51px] flex flex-col items-center justify-center gap-[10px]">
          <div className="relative text-base tracking-[0.02em] font-extrabold font-avenir text-darkslategray text-center">
            Skater Boys
          </div>
          <div className="relative text-sm tracking-[0.02em] font-avenir text-lightslategray text-center">
            The best states of skaters.
          </div>
        </div>
      </button>
    </div>
  );
};

export default CenterComponent;
