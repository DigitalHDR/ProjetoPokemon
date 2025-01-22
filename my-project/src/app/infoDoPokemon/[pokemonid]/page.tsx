'use client'
import { use } from 'react'
import AnimatedBar from '@/app/config/AnimatedBar'
import pokemons from '@/app/data/apiPokemon'
import useHeightConfig from '@/app/config/useHeightConfig '

interface UsableParams {
  pokemonid: string
}

interface Props {
  params: Promise<UsableParams>
}

const InfoDoPokemon = ({ params }: Props) => {
  // Desembrulhando a promise de params corretamente
  const unwrappedParams = use(params) as UsableParams
  const pokemonId = unwrappedParams.pokemonid

  // Busca o Pokémon pelo id
  const pokemon = pokemons.find((p) => p.id === Number(pokemonId))

  // Se o Pokémon não for encontrado, renderize uma mensagem
  // Serve para tirar o erro de cada vez que usa {pokemon}
  if (!pokemon) {
    return <div>Pokémon não encontrado</div>
  }

  // Mapeamento de tipos para imagens
  const typeToImageMap: Record<string, string> = {
    Fire: '/Fire.png',
    Poison: '/Poison.png',
    Bug: '/Bug.png',
    Grass: '/Grass.png',
    Dark: '/Dark.png',
    Dragon: '/Dragon.png',
    Electric: '/Electric.png',
    Fairy: '/Fairy.png',
    Fighting: '/Fighting.png',
    Flying: '/Flying.png',
    Ghost: '/Ghost.png',
    Ground: '/Ground.png',
    Ice: '/Ice.png',
    Normal: '/Normal.png',
    Psychic: '/Psychic.png',
    Rock: '/Rock.png',
    Steel: '/Steel.png',
    Water: '/Water.png',
    // Adicione outros tipos conforme necessário
  }

  // Função para pegar a imagem de acordo com o tipo
  const getImageForType = (type: string): string => {
    return typeToImageMap[type] || '/default.png' // Retorna a imagem correspondente ou a imagem padrão
  }

  const currentHeight = useHeightConfig({})

  return (
    <section className="flex justify-center items-center">
      <div className="px-5 gap-10 flex flex-col mt-5 container">
        <div>
          <h3 className="text-3xl md:text-4xl font-black">
            {pokemon.name} | # {pokemon.id}
          </h3>
        </div>

        <div
          style={{ backgroundColor: pokemon.typeColor[0] }}
          className="flex flex-col gap-10 mt-20  items-center my-3   p-5  relative rounded-lg shadow-xl mb-10"
        >
          {/* IMAGEM DO POKEMON  */}
          <div className="flex justify-center items-center ">
            <div className="text-cente rounded-xl p-3 bg-white border border-cyan-600 sm:absolute -top-20 shadow-2xl">
              <div className="flex items-center justify-center">
                <img src={pokemon.img} alt={pokemon.name} />
              </div>
              <div className="flex items-center justify-between w-full my-8 rounded-lg">
                <div>
                  <hr className="border-2 w-28" />
                </div>
                <div className="w-8">
                  <a href="https://www.flaticon.com" title="Pokebola">
                    <img src="/pokebola.png" alt="Pokebola" />
                  </a>
                </div>
                <div>
                  <hr className="border-2 w-28" />
                </div>
              </div>
              <div className="flex justify-center items-center text-xl">
                <p className="md:text-2xl">Base Exp:</p>{' '}
                <p className="ml-3 mt-1">{pokemon.base_experience}</p>
              </div>
            </div>
          </div>

          {/* ALTURA E PESO */}
          <div className=" flex justify-between w-full lg:w-3/5 xl:w-3/5 text-xl">
            <div className="py-3">
              <p className="text-xl md:text-2xl font-medium">Altura:</p>
              <hr className="border-2" />
              <span>{pokemon.Height} Cm</span>
            </div>

            <div className="py-3">
              <p className="text-xl md:text-2xl font-medium">Peso:</p>
              <hr className="border-2" />
              <span>{pokemon.Weight} kg</span>
            </div>
          </div>

          {/* ANIMAÇÃO COM BARRA */}
          <div className="w-full xl:w-2/5 lg:w-3/5">
            <div className="">
              <div className="flex w-full items-center justify-center space-y-4 ">
                <div className="w-10">
                  <img src="/coracao.png" alt="" />
                </div>
                <AnimatedBar level={pokemon.hp} />
              </div>

              <div className="flex items-center justify-center space-y-4 ">
                <div className="w-10">
                  <img src="/escudo.png" alt="" />
                </div>
                <AnimatedBar level={pokemon.defense} />
              </div>

              <div className="flex items-center justify-center space-y-4 ">
                <div className="w-10">
                  <img src="/espada.png" alt="" />
                </div>
                <AnimatedBar level={pokemon.attack} />
              </div>
            </div>
          </div>

          {/* STATUS SPECIAIS */}
          <div className="w-full xl:w-3/5 lg:w-3/5 text-xl">
            <div className="flex items-center justify-between">
              <div className="flex">
                <div className="w-9 xl:w-8 rounded-full mr-5">
                  <a href="https://www.flaticon.com" title="Pokebola">
                    <img src="/special attack.png" alt="Pokebola" />
                  </a>
                </div>
                <div className="md:text-2xl font-medium text-left whitespace-nowrap mr-3">
                  Special Attack
                </div>
              </div>
              <div className="font-medium w-2/3 text-right mt-1">
                {pokemon.special_attack}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex">
                <div className="w-9 xl:w-8 rounded-full mr-5">
                  <a href="https://www.flaticon.com" title="Pokebola">
                    <img src="/special defense.png" alt="Pokebola" />
                  </a>
                </div>
                <div className="md:text-2xl font-medium text-left whitespace-nowrap mr-3">
                  Special Defesa
                </div>
              </div>
              <div className="font-medium w-2/3 text-right mt-1">
                {pokemon.special_defense}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex">
                <div className="w-9 xl:w-8 rounded-full mr-5">
                  <a href="https://www.flaticon.com" title="Pokebola">
                    <img src="/speed.png" alt="Pokebola" />
                  </a>
                </div>
                <div className="md:text-2xl font-medium text-left whitespace-nowrap mr-3">
                  Speed
                </div>
              </div>
              <div className="font-medium w-2/3 text-right mt-1">
                {pokemon.speed}
              </div>
            </div>
          </div>

          {/* TIPO DO POKEMON */}
          <div className="w-full xl:w-3/5 lg:w-3/5">
            <p className="text-xl md:text-2xl font-medium text-center">Tipo</p>
            <hr className="border-2" />
            <div className="flex justify-between flex-row mt-5 gap-10 xl:gap-5">
              <div className="flex items-center md:gap-5">
                <div className="flex justify-center w-full md:justify-end">
                  <img
                    className="bg-blue-gray-50 rounded-full"
                    width={35}
                    src={getImageForType(pokemon.type[0])}
                    alt="tipo"
                  />
                </div>
                <div className="flex items-center justify-start w-full">
                  <span className="font-medium text-xl ml-3">
                    {pokemon.type[0]}
                  </span>
                </div>
              </div>

              {pokemon.type.length > 1 && (
                <div className="flex items-center md:gap-5">
                  <div className="flex justify-center w-full md:justify-end">
                    <img
                      className="bg-blue-gray-50 rounded-full"
                      width={35}
                      src={getImageForType(pokemon.type[1])}
                      alt="tipo"
                    />
                  </div>
                  <div className="flex items-center justify-start w-full">
                    <span className="font-medium text-xl ml-3">
                      {pokemon.type[1]}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoDoPokemon
