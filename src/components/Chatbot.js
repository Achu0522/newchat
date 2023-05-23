import { Button } from 'bootstrap';
import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import { analyze } from '../utils';

export default function Chatbot() {
    const [messages, setMessages] = useState([
        {
            message: ' Hi, May i know your name ?'
        },

    ]);

    const [text, setText] = useState("");

    const onSend = () => {
        let list = [...messages, { message: text, user: true }];
        if (list.length > 2) {
          const reply = analyze(text);
          list = [...list, { message: reply }];
        } else {
          list = [
                ...list,
                {
                    message: `Hi, ${text}`,
                },
                {
                    message: "How can i help you?",
                },

            ]; 
        }
        setMessages(list)
        setText("")
    };
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center">
                <img
                    src="https://tse2.mm.bing.net/th?id=OIP.hKzqllvBJMsSdBXNuyBy9wHaIY&pid=Api&P=0"
                    alt="logo"
                    height={200}
                    width={200}
                />
                <h2 className='text-primary'>Chatbot</h2>
            </div>
            <div className="chat-message">
                {
                    messages.length > 0 && messages.map((data) => <ChatMessage {...data} />)}

                <div className="d-flex mt-2">
                    <input type="text" className="form-control" value={text} onChange={(e) => setText(e.target.value)} />
                    <button type="primary" className="ms-3" onClick={onSend}>Send</button>
                </div>

            </div>
        </div>

    );
}