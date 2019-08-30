import {  useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async(searchTerm) => {
        console.log('hi here');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'Toronto'
                }
            });
            setResults(response.data.businesses);
        }
        catch(error) {
            console.log(`Error: ${error.message}`);
            setErrorMessage('Sorry, error has occurred. Please try later');
            
        }
    };

    // call searchApi() when component is first rendered
    //searchApi('pasta');
    useEffect(() => {
        searchApi('cafe');
    }, []);

    return [searchApi, results, errorMessage];

}