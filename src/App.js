import styled from 'styled-components'
import React,{ useState } from 'react'
import { Header, AppNameComponent, RecipeImage, SearchComponent, SearchIcon, SearchInput } from './Component/Header'
import Recipe from './Component/Recipe';
import { RecipeListContainer } from './Component/RecipeComponet';
import axios from 'axios';

const Client_id = "9d86a823"
const Client_secret = "af52e57b177b77f50ca37f6f64496bcd"

const Container = styled.div`
     display: flex;
     flex-direction: column;
`;
const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 200px;
  opacity: 50%;
`;

function App() {

  const [ timeoutId,updateTimerId] = useState();
  const [ recipes,setRecipe ] = useState();

  const fetchData = async (q)=>{
    if (q!=="") {
      const response = await axios.get(`https://api.edamam.com/search?q=${q}&app_id=${Client_id}&app_key=${Client_secret}`);
      setRecipe(response.data.hits)
    }
  }

  const onTextChange = (e)=>{
    clearTimeout(timeoutId);
    const timerId = setTimeout(()=> fetchData(e.target.value),500 );
    updateTimerId(timerId)
  }
  return (
    <Container>
      <Header>
        <AppNameComponent><RecipeImage src="./recipe-finder/recipe-finder/hamburger.svg" /> Recipe Finder</AppNameComponent>
        <SearchComponent>
          <SearchIcon src="./recipe-finder/recipe-finder/search-icon.svg" />
          <SearchInput type="text" placeholder="Search Recipe"
          onChange={onTextChange}
          />
        </SearchComponent>
      </Header>

      <RecipeListContainer>
      {recipes?.length ? (
          recipes.map((recipe, index) => (
            <Recipe key={index} recipe={recipe.recipe} />
          ))
        ) : (
          <Placeholder src="./recipe-finder/recipe-finder/hamburger.svg" />
        )}

      </RecipeListContainer>
    </Container>
  );
}

export default App;
