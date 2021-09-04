import React from 'react';
import { Switch, Route, NavLink, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Terjemahan from './pages/terjemahan/Terjemahan';
import Legalisasi from './pages/legalisasi/Legalisasi';
import Contact from './pages/contact/Contact'
import About from "./pages/about/About";
import Blog from './pages/blog/Blog'
import BlogDetail from './pages/blog_detail/BlogDetail'


const Routes = () => {
    return (
        <Switch>
            <Route path="/blog/:id" component={BlogDetail} />

            <Route path="/blog" component={Blog} />

            <Route path="/contact" component={Contact} />

            <Route path="/about">
                <h1>Ini halaman about</h1>
            </Route>

            <Route path="/legalisasi" component={Legalisasi} />

            <Route path="/terjemahan" component={Terjemahan} />

            <Route path="/">
                <Home />
            </Route>

        </Switch>
    )
}

export default Routes
