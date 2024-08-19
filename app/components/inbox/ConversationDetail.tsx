'use client';
import CustomButton from "../forms/CustomButton"

function ConversationDetail() {

   

  return (
    <>
    <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
        <div className="w-[80%] rounded-xl bg-gray-200 py-4 px-6">
            <p className="font-bold text-gray-500">
                Jon Doe
            </p>
            <p>la via es muy buena senor alfonso</p>
        </div>
        <div className="w-[80%] ml-[20%] rounded-xl bg-blue-200 py-4 px-6">
            <p className="font-bold text-gray-500">
                Code with me 
            </p>
            <p>la via es muy buena senor alfonso</p>
        </div>
    </div>
    <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
        <input type="text" placeholder="Type you message..." className="w-full p-2 bg-gray-200 rounded-xl " />
        <CustomButton
             label="send"
             onClick={()=>{alert('hello')}}
             className="w-[100px]"
        />

    </div>
    </>
  )
}

export default ConversationDetail