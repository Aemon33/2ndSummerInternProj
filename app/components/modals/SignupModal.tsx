'use client'


import Modal from "./Modal"
import { useState } from "react"
import {useRouter} from "next/navigation";
import useSignupModal from "@/app/hooks/useSignupModal"
import CustomButton from "../forms/CustomButton"
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/action";



const  SignupModal = () => {
    // variables
    const router = useRouter()
    const SignupModal = useSignupModal()
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [password2,setPassword2] = useState('')
    const [errors, setErrors]  = useState<string[]>([])

    // Submit functionality

    const submitSignup = async ()=> {
        const formData  = {
            email : email,
            password1 : password,
            password2: password2,
        }
        const response = await apiService.postWithoutToken('/api/auth/register/',JSON.stringify(formData) )
        if(response.access){
            handleLogin(response.user.pk,response.access,response.refresh)


            SignupModal.close()
            router.push('/')
        }else {
            const tmpErrors:string[] = Object.values(response).map((error:any)=>{
                return error;
            })
            setErrors(tmpErrors);
        }
        
    }

        const content =
            <>
        <form action={submitSignup}  className="space-y-4">

            <input onChange={(e)=>setEmail(e.target.value)} placeholder="you e-mail address" type="email" className="w-full px-4 h-[54px] border border-gray-100 rounded-xl "  />
            <input onChange={(e)=>setPassword(e.target.value)} placeholder="you password" type="password" className="w-full px-4 h-[54px] border border-gray-100 rounded-xl "  />
            <input onChange={(e)=>setPassword2(e.target.value)} placeholder="Repeat password" type="password" className="w-full px-4 h-[54px] border border-gray-100 rounded-xl "  />
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
                onClick={submitSignup}
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