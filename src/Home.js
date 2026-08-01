import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "First Blog", body:"This blog is the first blog!", author:"Zoheyr BOUZEKRI", id:1},
        {title: "Second Blog", body:"This blog is the second blog!", author:"Anes BOUZEKRI", id:2}
    ]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="ALL BLOGS"/>
            <BlogList title="Anes's BLOGS" blogs={blogs.filter((blog)=>(blog.author === "Anes BOUZEKRI"))} />
        </div>
    );
}

export default Home;