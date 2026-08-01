import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "First Blog", body:"This blog is the first blog!", author:"Zoheyr BOUZEKRI", id:1}
    ]);

    return ( 
        <div className="home">
            <h2>HOME PAGE</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <h3>{ blog.author }</h3>
                    <p>{ blog.body }</p>
                </div>
            ))}
            
        </div>
    );
}

export default Home;