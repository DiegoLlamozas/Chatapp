import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced"

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic("4688eb9c-3be9-40f4-a821-6ab2abb55825", 
                                        props.user.username, 
                                        props.user.secret);
    return (
        <div style={{height: "100hv"}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height: "100hv"}}/>
        </div>)
};

export default ChatsPage;