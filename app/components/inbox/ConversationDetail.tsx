'use client';

import CustomButton from "../forms/CustomButton";

const ConversationDetail = () => {
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
                    className="w-[100px]"
                />
            </div>
        </>
    )
}

export default ConversationDetail;
