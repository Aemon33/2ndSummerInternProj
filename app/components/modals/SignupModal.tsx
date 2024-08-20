'use client'


import Modal from "./Modal"
import { useState } from "react"
import useSignupModal from "@/app/hooks/useSignupModal"
import CustomButton from "../forms/CustomButton"

const  SignupModal = () => {
    const SignupModal = useSignupModal()

        const content =
            <>
        <form action="" method="" className="space-y-4">

            <input placeholder="you e-mail address" type="email" className="w-full px-4 h-[54px] border border-gray-100 rounded-xl "  />
            <input placeholder="you password" type="password" className="w-full px-4 h-[54px] border border-gray-100 rounded-xl "  />
            <input placeholder="Repeat password" type="password" className="w-full px-4 h-[54px] border border-gray-100 rounded-xl "  />
            <div className="p-5 bg-rentilee text-white rounded-xl opacity-80" >
                The error message
            </div>

            <CustomButton 
                label="Submit"
                onClick={()=>{alert('ya')}}
            />
        </form>
            </>


  return (
  <Modal
  isOpen ={SignupModal.isOpen}
  close = {SignupModal.close}
  label =  "Sign up"
  content = {content}
  />
  )
}

export default SignupModal