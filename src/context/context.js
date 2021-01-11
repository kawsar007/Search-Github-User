import React, { useState, useEffect } from 'react';
import axios from 'axios';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({children}) => {

    const [ githubUser, setGithubUser ] = useState(mockUser); 
    const [ repos, setRepos ] = useState(mockRepos);
    const [ followers, setFollowers ] = useState(mockFollowers); 

    // Request, Loading
    const [ requests, setRequests ] = useState(0);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState({show: false, msg: ''});
      
    const searchGithubUser = async(user) => {
        toggleError();
        const response = await axios(`${rootUrl}/users/${user}`)
           .catch(err => console.log(err))
           if(response) {
               setGithubUser(response.data)
           } else {
               toggleError(true, 'there is no user with that username')
           }
    }

    const checkRequest = () => {
        axios(`${rootUrl}/rate_limit`)
        .then(({data}) => {
              console.log(data);
              let {rate: {remaining}} = data;
            //let remaining = data.rate.remaining;
              setRequests(remaining);
              if(remaining === 0) {
                toggleError(true, "sorry. you have exeeded your hourly rate limit!")
              }
          })
          .catch((err) =>console.log(err));
    }

    

    useEffect(() =>{
        checkRequest()
    }, []);

    function toggleError (show, msg) {
        setError({show, msg});
    }

    return (
       <GithubContext.Provider value={{githubUser, repos, followers, requests, error, searchGithubUser}}>
           {children}
       </GithubContext.Provider>
    )
}

export {GithubProvider, GithubContext};