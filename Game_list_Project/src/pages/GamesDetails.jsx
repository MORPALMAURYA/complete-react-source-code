import React, { useContext } from 'react'
import { useLoaderData, useParams } from 'react-router'
import { GamesDataContext } from '../context/GamesContext'


const GamesDetails = () => {
  
    const { data }= useLoaderData()
    
   const {addToFav,favourite} =   useContext(GamesDataContext)
  
    
  return (
   <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display">
   
      {/* HERO */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="relative rounded-2xl overflow-hidden aspect-[21/9] mb-12">
          <img
            src={data.background_image
}
            alt="game"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

          <div className="absolute bottom-0 p-8 text-white">
            <h1 className="text-4xl md:text-6xl font-black">
              {data.name}
            </h1>
            <p className="text-slate-300 mt-2">
              CD Projekt Red • Dec 10, 2020
            </p>

            <div className="flex gap-4 mt-4">
              <button className="bg-primary px-6 py-3 rounded-xl">
                Buy Now
              </button>
              <button onClick={()=>addToFav(data)} className="border px-6 py-3 rounded-xl">
                Add to Favorites
              </button>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* ABOUT */}
            <section>
              <h2 className="text-xl font-bold mb-4">About the Game</h2>
              <p className="text-slate-400">

                {data.description_raw}
              </p>
            </section>

           

            {/* MEDIA */}
            <section>
              <h2 className="text-xl font-bold mb-4">Media</h2>
              <div className="grid grid-cols-2 gap-4">
                <img className="rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs219nkxpn_xE_ErEwP6hNNwko4pk2hwcux9BgaPdzwR_fiM81wnGQuernGjQh5K0dxkYRKKMb6v_DFNITCzoQhg0Yf9bqfUoJ2frw5hZm7JSJvmhhALrGYRbpgtSTyhVWALM3ILDxX3XV65MKsaVG_kju1nB6ihs0GZDcLNCEcVY7IjhniNqglLniHxc5F1-l5qx8UIKWQX6hE1epKjo1iRHuSy4ulQf7yqz_G9_X7mrkq8L_fma51859_ch-GfJ2Wu3k51stxpA" />
                <img className="rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK4JhvPyAvMGavxCNy_HrdD6zzWgsCNDD6sWssW0olUZjXraGkA660qnqYcuGTNwS2AMiE4ypkWgjHqUPIZpnHCYzPZkfDPRcZJEyDbsJLAB_sELDaJDLtkkQhe3DNlNaGjsj6n1tP-gp69j9HnXyGwlyhulj8uWddMfse_zWhkyFLEIG8fgq00BtuI2HwOHOQS89VFpZFWilz1nCZLzO0ng_lIxCAlKPber_vT13Izh8bNMhZHRi5jFVI3dg5DXZlgNXdNM9v2LA" />
              </div>
            </section>
          </div>

          {/* RIGHT */}
          <div className="space-y-8">
            <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-xl">
              <h3 className="font-bold mb-4">Player Reviews</h3>
              <p className="text-4xl text-primary font-bold">4.9</p>
            </div>

            <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-xl">
              <h3 className="font-bold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["RPG", "Sci-fi", "Open World"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-200 rounded-lg text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default GamesDetails