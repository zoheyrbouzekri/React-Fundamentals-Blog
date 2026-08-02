import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs")

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