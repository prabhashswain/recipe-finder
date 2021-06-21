import React, { useState } from 'react'
import { RecipeContainer,RecipeName,CoverImage,SeeNewTab,SeeMoreText,IngredientsText } from './RecipeComponet';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const Recipe = ({ recipe }) => {
  const [ show,setShow ] = useState(false);
  const { label, image, ingredients, url } = recipe;
    return (
      <>
      <Dialog open={show}>
      <DialogTitle id="alert-dialog-slide-title">Ingredients</DialogTitle>
      <DialogContent>
        <RecipeName>{label}</RecipeName>
        <table>
            <thead>
              <th>Ingredient</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {ingredients.map((ingredient, index) => (
                <tr key={index} className="ingredient-list">
                  <td>{ingredient.text}</td>
                  <td>{ingredient.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </DialogContent>
      <DialogActions>
      <SeeNewTab onClick={() => window.open(url)}>See More</SeeNewTab>
          <SeeMoreText onClick={() => setShow("")}>Close</SeeMoreText>
      </DialogActions>
      </Dialog>

        <RecipeContainer>
          <CoverImage src={image} />
          <RecipeName>{label}</RecipeName>
          <IngredientsText
          onClick={()=>setShow(true)}
          >
            Ingredients
          </IngredientsText>
          <SeeMoreText
          onClick = {()=>window.open(url)}
          >
            See Complete Recipe
          </SeeMoreText>
        </RecipeContainer>
        </>
    )
}

export default Recipe;
