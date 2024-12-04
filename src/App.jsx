
import Layout from './HOC/Layout'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Courses from './Pages/Courses'
import Instructor from './Pages/Instructor'
import Page from './Pages/Page'
import {Routes,Route} from 'react-router-dom'
function App() {

  return (
    <>
  {/* <Layout> */}
    <Routes>
      <Route element={<Layout />}>

      <Route path='/' element={<Home/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/courses' element={<Courses/>} />
      <Route path='/instructor' element={<Instructor/>} />
      <Route path='/page' element={<Page/>} />


      </Route>

    </Routes>

  {/* </Layout> */}
    </>
  )
}

export default App
