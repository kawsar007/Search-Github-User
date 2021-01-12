import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components/Index';
import { GithubContext } from '../context/context';
import loadingImage from '../images/preloader.gif';

const Dashboard = () => {
    const {isLoading} = React.useContext(GithubContext);
    if(isLoading) {
       return <main>
            <Navbar></Navbar>
            <Search/>
            <img src={loadingImage} alt="Loading" className="loading-img"/>
        </main>
    }

    return (
        <main>
           <Navbar></Navbar>
           <Search/> 
           <Info/>
           <User/>
           <Repos/>
        </main>
    )
}

export default Dashboard;
