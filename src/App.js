import {  RouterProvider,  createHashRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Movies from './Components/Movies/Movies';
import Tv from './Components/Tv/Tv';
import People from './Components/people/People';
import Login from './Components/Login/Login';
import Notfound from './Components/Notfound/Notfound';
import Register from './Components/Register/Register';
import Moviedetails from './Components/Moviedetails/Moviedetails';
import Favarite from './Components/Favarite/Favarite';
import Tvdetails from './Components/Tvdetails/Tvdetails';
import Peopledetails from './Components/Peopledetails/Peopledetails';
import FavariteContextProvide from './Context/Favaritestore';
import { Offline, Online } from "react-detect-offline";
import Noconnected from './Components/Noconnected/Noconnected';
import SearchContextProvide from './Context/Searchstore';
function App() {



  const routers = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'movies', element: <Movies /> },
        { path: 'tv', element: <Tv /> },
        { path: 'people', element: <People /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'moviedetails/:id', element: <Moviedetails /> },
        { path: 'tvdetails/:id', element: <Tvdetails /> },
        { path: 'favarite', element: <Favarite /> },
        { path: 'peopledetails/:id', element: <Peopledetails /> },
        { path: '*', element: <Notfound /> }
      ]
    }
  ])




  return <>


    <div>
      <Online>
        <FavariteContextProvide>
          <SearchContextProvide>
            <RouterProvider router={routers} />

          </SearchContextProvide>
        </FavariteContextProvide>
      </Online>
      <Offline>
        <Noconnected />
      </Offline>
    </div>

  </>
}

export default App;
