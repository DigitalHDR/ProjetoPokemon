'use client'
import React, { useEffect, useState } from 'react'

const useSpeedAttackConfig = ({ item }: any) => {
  const [currentSpeedAttack, setCurrentSpeedAttack] = useState(0)

  useEffect(() => {
    if (item?.special_attack) {
      const targetValue = item.special_attack
      const increment = Math.ceil(targetValue / 100) // Define o incremento
      let value = 0

      const interval = setInterval(() => {
        value += increment
        if (value >= targetValue) {
          value = targetValue
          clearInterval(interval) // Para o intervalo quando atingir o valor
        }
        setCurrentSpeedAttack(value)
      }, 50) // Define a velocidade da contagem (10ms)

      return () => clearInterval(interval) // Limpa o intervalo ao desmontar o componente
    }
  }, [item])

  return currentSpeedAttack
}

export default useSpeedAttackConfig
