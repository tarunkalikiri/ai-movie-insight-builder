import { NextResponse } from "next/server";

function analyzeSentiment(rating: string){

const score = parseFloat(rating)

if(score >= 7.5){
return{
sentiment:"Positive",
summary:"Audience reviews are largely positive. Viewers appreciate the story and performances.",
likes:"Strong storytelling, engaging action, and memorable performances.",
criticism:"Some viewers feel the runtime is slightly long.",
verdict:"Highly recommended for fans of epic cinema."
}
}

if(score >=5){
return{
sentiment:"Mixed",
summary:"Audience reactions are mixed.",
likes:"Interesting concept and good visuals.",
criticism:"Pacing and screenplay could be stronger.",
verdict:"Worth watching but may not appeal to everyone."
}
}

return{
sentiment:"Negative",
summary:"Audience sentiment is mostly negative.",
likes:"Some performances and visuals stand out.",
criticism:"Weak plot and inconsistent storytelling.",
verdict:"Generally not recommended."
}

}

export async function GET(req:Request){

const { searchParams } = new URL(req.url)

const id = searchParams.get("id")
const name = searchParams.get("name")

let url=""

if(id){
url=`https://www.omdbapi.com/?i=${id}&apikey=${process.env.OMDB_API_KEY}`
}
else if(name){
url=`https://www.omdbapi.com/?t=${name}&apikey=${process.env.OMDB_API_KEY}`
}
else{
return NextResponse.json({error:"Movie not provided"})
}

const response = await fetch(url)
const movie = await response.json()

if(movie.Response==="False"){
return NextResponse.json({error:"Movie not found"})
}

const insight = analyzeSentiment(movie.imdbRating)

return NextResponse.json({
movie,
aiSummary:insight.summary,
likes:insight.likes,
criticism:insight.criticism,
verdict:insight.verdict,
sentiment:insight.sentiment
})

}