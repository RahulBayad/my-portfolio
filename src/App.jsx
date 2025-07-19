import { Suspense } from 'react'
import './App.css'
import Header from './pages/Header'
import Main from './pages/Main'
import Loading from './components/ui/Loading'

function App() {

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
        <Main />
      </Suspense>
    </>
  )
}

export default App
