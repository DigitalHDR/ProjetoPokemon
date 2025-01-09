'use client'
import AnimatedBar from '@/app/config/AnimatedBar'

import useSpeedConfig from '@/app/config/useSpeedConfig'
import useHeightConfig from '@/app/config/useHeightConfig '
import useWeightConfig from '@/app/config/useWeightConfig'
import useBaseExperience from '../config/useBaseExperience'
import useSpeedAttackConfig from '@/app/config/useSpeedAttackConfig'
import useSpecialDefenseConfig from '@/app/config/useSpecialDefenseConfig'

interface InfoDoPokemonProps {
  item: {
    id: number
    name: string
    type: string[]
    base_experience: number
    img: string
    hp: number
    defense: number
    attack: number
    special_attack: number
    special_defense: number
    speed: number
    Height: number
    Weight: number
  }
}

const InfoDoPokemon: React.FC<InfoDoPokemonProps> = ({ item }) => {
  const currentSpeed = useSpeedConfig({ item })
  const currentHeight = useHeightConfig({ item })
  const currentWeight = useWeightConfig({ item })
  const currentBaseExp = useBaseExperience({ item })
  const currentSpeedAttack = useSpeedAttackConfig({ item })
  const currentSpeedDefense = useSpecialDefenseConfig({ item })

  return (
    <div className="px-5 gap-10 flex flex-col mt-5">
      <div>
        <h3 className="text-3xl md:text-4xl font-black">
          {item.name} | # {item.id}
        </h3>
      </div>

      <div className="flex flex-col  gap-10 items-center xl:flex-row my-3">
        <div className=" flex justify-between w-full lg:w-3/5  xl:w-2/5 text-xl xl:flex-col ">
          <div className="py-3">
            <p className="text-xl md:text-2xl font-medium">Altura:</p>
            <hr className="border-2" />
            <span className="font-medium">{currentHeight} Cm</span>
          </div>

          <div className="py-3">
            <p className="text-xl md:text-2xl font-medium">Peso:</p>
            <hr className="border-2" />
            <span className="font-medium text-xl">{currentWeight} kg</span>
          </div>
        </div>

        <div className="w-full xl:w-3/5 lg:w-3/5">
          <div className="">
            <div className="flex w-full items-center justify-center space-y-4 ">
              <div className="w-10">
                <img src="/coracao.png" alt="" />
              </div>
              <AnimatedBar level={item.hp} />
            </div>

            <div className="flex items-center justify-center space-y-4 ">
              <div className="w-10">
                <img src="/escudo.png" alt="" />
              </div>
              <AnimatedBar level={item.defense} />
            </div>

            <div className="flex items-center justify-center space-y-4 ">
              <div className="w-10">
                <img src="/espada.png" alt="" />
              </div>
              <AnimatedBar level={item.attack} />
            </div>
          </div>
        </div>

        <div className="text-cente bg-blue-500 rounded-xl p-3 w-full  lg:w-3/5">
          <div className="flex items-center justify-center">
            <img className="h-20" src={item.img} alt={item.name} />
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
          <div className="flex justify-center items-center">
            <p className="text-xl md:text-2xl font-medium">Base Exp:</p>{' '}
            <p className="font-medium ml-3 mt-1">{currentBaseExp}</p>
          </div>
        </div>

        <div className="w-full xl:w-2/5 lg:w-3/5">
          <div className="flex items-center justify-between">
            <div className="flex">
              <div className="w-9 xl:w-8 rounded-full mr-5">
                <a href="https://www.flaticon.com" title="Pokebola">
                  <img src="/special attack.png" alt="Pokebola" />
                </a>
              </div>
              <div className="text-xl md:text-2xl font-medium text-left whitespace-nowrap mr-3">
                Special Attack
              </div>
            </div>
            <div className="font-medium w-2/3 text-right mt-1">
              {currentSpeedAttack}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex">
              <div className="w-9 xl:w-8 rounded-full mr-5">
                <a href="https://www.flaticon.com" title="Pokebola">
                  <img src="/special defense.png" alt="Pokebola" />
                </a>
              </div>
              <div className="text-xl md:text-2xl font-medium text-left whitespace-nowrap mr-3">
                Special Defesa
              </div>
            </div>
            <div className="font-medium w-2/3 text-right mt-1">
              {currentSpeedDefense}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex">
              <div className="w-9 xl:w-8 rounded-full mr-5">
                <a href="https://www.flaticon.com" title="Pokebola">
                  <img src="/speed.png" alt="Pokebola" />
                </a>
              </div>
              <div className="text-xl md:text-2xl font-medium text-left whitespace-nowrap mr-3">
                Speed
              </div>
            </div>
            <div className="font-medium w-2/3 text-right mt-1">
              {currentSpeed}
            </div>
          </div>
        </div>

        <div className="w-full xl:w-2/5 lg:w-3/5">
          <p className="text-xl md:text-2xl font-medium text-center">Tipo</p>
          <hr className="border-2" />
          <div className="flex justify-between xl:justify-normal xl:flex-col flex-row mt-5 gap-10 xl:gap-5">
            <div className="flex items-center md:gap-5">
              <div className="flex justify-center w-full md:justify-end">
                <img width={35} src="./Grass.png" alt="tipo" />
              </div>
              <div className="flex items-center justify-start w-full">
                <span className="font-medium ml-3">Bug</span>
              </div>
            </div>

            <div className="flex items-center md:gap-5">
              <div className="flex justify-center w-full md:justify-end">
                <img width={35} src="./Poison.png" alt="tipo" />
              </div>
              <div className="flex items-center justify-start w-full">
                <span className="font-medium ml-3">Dark</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoDoPokemon
