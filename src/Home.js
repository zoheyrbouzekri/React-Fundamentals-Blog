import { useState , useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null); 
    const [isPending, setIsPending] = useState(true); 

    useEffect(() => {
        setTimeout (() => {
        fetch("http://localhost:8000/blogs")
        .then (res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            setBlogs(data);
            setIsPending(false);
        });
        }, 3000)
    }, []);

    return ( 
        <div className="home">
            {isPending && <p>LOADING...</p>}
            {blogs && <BlogList blogs={blogs} title="ALL BLOGS"/>}
            {blogs && <BlogList title="Anes's BLOGS" blogs={blogs.filter((blog)=>(blog.author === "Anes BOUZEKRI"))} />}
        </div>
    );
}

export default Home;