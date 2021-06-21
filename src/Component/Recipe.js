import React from 'react'
import { RecipeContainer,RecipeName,CoverImage,SeeMoreText,IngredientsText } from './RecipeComponet';

const Recipe = ({ recipe }) => {
  const { label, image, ingredients, url } = recipe;
    return (
        <RecipeContainer>
          <CoverImage src={image} />
          <RecipeName>{label}</RecipeName>
          <IngredientsText >
            Ingredients
          </IngredientsText>
          <SeeMoreText
          onClick = {()=>window.open(url)}
          >
            See Complete Recipe
          </SeeMoreText>
        </RecipeContainer>
    )
}

export default Recipe;
