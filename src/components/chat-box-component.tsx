import { FunctionComponent } from "react";

const ChatBoxComponent: FunctionComponent = () => {
  return (
    <a className="[text-decoration:none] absolute top-[549px] left-[1080px] rounded-mini bg-white w-80 h-[311px] text-left text-smi text-white font-avenir">
      <img
        className="absolute top-[0px] left-[0px] w-80 h-[54px]"
        alt=""
        src="/rectangle-30.svg"
      />
      <div className="absolute top-[16px] left-[24px] w-[272px] h-[22px] text-base">
        <div className="absolute top-[0px] left-[0px] tracking-[0.02em] font-extrabold">
          Ironmen
        </div>
        <div className="absolute top-[0px] left-[0px] tracking-[0.02em] font-extrabold">
          Ironmen
        </div>
        <img
          className="absolute top-[4.25px] left-[259.25px] w-[13.5px] h-[13.5px]"
          alt=""
          src="/group-32.svg"
        />
      </div>
      <div className="absolute top-[131px] left-[24px] w-[263px] h-[38px] flex flex-row items-center justify-start gap-[10px] text-mediumturquoise">
        <div className="relative w-[197px] h-[38px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-3xs w-[197px] h-[38px]"
            alt=""
            src="/rectangle-28.svg"
          />
          <div className="absolute top-[10px] left-[10px] tracking-[0.02em]">
            When will the event be held?
          </div>
        </div>
        <div className="relative tracking-[0.02em] text-lightslategray">
          10:22 am
        </div>
      </div>
      <div className="absolute top-[185px] left-[92px] w-[204px] h-[38px] flex flex-row items-end justify-start gap-[10px] text-right text-lightslategray">
        <div className="relative tracking-[0.02em]">10:24 am</div>
        <div className="relative w-[138px] h-[38px] text-white">
          <img
            className="absolute top-[0px] left-[0px] rounded-3xs w-[138px] h-[38px]"
            alt=""
            src="/rectangle-281.svg"
          />
          <div className="absolute top-[10px] left-[10px] tracking-[0.02em]">
            Tommorow at 4 pm
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-0.5 px-0 bg-darkslateblue-100 absolute top-[70px] left-[126px] rounded-xl w-[68px] h-6 flex flex-col box-border items-center justify-end">
        <div className="relative text-smi tracking-[0.02em] font-avenir text-white text-center">
          Today
        </div>
      </button>
      <textarea
        className="[border:none] bg-[transparent] font-avenir text-xs absolute top-[247px] left-[24px] w-[272px] h-10 flex flex-row items-center justify-start"
        placeholder="Type here..."
      />
    </a>
  );
};

export default ChatBoxComponent;
