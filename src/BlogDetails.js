import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        })
        .then(() => {
            history.push('/');
        })
    }

    const history = useHistory();
    
    return ( 
        <div className="blog-details">
            <h2>blog details - { id }</h2>
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                        <div>{ blog.body }</div>
                </article>
            )}
            <button onClick={handleClick}>delete</button>
        </div>
    );
}

export default BlogDetails;