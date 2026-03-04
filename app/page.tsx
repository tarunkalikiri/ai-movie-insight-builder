"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Home(){

const [query,setQuery] = useState("")
const [movie,setMovie] = useState<any>(null)
const [loading,setLoading] = useState(false)

async function searchMovie(){

if(!query){
alert("Enter movie name or IMDb ID")
return
}

setLoading(true)

let url=""

if(query.startsWith("tt")){
url=`/api/movie?id=${query}`
}else{
url=`/api/movie?name=${query}`
}

const res = await fetch(url)
const data = await res.json()

if(data.error){
alert(data.error)
setLoading(false)
return
}

setMovie(data)
setLoading(false)

}

return(

<div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">

{/* Cinematic Background */}

<div
className="absolute inset-0 bg-cover bg-center"
style={{
backgroundImage:
"linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba')"
}}
></div>

{/* Floating particles */}

<div className="particle"></div>
<div className="particle"></div>
<div className="particle"></div>
<div className="particle"></div>
<div className="particle"></div>

{/* Content */}

<div className="relative z-10 flex flex-col items-center px-4">

<h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
🎬 AI Movie Insight Builder
</h1>

{/* Search Box */}

<div className="backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-xl shadow-xl flex gap-3">

<input
className="px-4 py-2 rounded-lg w-[200px] md:w-[280px] text-white placeholder-gray-300 bg-black/40 border border-white/30 outline-none"
placeholder="Search movie (RRR, Matrix)"
value={query}
onChange={(e)=>setQuery(e.target.value)}
/>

<button
onClick={searchMovie}
className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition"
>
Search
</button>

</div>

{loading && (
<p className="mt-6 text-lg">
Loading movie insight...
</p>
)}

{/* Movie Result */}

{movie && (

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.5}}
className="bg-white text-black rounded-xl shadow-2xl max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 p-6 mt-10"
>

{/* Poster */}

<img
src={movie.movie.Poster}
className="rounded-lg w-full md:w-auto"
/>

{/* Movie Details */}

<div className="space-y-4">

<h2 className="text-2xl md:text-3xl font-bold">
{movie.movie.Title}
</h2>

{/* Rating Bar */}

<div>

<p className="font-semibold mb-1">
IMDb Rating ⭐ {movie.movie.imdbRating}
</p>

<div className="w-full bg-gray-300 rounded-full h-3">

<div
className="bg-yellow-400 h-3 rounded-full"
style={{width:`${movie.movie.imdbRating * 10}%`}}
></div>

</div>

</div>

<p>
<strong>Year:</strong> {movie.movie.Year}
</p>

<p>
<strong>Cast:</strong> {movie.movie.Actors}
</p>

<p>
{movie.movie.Plot}
</p>

{/* AI Insight */}

<div className="bg-gray-100 p-4 rounded-lg">

<p className="font-semibold text-lg">
AI Audience Insight
</p>

<p className="mt-2">
{movie.aiSummary}
</p>

<ul className="mt-3 space-y-1 text-sm">

<li>
👍 <strong>What audiences liked:</strong> {movie.likes}
</li>

<li>
👎 <strong>Criticism:</strong> {movie.criticism}
</li>

<li>
🎯 <strong>Verdict:</strong> {movie.verdict}
</li>

</ul>

<p className={`mt-3 font-bold ${
movie.sentiment==="Positive"
? "text-green-600"
: movie.sentiment==="Mixed"
? "text-yellow-600"
: "text-red-600"
}`}>
Sentiment: {movie.sentiment}
</p>

</div>

{/* IMDb Button */}

<a
href={`https://www.imdb.com/title/${movie.movie.imdbID}`}
target="_blank"
className="inline-block bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
>

Open in IMDb

</a>

</div>

</motion.div>

)}

</div>

</div>

)

}