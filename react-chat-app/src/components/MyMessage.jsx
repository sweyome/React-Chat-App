const MyMessage = (message) =>{ // takes only one props
    if(message?.attachments?.length>0){ // if our message is image run this 
        return(
            <img 
            src={message.attachments[0].file}
            alt = "message-attachment"
            className="message-image"
            style={{float:'right'}}
            />
        )
    }
    return (
        <div className="message" style={{float:"left", marginRight: "18px", color:"white", backgroundColor:"#3B2A50"}}> 
            {message.text}
        </div>
    )
}

export default MyMessage;