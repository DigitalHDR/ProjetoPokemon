import React from 'react'
import { FcApproval } from 'react-icons/fc'

const GrupoAtualDePokemons = () => {
  return (
    <div className="text-xl md:text-2xl font-medium px-5 mt-10 w-full  ">
      <div className="lg:w-3/5 m-auto">
        <span>Grupo atual de pokemons</span>
        <hr className="border-2" />
      </div>
      <div className="flex flex-col items-center sm:flex-col sm:justify-center sm:items-center md:justify-between md:flex-row md:flex-wrap mt-3">
        <div className="flex justify-center items-center mt-5 bg-blue-500 w-[30rem] md:w-[18rem] rounded-lg py-2 shadow-lg shadow-slate-950 hover:shadow-slate-700 transition-shadow duration-300 cursor-pointer">
          <div className="mr-5">
            <img width={60} src="/bulbasaur.gif" alt="" />
          </div>
          <div>
            <div className="flex flex-col items-center px-10 text-center">
              <p>GIRATINA</p>
              <div className="ml-1">
                <hr className="w-24 border-2" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <FcApproval /> <p className="ml-2">Planta</p>
              </div>
              <div className="flex items-center">
                <FcApproval /> <p className="ml-2">Veneno</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GrupoAtualDePokemons
