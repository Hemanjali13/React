import { useState, useEffect } from "react";
import Bloglist from "./bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'hema', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'hema', id: 3 }
  ])
  //Use Effect Dependencies
  const [name, setName] = useState('hema')
//Reusing Component-12
//Functions as props(handleDelete)
const handleDelete = (id) => {
const newBlogs = blogs.filter(blog => blog.id !== id);
setBlogs(newBlogs);
}
 useEffect(() => {
  console.log('use effect ran');
  console.log(blogs);
 }, [])
  return (
    <div className="home">
    <Bloglist blogs={blogs} title = "All Blogs!" handleDelete={handleDelete} />
    <button onClick={() => setName('Anjali')}> change name</button>
    <p>{ name }</p>
    {/* <Bloglist blogs={blogs.filter((blogs) => blogs.author=== 'hema')} title = "Hema's Blogs" /> */}
    </div>
  );
}
 
export default Home;