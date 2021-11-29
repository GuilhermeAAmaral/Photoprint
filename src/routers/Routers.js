import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import SearchPage from '../pages/SearchPage/SearchPage'
import DetailPage from '../pages/DetailPage/DetailPage'
import Tendencies from '../pages/Tendencies/Tendencies'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Header from '../components/Header/Header'

//setup e definição das rotas da aplicação

const Routers = () => {

    return (

        <BrowserRouter>
            <Header />
            <Switch>

                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route exact path="/search">
                    <SearchPage />
                </Route>

                <Route exact path="/detail/:id">
                    <DetailPage />
                </Route>

                <Route exact path="/tendencies">
                    <Tendencies />
                </Route>

                <Route> 
                    <ErrorPage />
                </Route>
                
            </Switch>
        </BrowserRouter>

    )
}

export default Routers