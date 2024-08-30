'use client'


import Modal from "./Modal"
import { useState } from "react"
import { useRouter } from "next/navigation"
import useLoginModal from "@/app/hooks/useLoginModal"
import CustomButton from "../forms/CustomButton"
import apiService from "@/app/services/apiService"
import { handleLogin } from "@/app/lib/action"

const  LoginModal = () => {
    const router = useRouter()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const LoginModal = useLoginModal()
    const [errors, setErrors]  = useState<string[]>([])


    const submitLogin = async()=>{
        const formData = {
            email:email,
            password:password
        }
        const response = await apiService.postWithoutToken('/api/auth/login/',JSON.stringify(formData) )
        if(response.access){
            handleLogin(response.user.pk,response.access,response.refresh)


            LoginModal.close()
            router.push('/')
        }else {
           
            setErrors(response.non_field_errors);
        }
        

    }

        const content =
            <>
        <form action={submitLogin} className="space-y-4">

            <input onChange={(e)=>setEmail(e.target.value)}  placeholder="you e-mail address" type="email" className="w-full px-4 h-[54px] border border-gray-100 rounded-xl "  />
            <input onChange={(e)=>setPassword(e.target.value)}  placeholder="you password" type="password" className="w-full px-4 h-[54px] border border-gray-100 rounded-xl "  />
            {errors.map((error, index)=>{

            
                    return  (
                        <div
                        key={`error_${index}`}
                        className="p-5 bg-rentilee  text-white rounded-xl opacity-80" >
                        {error}
                        </div>
                    )


                    })}


            <CustomButton 
                label="Submit"
                onClick={submitLogin}
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