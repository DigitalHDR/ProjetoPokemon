'use client'
import React from 'react'
import apiPokemon from '@/app/data/apiPokemon'
import Link from 'next/link'

const ListaDepokemons = () => {
  return (
    <section>
      <div className="flex h-screen mt-20">
        <div className="flex flex-wrap justify-center gap-14 px-3">
          {apiPokemon.map((item) => (
            <Link key={item.id} href={`/infoDoPokemon/${item.id}`}>
              <div   className="h-44 w-72 sm:h-44 sm:w-52 relative border border-cyan-600 flex items-end justify-center transition duration-300 ease-in-out bg-white rounded-lg shadow-xl hover:shadow-2xl cursor-pointer hover:scale-105">
                <div className="absolute bottom-28  rounded-full bg-white w-28 h-28 shadow-2xl items-center justify-center flex">
                  <img className="" src={item.img} alt={item.name} />
                </div>
                <div>
                  <div className="text-center">
                    <p className="text-base">N° {item.id}</p>
                    <p className="text-xl font-semibold">{item.name}</p>

                    <div className="flex justify-center items-center gap-1">
                      <button
                        style={{ backgroundColor: item.typeColor[0] }}
                        className={`text-base px-4 py-1 mb-3 mt-3 rounded-lg`}
                      >
                        {item.type[0]}
                      </button>
                      {item.typeColor.length > 1 && (
                        <button
                          style={{ backgroundColor: item.typeColor[1] }}
                          className={`text-base  px-4 py-1 mb-3 mt-3 rounded-lg`}
                        >
                          {item.type[1]}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ListaDepokemons
