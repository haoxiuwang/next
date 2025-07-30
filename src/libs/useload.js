import { useEffect, useRef, useState } from "react";

export default function useLoad() {
    const [ctx] = useState({})
    const [_,refresh] = useState(false)
    ctx.refresh = ()=>refresh(a=>!a)
    useEffect(()=>{
        const load = async ()=>{


            ctx.init = true
            ctx.refresh()
        }
        load()
    },[])
    return ctx
}