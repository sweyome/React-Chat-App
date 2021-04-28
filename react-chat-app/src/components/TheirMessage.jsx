const TheirMessage = ({lastMessage, message}) =>{
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.userName !== message.sender.userName;
    // this gave us the boolean result if the user sent the last message 
    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div
                className="message-avatar"
                style={{background: `url(${message?.sender.avatar})`}}                
                />
            )}
            {message?.attachments?.length > 0 // if our message is image run this 
             ?  (
                    <img 
                        src={message.attachments[0].file}
                        alt = "message-attachment"
                        className="message-image"
                        style={{marginLeft: isFirstMessageByUser ? '4px' : '48px'}}
                    />
                ):(
                    <div className="message" style={{float:"left", backgroundColor:"#CABCDC" , marginLeft: isFirstMessageByUser ? '4px' : '48px'}}> 
                    {message.text}
                    </div>
                )
                
            }
        </div>
    )
}

export default TheirMessage;