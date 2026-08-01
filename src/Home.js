import { useState , useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [error, setError] = useState(null);
    const [blogs, setBlogs] = useState(null); 
    const [isPending, setIsPending] = useState(true); 

    useEffect(() => {
        setTimeout (() => {
        fetch("http://localhost:8000/blogs")
        .then (res => {
            if (!res.ok){
                throw Error("Could not fetch the data for that resource");
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            setBlogs(data);
            setIsPending(false);
        })
        .catch(err =>{
            setIsPending(false);
            setError(err.message);
        })
        ;
        }, 3000)
    }, []);

    return ( 
        <div className="home">
            {isPending && <p>LOADING...</p>}
            {error && <p>{error}</p>}
            {blogs && <BlogList blogs={blogs} title="ALL BLOGS"/>}
            {blogs && <BlogList title="Anes's BLOGS" blogs={blogs.filter((blog)=>(blog.author === "Anes BOUZEKRI"))} />}
        </div>
    );
}

export default Home;