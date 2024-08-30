'use client'
import useAddPropertyModal from '@/app/hooks/useAddPropertyModal'
import useLoginModal from '@/app/hooks/useLoginModal';


interface AddPropertyButtonProps{
  userId?:string|null;

}

const  AddPropertyButton: React.FC<AddPropertyButtonProps> = ({
  
  userId

})=> {
  const loginModal = useLoginModal()
  const addPropertyModal = useAddPropertyModal();
  const RentileeYourHome =  () =>{
    if(userId){
      addPropertyModal.open()

    }else {
      loginModal.open();
    }
  }
  return (
    <div 
    onClick={RentileeYourHome}
    className="p-2 text-sm font-semibold rounded-full cursor-pointer hover:bg-gray-200">

        Rentilee you home
    </div>
)
}

export default AddPropertyButton