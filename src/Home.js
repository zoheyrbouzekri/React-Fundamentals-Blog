import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "First Blog", body:"This blog is the first blog!", author:"Zoheyr BOUZEKRI", id:1}
    ]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="MY BLOGS"/>
        </div>
    );
}

export default Home;