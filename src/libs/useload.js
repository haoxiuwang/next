import { useEffect, useRef, useState } from "react";
import loadDB from "../../../audiobook/src/libs/loaddb";
import loadStorage from "../../../audiobook/src/libs/loadstorage";

export default function useLoad() {
    const [ctx] = useState({})
    const [_,refresh] = useState(false)
    ctx.refresh = ()=>refresh(a=>!a)
    useEffect(()=>{
        const load = async ()=>{
            // loadDB(ctx) //use after modifying
            // loadStorage(ctx) //use after modifying
            ctx.init = true
            ctx.refresh()
        }
        load()
    },[])
    return ctx
}