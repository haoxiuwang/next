import { navigate } from "./useRoute";
export default function Link({href,onClick,className,children,...props}) {
    return <button {...{props}} onClick={(e)=>{
        if(onClick)
            if(onClick())return        
        navigate(href)
    }} className={`cursor-pointer ${className}`}>{children}</button>
}