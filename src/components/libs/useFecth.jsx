import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development';

// url = http://localhost:4000/api/products
export default function useFecth(url, method) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {


        fetch(url, {
            method: method
        })
        .then(response => {
            if(response.ok){
                return response.json()
            }
            throw response
        })
        .then(data => {
            setData(data)
        })
        .catch(error => {
            console.error(error);
            setError(error)
        })
        .finally(() => {
            setLoading(false)
        })
        
    }, [url])

    return {data, loading, error}
}
