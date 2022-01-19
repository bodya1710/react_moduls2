import {Routes, Route, Link} from "react-router-dom";

import css from './App.module.css';
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
         <Header/>
        <div className={css.wraper_container}>
            <div className={css.item_wrap}>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'/posts'} element={<PostsPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Routes>
            <div>
                <div className={css.details_container}></div>
                <div className={css.all_items}></div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
