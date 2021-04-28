import {ChatEngine} from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed.jsx';

const App = () =>{
    return (
        <ChatEngine  // add probs
            height = "140vh"
            projectID = "8d6ff8b4-65c7-4232-b369-bd4c61e03f4a"
            userName =  "sweyome"
            userSecret = "Tsinat20!"
            renderChatFeed = {(ChatAppProps) => <ChatFeed {... ChatAppProps} />}
        />
    );
}

export default App;