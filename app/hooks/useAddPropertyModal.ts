import {create} from "zustand";


interface AppPropertyModalStore {
    isOpen:boolean;
    open: ()=> void;
    close:()=> void;
}

const useAddPropertyModal = create<AppPropertyModalStore>((set)=>({
    isOpen:false,
    open:()=>set({isOpen:true}),
    close:()=>set({isOpen:false})
}))

export default useAddPropertyModal;