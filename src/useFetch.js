import { useState , useEffect } from "react";
const useFetch = (url) => {

    const [error, setError] = useState(null);
    const [data, setData] = useState(null); 
    const [isPending, setIsPending] = useState(true); 

    useEffect(() => {
        setTimeout (() => {
        fetch(url)
        .then (res => {
            if (!res.ok){
                throw Error("Could not fetch the data for that resource");
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            setData(data);
            setIsPending(false);
        })
        .catch(err =>{
            setIsPending(false);
            setError(err.message);
        })
        ;
        }, 3000)
    }, [url]);

    return { data, isPending, error };;
}

export default useFetch;