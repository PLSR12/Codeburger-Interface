import React, { useState, useEffect } from 'react'

import api from '../../services/api'
import BannerProduct from '../../assets/home/banner-productpage(2).svg'
import { Container, HomeImg, CategoriesMenu, CategoryButton } from './styles'

function Products () {
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState([0])

  useEffect(() => {
    async function loadCategories () {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todos' }, ...data]

      setCategories(newCategories)
    }

    loadCategories()
  }, [])

  return (
    <Container>
      <HomeImg src={BannerProduct} alt='banner produtos' />
      <CategoriesMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              type='button'
              key={category.id}
              isActiveCategory={ activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>
    </Container>
  )
}

export default Products
