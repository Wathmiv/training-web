import DiaryHomePage from './Pages/DiaryHome/DiaryHomePage';
import SignInPage from './Pages/SignIn/SignInPage';
import { createBrowserRouter , Route, Link, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Diary_Home_PATH } from './utility/constants';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route index element={<SignInPage/>}/>
        <Route path={Diary_Home_PATH} element={<DiaryHomePage/>}/>
      </Route>
  )
)

function App() {
  return ( 
    <RouterProvider router={router}
    />
  );
}

export default App;
