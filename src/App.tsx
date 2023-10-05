import './App.css'
import { RecipesDataProvider } from './hooks/RecipesDataContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RootPage } from './pages/RootPage'
import { DetailsPage } from './pages/DetailsPage'

export const App = () => {

  return (
    <RecipesDataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootPage />} />
          <Route path='/details' element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </RecipesDataProvider>
  )
}
