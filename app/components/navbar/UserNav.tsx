'use client';
import MenuLink from "./MenuLink";
import LoginButton from "../LogoutButton"
import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import useSignupModal from "@/app/hooks/useSignupModal";
import LogoutButton from "../LogoutButton";
import { useRouter } from "next/navigation";

interface UserNavProps {
  userId?:string | null;
}

const  UserNav:React.FC<UserNavProps> = (

  {userId}
) => {
const router = useRouter();
  const LoginModal = useLoginModal();
  const SignupModal = useSignupModal();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className=" bg-red-300  p-2 relative  md:inline-block border  rounded-full cursor-pointer hover:shadow-lg transition">
        <button  
          onClick={()=> setIsOpen(!isOpen)}
        className="flex items-center p-1 "> 
        <svg  className='mr-4'  x="0px" strokeWidth="" y="0px" width="20" height="20" viewBox="0 0 50 50">
        <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
        </svg>
        <svg  fill="#000"  viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>

        </button>
        {isOpen&&(
          <div className=" flex flex-col cursor-pointer w-[220px] absolute  top-[60px] right-0 bg-white-200 border rounded-xl shadow-md " >
            {userId ? (
              <>
              <MenuLink 
                label="My properties"
                onClick={()=>{setIsOpen(false)

                  router.push('/myproperties')
                }}
              />
              <MenuLink 
                label="My favorites"
                onClick={()=>{setIsOpen(false)

                  router.push('/myfavorites')
                }}
              />
              <MenuLink 
                label="My reservations"
                onClick={()=>{setIsOpen(false)

                  router.push('/myreservations')
                }}
              />
              <LogoutButton/>
              </>
            ):(
            <>
            <MenuLink
              label="Log in" 
              onClick={
                ()=>{
                  setIsOpen(false)
                  LoginModal.open()
                }
              }
            />
            <MenuLink
              label="Sign up"
              onClick={
                ()=>{
                  setIsOpen(false)
                  SignupModal.open()
                }
              }            />
              </>) }

             
          </div>
        )}
    </div>
  )
}

export default UserNav