import React from 'react'
import Header from './Header'
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard'
import HomeCategories from '../../components/HomeCategories/HomeCategories'

const HomePage = () => {
  return (
    <div>
      <Header/>
  <CategoriesCard/>
  <HomeCategories/>
    </div>
    
  )
}

export default HomePage