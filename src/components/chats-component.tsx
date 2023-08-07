import { FunctionComponent } from "react";

const ChatsComponent: FunctionComponent = () => {
  return (
    <div className="absolute top-[140px] left-[1080px] w-80 h-[369px] text-left text-lg text-darkslategray font-avenir">
      <div className="absolute top-[0px] left-[0px] w-24 h-[25px] flex flex-row items-center justify-start gap-[10px]">
        <div className="relative tracking-[0.02em] font-extrabold">Chats</div>
        <div className="rounded-xl bg-azure-200 w-[37px] h-6 flex flex-col py-0.5 px-2.5 box-border items-start justify-end text-center text-smi text-lightseagreen-100">
          <div className="relative tracking-[0.02em]">14</div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[49px] left-[0px] w-80 h-14">
        <div className="absolute top-[0px] left-[0px] rounded-21xl bg-lavender-100 w-14 h-14" />
        <div className="absolute top-[6px] left-[72px] w-48 h-[45px] flex flex-col items-start justify-start gap-[4px]">
          <div className="relative text-base tracking-[0.02em] font-extrabold font-avenir text-darkslategray text-left">
            Ironmen
          </div>
          <div className="relative text-sm tracking-[0.02em] font-medium font-avenir text-lightslategray text-left">
            When will the event be held?
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-0.5 px-[7.5px] bg-tomato absolute top-[16px] left-[296px] rounded-xl w-6 h-6 flex flex-col box-border items-start justify-end">
          <div className="relative text-smi tracking-[0.02em] font-avenir text-white text-center">
            1
          </div>
        </button>
      </button>
      <img
        className="absolute top-[120.75px] left-[72px] w-[248px] h-[0.5px]"
        alt=""
        src="/vector-13.svg"
      />
      <img
        className="absolute top-[208.75px] left-[72px] w-[248px] h-[0.5px]"
        alt=""
        src="/vector-121.svg"
      />
      <img
        className="absolute top-[296.75px] left-[72px] w-[248px] h-[0.5px]"
        alt=""
        src="/vector-131.svg"
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[137px] left-[0px] w-[249px] h-14 flex flex-row items-center justify-start gap-[16px]">
        <div className="relative rounded-21xl bg-mistyrose-200 w-14 h-14" />
        <div className="w-[177px] h-[45px] flex flex-col items-start justify-start gap-[4px]">
          <div className="relative text-base tracking-[0.02em] font-extrabold font-avenir text-darkslategray text-left">
            Ariana Grande
          </div>
          <div className="relative text-sm tracking-[0.02em] font-avenir text-lightslategray text-left">
            Alright then. See you there
          </div>
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[225px] left-[0px] w-[244px] h-14 flex flex-row items-center justify-start gap-[16px]">
        <div className="relative rounded-21xl bg-lavender-200 w-14 h-14" />
        <div className="w-[172px] h-[45px] flex flex-col items-start justify-start gap-[4px]">
          <div className="relative text-base tracking-[0.02em] font-extrabold font-avenir text-darkslategray text-left">
            Ariana Grande
          </div>
          <div className="relative text-sm tracking-[0.02em] font-avenir text-lightslategray text-left">
            Come on join to my party!
          </div>
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[313px] left-[0px] w-[241px] h-14 flex flex-row items-center justify-start gap-[16px]">
        <div className="relative rounded-21xl bg-mistyrose-200 w-14 h-14" />
        <div className="w-[169px] h-[45px] flex flex-col items-start justify-start gap-[4px]">
          <div className="relative text-base tracking-[0.02em] font-extrabold font-avenir text-darkslategray text-left">
            Ariana Grande
          </div>
          <div className="relative text-sm tracking-[0.02em] font-avenir text-lightslategray text-left">
            After that you can see me
          </div>
        </div>
      </button>
    </div>
  );
};

export default ChatsComponent;
