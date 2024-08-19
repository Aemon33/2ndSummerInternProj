interface CustomButtonProps{
    label: string;
    onClick:()=>void;
    className?:string;
}

const  CustomButton: React.FC<CustomButtonProps> = ({className, label, onClick})=> {
  return (
    <div onClick={onClick} className={`w-full py-4  text-center bg-rentilee hover:bg-rentilee-dark text-white rounded-xl transition cursor-pointer ${className}`}>
         {label}
         
    </div>

   
  )
}

export default CustomButton