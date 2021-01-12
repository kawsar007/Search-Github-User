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
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState({show: false, msg: ''});
      
    const searchGithubUser = async(user) => {
        toggleError();
        setIsLoading(true);
        const response = await axios(`${rootUrl}/users/${user}`)
           .catch(err => console.log(err))
           if(response) {
               setGithubUser(response.data);
               const { login, followers_url } = response.data;
            //    await Promise.allSettled([
            //     axios(`${rootUrl}/users/${login}/repos?per_page=100`),
            //     axios(`${followers_url}?per_page=100`),
            //    ]).then((results) => {
            //        const [repos, followers] = results;
            //        const status = 'fulfilled';
            //        if(repos.status === status) {
            //            setRepos(repos.value.data);
            //        }
            //        if(followers.status === status) {
            //         setRepos(followers.value.data);
            //     }
            //    });
            // Repos
                axios(`${rootUrl}/users/${login}/repos?per_page=100`)
                 .then(response => setRepos(response?.data))
            // Followers
                axios(`${followers_url}?per_page=100`)
                 .then(response => setFollowers(response?.data));
           } else {
               toggleError(true, 'there is no user with that username');
           }
           checkRequest();
           setIsLoading(false);
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
       <GithubContext.Provider value={{githubUser, repos, followers, requests, error, searchGithubUser, isLoading}}>
           {children}
       </GithubContext.Provider>
    )
}

export {GithubProvider, GithubContext};