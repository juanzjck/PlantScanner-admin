import React, { Fragment,useContext } from 'react'
import { NewNote } from './pages/NewNote'
import { GlobalStyle } from './styles/GlobalStyles'
import {Home} from './pages/Home'
import Notes from './pages/Notes'
import {Redirect, Router} from '@reach/router'

import {Context} from './context'
import {Login} from './pages/Login'
import {Register} from './pages/Register'
import { NoteEdit} from './pages/Note'
import  Users  from './pages/Users'
import Plants from './pages/Plants'
import NewUser from './pages/NewUser'
import EditUser from './pages/EditUser'
import CreatePlant from './pages/CreatePlant'
import EditPlant from './pages/EditPlant'

export const App = () =>{
    const {IsSignIn}=useContext(Context);
    return(
        <Fragment>
            <GlobalStyle/>
                <Router>
                    <Home default path="/"/>
                    {!IsSignIn&&<Login path="/login"/>}
                    {!IsSignIn&&<Redirect from="/dashboard" to="/"/>}
                    {IsSignIn&&<Redirect from='/login' to='/'/>}
                    {IsSignIn&&<Redirect from='/register' to='/'/>}
                    {IsSignIn&&<NoteEdit path='/note/:id'/>}
                    {!IsSignIn&&<NoteEdit path='/users' to='/'/>}
                    <Users path="/users" />
                    <Plants path="/plants" />
                    <NewUser path="/NewUser" />
                    <EditUser path="/EditUser/:id"/>
                    <Notes path="/dashboard"/>
                    <CreatePlant path="/plants/new"/>
                    <EditPlant path="/plants/edit/:id"/>
                </Router>
        </Fragment>   
    )
}
