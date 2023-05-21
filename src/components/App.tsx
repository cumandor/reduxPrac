import RecipeItem from './recipe-item/RecipeItem'
import Header from './header/Header'
import { useGetRecipesQuery } from '../store/api/api'
import CreateRecipe from './create-recipe/CreateRecipe'
import { useState } from 'react'

// const userId = null

function App() {
const [searchTerm, setSearchTerm] = useState('')
const [queryTerm, setQueryTerm] = useState('')

const { isLoading, data } = 
useGetRecipesQuery(queryTerm)
//   undefined, {
//   skip: !userId,
// }

const handleSearch = () => {
  setQueryTerm(searchTerm)
}

  return (
    <section>
      <Header />
      {/* <User /> */}
      <CreateRecipe />

    <div style={{
      padding: 10,
    }}>
      <p>Find:</p>
      <div>
      <input type="search" value=
      {searchTerm} onChange={e => setSearchTerm(e.target.value)}
      placeholder='Enter search term' />
      <button onClick={handleSearch}>Search</button>
    </div>

    </div>
   <div>
    {isLoading ? <div>Loading...</div> :
     data ? data.map(recipe =>
      <RecipeItem 
        key={recipe.id}
        recipe={recipe} 
      />
      ) : <div>Not found</div>}
   </div>
   </section>
  )
}

export default App
