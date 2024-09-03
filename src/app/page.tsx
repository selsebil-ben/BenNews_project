
 'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "@/compo/Navbar";
import NewsBoard from "@/compo/NewsBoard";
import { useState } from "react";





function Home() {

 const [category, setCategory] = useState('general'); 
 const [language, setLanguage] = useState('en');
  return (
 
  <div >
    <Navbar  setCategory={setCategory} setLanguage={setLanguage}/>
    
    <NewsBoard category={category} language={language}/>
  </div>
  
  );
}

export default  Home ;


