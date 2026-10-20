import { api } from "../config/api";


const API_KEY = import.meta.env.VITE_API_KEY

export const gamesLoader = async ({request}) => {

const url = new URL(request.url)
    console.log(url)

  const search = url.searchParams.get('search') || "" 

  const params={
    key:API_KEY,
  
  }
    if(search){
      params.search=search
    }

const res =await api.get('/games',{params})

  return res.data
}

export const gameDeatilsLoader = async ({params})=>{
try {
    console.log(params)
      
  const res = await api.get(`/games/${params.id}`,{
    params:{
        key:API_KEY
    }
  })

  return res 
} catch (error) {
    
}
}

