const TheirMessage = ({lastMessage, message}) =>{
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.userName !== message.sender.userName
    return (
        <div>
            Their Message
        </div>
    )
}

export default TheirMessage;