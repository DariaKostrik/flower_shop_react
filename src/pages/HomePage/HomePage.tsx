
import React from 'react'
import { FrontDiv } from './components/FrontDiv/FrontDiv'
import { ContainerWithGoods } from './components/ContainerWithGoods/ContainerWithGoods'
import { PlantCare } from './components/PlantCare/PlantCare'
import { MainCollection } from './components/MainCollection/MainCollection'
import { FutureGoods } from './components/FutureGoods/FutureGoods'
import { PlantBiography } from './components/PlantBiography/PlantBiography'

export const HomePage = () => {
  return (
    <>
    <FrontDiv/>
    <ContainerWithGoods/>
    <MainCollection/>
    <PlantCare/>
    <FutureGoods/>
    <PlantBiography/>
    </>
  )
}
