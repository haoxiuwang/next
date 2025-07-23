// App.jsx
import React, { useEffect, useState, Suspense } from 'react'
import Link from "../framework/Link.jsx"
//框架代码
import { useRoute } from '../framework/useRoute.js'
import usePage from '../framework/usePage.js'
import useLoad from '../framework/useLoad.js'

export default function App() {
  const path = useRoute()
  const Page = usePage(path)
  const ctx = useLoad()
 
  return (
    <div className='p-8'>  
      <nav className="flex place-items-center place-content-center space-x-4">
        {
          [["/","Home"],["/about","About"],["/blogs","Blogs"],["/blog","Blog"],["/books","Books"]]
          .map(([href,title],i)=>{
              
            return (<Link key={i} className="rounded-full px-8 bg-slate-100" {...{href}}>{title}</Link>)
          })
        }
      </nav>    
     <div className='flex place-items-center place-content-center fixed inset-0 -z-10'>
       <Suspense fallback={<div>Loading...</div>}>
       {Page&&<Page.default {...{ctx}}/>}
      </Suspense>
     </div>
    </div>
  )
}
