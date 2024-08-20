'use client'


import Modal from "./Modal"
import { useState } from "react"
import useLoginModal from "@/app/hooks/useLoginModal"
import CustomButton from "../forms/CustomButton"

const  LoginModal = () => {
    const LoginModal = useLoginModal()

        const content =
            <>
        <form action="" method="" className="space-y-4">

            <input placeholder="you e-mail address" type="email" className="w-full px-4 h-[54px] border border-gray-100 rounded-xl "  />
            <input placeholder="you password" type="password" className="w-full px-4 h-[54px] border border-gray-100 rounded-xl "  />
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
  isOpen ={LoginModal.isOpen}
  close = {LoginModal.close}
  label =  "log in"
  content = {content}
  />
  )
}

export default LoginModal