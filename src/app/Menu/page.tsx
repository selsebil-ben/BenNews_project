'use client';

import Link from "next/link";
import styles from "./page.module.css";

import { useEffect, useRef, useState } from "react";

function Menu(){
let resp = false  ;
const [count , setCount]= useState(0);
const myref = useRef<HTMLInputElement>(null);
resp = (count === 3) && true ;
useEffect (()=>{alert("count")}, [resp])
//alert("count");
const handleSEcondClick = ()=>{
    if (myref.current){
        myref.current.focus();}
    }

let content = myref.current?.value;
const handleChange = (e : any)=>{
    content= e.target.value ;

}
return(
<>
<div >
    <h1 >
        Choose what you want 
    </h1>
    <button onClick={()=>setCount(count +1)}>Add ce menu</button>
    <h1>You added {count} menu</h1>
</div>
<div >
    <button onClick={handleSEcondClick}>Click here to whrite a comment</button>
    <input ref={myref} onChange={handleChange}/>
    <h1> your comment is {content}</h1>
</div>
<Link href="/"> Go back to the Home page</Link>


</>

);
}

export default Menu ;

