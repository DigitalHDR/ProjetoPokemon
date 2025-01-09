'use client'
import { ButtonDefault } from '@/app/components/Button'
import Link from 'next/link'
import React from 'react'

const Inicio: React.FC = () => {
  return (
    <section className="px-10">
      <div className=" h-screen flex justify-center relative items-center">
        <div className="flex items-center absolute left-0 top-5">
          <img className="w-10 mr-3" src="pokebola.png" alt="pokebola" />
          <p className="text-base	font-black">DigitalHDR</p>
        </div>

        <div className="flex justify-center flex-col items-center  w-full">
          <div className="">
            <img className="" src="pikachuLogo.png" alt="logo do pikachu" />
            <p className="text-center text-3xl md:text-4xl font-black">
              Pokédex Gamer
            </p>
          </div>

          <div className="mt-3">
            <Link href="/paginaPrincipal">
              <ButtonDefault>Entrar</ButtonDefault>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Inicio


