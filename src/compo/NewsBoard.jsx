'use client';
import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

function NewsBoard({category,language}) {

 //Another API news : let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;
  

 const [articles , setArticles]= useState([]);

const API_KEY = process.env.NEXT_PUBLIC_API_KEY
 useEffect(()=>{
   
  
   let url = `https://gnews.io/api/v4//top-headlines?category=${category}&lang=${language}&max=10&apikey=${API_KEY}` ;
   fetch(url).then(response => response.json()).then(data => setArticles(data.articles));}, [category,language]);

 
  return (
    <div>
      
      <h1 className="text-center">Latest <span className="badge bg-danger fs-4">News</span></h1>
      {articles.map((art , index )=>{return <NewsItem key={index} title={art.title} desc={art.description} src={art.image} url={art.url}/>})}
    </div>
  )
};

export default NewsBoard
