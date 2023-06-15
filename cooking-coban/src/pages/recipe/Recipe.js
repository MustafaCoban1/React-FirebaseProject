import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
 
// styles
import './Recipe.css'
 
export default function Recipe() {
  const { id } = useParams()
  const url = `http://localhost:3000/recipes/${id}`
  const { data: recipe, isPending, error } = useFetch(url)
 
  const redirectToHomepage = useHistory()
 
  useEffect(() => {
    if(error) {
      setTimeout(() => redirectToHomepage.push('/'), 2500)
    }
  }, [error, redirectToHomepage]);
  
 
  return (
    <div className="recipe">
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {recipe && (
        <div>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ingredient => (
              <li>{ingredient}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </div>
      )}
    </div>
  );
}