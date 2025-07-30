import { useRef, useState,useEffect } from "react"

export default function Index(ctx) {
    const booksRef = useRef(null)
    // const [books,setBooks] = useState(null)
    const [_,a] = useState(false)
    const refresh = ()=>{a(pre=>!pre)}
    useEffect(()=>{
        const request = async()=>{
           const res = await fetch("localhost")
           const _html = await res.text()
           booksRef.current = _html
           console.log("---")
           refresh()
        }
        request()
    },[])
    const books = booksRef.current
    if(!books)return
    return <div>{books}</div>
}