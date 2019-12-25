import React from 'react'
import { Route } from 'react-router-dom'
import CollectionItem from '../../components/CollectionItem/CollectionItem'
import './Category.sass'

const CategoryPage = ({ match }) => (
  <div className="category-page">
Category page
{console.log(match)}
  </div>
)

export default CategoryPage
