import { TextAlignJustify } from "lucide-react";
import ChatItem from "@/components/sidebar/ChatItem";

const SideBar = () => {

    return (
        <div className="h-screen bg-gray-900 w-60 py-5">
            <TextAlignJustify className="ml-2.5 cursor-pointer h-8 w-auto p-1 rounded-[10px] hover:bg-gray-700 transition-all"/>
            <h1 className="my-5 ml-5">Cuộc trò chuyện</h1>
            <ChatItem avatar="https://i.pinimg.com/originals/05/52/5c/05525c120abb931a6df250f2e3ab03be.jpg" name="Eru Chitanda"/>
        </div>
    )
}

export default SideBar