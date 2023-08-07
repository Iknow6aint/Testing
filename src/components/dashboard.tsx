import { FunctionComponent } from "react";
import MenuComponent from "./menu-component";
import FriendsRankComponent from "./friends-rank-component";
import CenterComponent from "./center-component";
import ChatsComponent from "./chats-component";
import ChatBoxComponent from "./chat-box-component";

const DashboardUITemplate1: FunctionComponent = () => {
    return (
        <div className="relative bg-whitesmoke w-[1440px] h-[900px] overflow-hidden text-left text-[24px] text-darkslategray font-avenir">
            <MenuComponent />
            <img
                className="absolute top-[40px] left-[1039.5px] w-px h-[820px]"
                alt=""
                src="/vector-11.svg"
            />
            <FriendsRankComponent />
            <CenterComponent />
            <input
                className="[border:none] font-avenir text-sm bg-white absolute top-[40px] left-[680px] rounded-[50px] w-80 h-[50px] flex flex-row py-4 px-[17px] box-border items-center justify-start"
                type="text"
                placeholder="Search here"
            />
            <div className="absolute top-[40px] left-[280px] w-[238px] h-[60px] flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-extrabold">Hey, Dustin!</div>
                <div className="relative text-sm font-medium text-lightslategray">
                    Welcome back, nice to see you again!
                </div>
            </div>
            <ChatsComponent />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[40px] left-[1236px] w-[164px] h-[50px] flex flex-row items-center justify-start gap-[10px]">
                <img
                    className="relative rounded-[100px] w-[50px] h-[50px] object-cover"
                    alt=""
                    src="/img@2x.png"
                />
                <div className="w-[104px] h-[22px] flex flex-row items-center justify-end gap-[12px]">
                    <div className="relative text-base tracking-[0.02em] font-extrabold font-avenir text-darkslategray text-left">
                        Jamet Roy
                    </div>
                    <img
                        className="relative w-[11.5px] h-[6.5px]"
                        alt=""
                        src="/vector-20.svg"
                    />
                </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[55px] left-[1179.5px] w-[15.16px] h-[19px]">
                <div className="absolute top-[1px] left-[-1.5px] rounded-[5px] bg-darkslateblue-200 w-[18px] h-[18px] hidden" />
                <img
                    className="absolute h-[102.63%] w-[106.6%] top-[0%] right-[-3.3%] bottom-[-2.63%] left-[-3.3%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group-67.svg"
                />
            </button>
            <input
                className="cursor-pointer absolute top-[58.25px] left-[1134px] w-[18px] flex flex-col items-center justify-start"
                type="checkbox"
            />
            <ChatBoxComponent />
        </div>
    );
};

export default DashboardUITemplate1;
