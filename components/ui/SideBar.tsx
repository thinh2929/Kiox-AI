import { TextAlignJustify, Settings } from "lucide-react";
import ChatItem from "@/components/sidebar/ChatItem";
import Setting from "@/components/sidebar/Setting";

const SideBar = ({ theme, setTheme }: any) => {

    return (
        <div className="bg-(--side-bar) text-(--text-color) h-screen w-60 py-5 relative">
            <TextAlignJustify className="ml-2.5 cursor-pointer h-8 w-auto p-1 rounded-[10px] hover:bg-(--btn-hover) transition-all"/>
            <h1 className="my-5 ml-5">Cuộc trò chuyện</h1>
            <ChatItem avatar="https://i.pinimg.com/originals/05/52/5c/05525c120abb931a6df250f2e3ab03be.jpg" name="Eru Chitanda"/>

            <Settings className="absolute bottom-5 right-5 h-8 w-auto"/>
            <Setting theme={theme} setTheme={setTheme} />
        </div>
    )
}

export default SideBar