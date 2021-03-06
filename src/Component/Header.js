import styled from 'styled-components';

export const Header = styled.div`
    color:white;
    background-color:black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    font-size: 25px;
    font-weight: bold;
    box-shadow: 0 3px 6px 0 #555;
`
export const AppNameComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
   
`;
export const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
  
`;
export const RecipeImage = styled.img`
  width: 36px;
  height: 36px;
  margin: 15px;
`;
export const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;
export const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
