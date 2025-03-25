'use client';

import CustomButton from "../forms/CustomButton";
import { ConversationType } from "@/app/inbox/page";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useEffect } from "react";

interface ConversationDetailProps {
    userId: string;
    token: string;
    conversation: ConversationType;
}

const ConversationDetail: React.FC<ConversationDetailProps> = ({
    userId,
    token,
    conversation
}) => {
    const myUser = conversation.users?.find((user) => user.id != userId)
    const otherUser = conversation.users?.find((user) => user.id != userId)

    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(`ws://127.0.0.1:8000/ws/${conversation.id}/?token=${token}`, {
        share: false,
        shouldReconnect: () => true,
    },
    )

    useEffect(() => {
        console.log('Connection change', readyState);
    }, [readyState])

    return (
        <>
            <div className="max-h-[400px] overflow-auto flex flex-col space-y-4 p-4">
                <div className="w-[75%] py-3 px-4 rounded-xl bg-pink-200 self-start">
                    <p className="font-bold text-gray-600">Billie Eilish</p>
                    <p>Hola Jeny como estas soy tu fan</p>
                </div>

                <div className="w-[75%] py-3 px-4 rounded-xl bg-pink-900 text-white self-end">
                    <p className="font-bold text-gray-300">Jenysita</p>
                    <p>Holi Billie yo soy tu fan mayooorte amo</p>
                </div>
            </div>

            <div className="mt-4 py-4 px-6 flex border border-pink-200 space-x-4 rounded-xl">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full p-2 bg-pink-100 rounded-xl"
                />

                <CustomButton
                    label='Send'
                    onClick={() => console.log('Clicked')}
                    className="w-[60px]"
                />
            </div>
        </>
    )
}

export default ConversationDetail;
