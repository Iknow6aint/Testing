import { FunctionComponent } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";

const MenuComponent: FunctionComponent = () => {
  return (
    <div className="absolute top-[0px] left-[0px] bg-white w-60 h-[900px] text-left text-xl text-tomato font-avenir">
      <a className="[text-decoration:none] absolute top-[42px] left-[53px] w-[135px] h-[27px] text-[inherit]">
        <div className="absolute top-[7px] left-[18px] rounded-4xs-4 bg-tomato w-[170px] h-10 hidden" />
        <div className="absolute top-[0px] left-[0px] w-[135px] h-[27px] flex flex-row items-center justify-start gap-[9px]">
          <img className="relative w-[16.71px] h-6" alt="" src="/vector.svg" />
          <div className="relative tracking-[0.02em] font-extrabold">
            Sedboi.euy
          </div>
        </div>
      </a>
      <div className="absolute top-[104px] left-[0px] w-60 h-[428px] text-sm text-lightseagreen-100">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[80px] left-[39px] w-[91px] h-[19px] flex flex-row items-center justify-start gap-[19px]">
          <img
            className="relative w-[17.2px] h-[17.2px]"
            alt=""
            src="/group-224.svg"
          />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm tracking-[0.02em] font-avenir text-lightslategray text-left inline-block">
            Timeline
          </button>
        </button>
        <div className="absolute top-[0px] left-[0px] bg-lightseagreen-200 w-60 h-[50px] flex flex-col py-0 px-10 box-border items-start justify-center">
          <div className="w-[74px] h-[19px] flex flex-row items-center justify-start gap-[19px]">
            <img
              className="relative w-[16.5px] h-[17.5px]"
              alt=""
              src="/group-223.svg"
            />
            <div className="relative tracking-[0.02em] font-extrabold">
              Home
            </div>
          </div>
        </div>
        <input
          className="[border:none] font-avenir text-sm bg-[transparent] absolute top-[129px] left-[38px] w-[111px] h-[19px] flex flex-row items-start justify-start"
          type="text"
          placeholder="Community"
        />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[185px] left-[39px] w-[92px] h-[19px] flex flex-row items-center justify-start gap-[19px] sm:active:animate-[1s_ease_0s_infinite_normal_none_scale-up] sm:active:opacity-[1]">
          <img
            className="relative w-[17.2px] h-[17.2px]"
            alt=""
            src="/group-226.svg"
          />
          <div className="relative text-sm tracking-[0.02em] font-avenir text-lightslategray text-left">
            Discover
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[241px] left-[40px] w-[82px] h-[19px] flex flex-row items-center justify-start gap-[19px]">
          <img
            className="relative w-[15.85px] h-[16.2px]"
            alt=""
            src="/group-227.svg"
          />
          <div className="relative text-sm tracking-[0.02em] font-avenir text-lightslategray text-left">
            Friends
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[297px] left-[40px] w-[100px] h-[19px] flex flex-row items-center justify-start gap-[20px]">
          <FormControlLabel
            className="relative"
            label=""
            labelPlacement="end"
            control={<Checkbox color="primary" size="medium" />}
          />
          <div className="relative text-sm tracking-[0.02em] font-avenir text-lightslategray text-left">
            Bookmark
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[353px] left-[39px] w-[72px] h-[19px] flex flex-row items-center justify-start gap-[19px]">
          <img
            className="relative w-[17.2px] h-[15.42px]"
            alt=""
            src="/group-229.svg"
          />
          <div className="relative text-sm tracking-[0.02em] font-avenir text-lightslategray text-left">
            Event
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[409px] left-[39px] w-[104px] h-[19px] flex flex-row items-center justify-start gap-[19px]">
          <img
            className="relative w-[17.2px] h-[15.13px]"
            alt=""
            src="/group-230.svg"
          />
          <div className="relative text-sm tracking-[0.02em] font-avenir text-lightslategray text-left">
            Discussion
          </div>
        </button>
      </div>
      <img
        className="absolute top-[573.79px] left-[35px] w-[170px] h-[0.42px]"
        alt=""
        src="/vector-1.svg"
      />
      <div className="absolute top-[614px] left-[35px] w-[150px] h-[246px] flex flex-col items-start justify-start gap-[20px] text-base text-darkslategray">
        <div className="relative tracking-[0.02em] font-extrabold">
          Category
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[93px] h-9 flex flex-row items-center justify-start gap-[15px]">
          <img className="relative w-9 h-9" alt="" src="/group-216.svg" />
          <div className="relative text-sm tracking-[0.02em] font-avenir text-lightslategray text-left">
            Sports
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[103px] h-9 flex flex-row items-center justify-start gap-[15px]">
          <img className="relative w-9 h-9" alt="" src="/group-212.svg" />
          <div className="relative text-sm tracking-[0.02em] font-avenir text-lightslategray text-left">
            Gaming
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[89px] h-9 flex flex-row items-center justify-start gap-[15px]">
          <img className="relative w-9 h-9" alt="" src="/group-213.svg" />
          <div className="relative text-sm tracking-[0.02em] font-avenir text-lightslategray text-left">
            Music
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[150px] h-9 flex flex-row items-center justify-start gap-[15px]">
          <img className="relative w-9 h-9" alt="" src="/group-215.svg" />
          <div className="relative text-sm tracking-[0.02em] font-avenir text-lightslategray text-left">{`Tech & Science`}</div>
        </button>
      </div>
    </div>
  );
};

export default MenuComponent;
