interface ChatProps {
    avatar: string;
    name: string;
}

const ChatItem = ({ avatar, name }: ChatProps) => {
    return (
        <div className="cursor-pointer flex items-center gap-2 w-full pl-2.5 py-2 transition-all hover:bg-(--btn-hover)">
            <img src={avatar} alt="avatar" className="rounded-[100%] border border-black h-10"/>
            <h1 className="text-lg w-fit h-fit">{name}</h1>
        </div>
    )
}

export default ChatItem