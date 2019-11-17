import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {compare} from "./utils";
import 'bootstrap/dist/css/bootstrap.css';
import Posts from "./components/posts";
import Pagination from "./components/pagination";
import SelectedPost from "./components/selected-post";
import BtnShowAll from "./components/btn-show-all";

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [finalPosts, setFinalPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState({});
  const [perPage] = useState(20);
  const [direction, setDirection] = useState('asc');
  const [show, setShow] = useState(0);

  const indexOfPageLastPost = currentPage * perPage;
  const indexOfPageFirstPost = indexOfPageLastPost - perPage;

  const fetchData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
    setAllPosts(res.data);
    setFinalPosts(res.data.slice(indexOfPageFirstPost, indexOfPageLastPost));
  };
  useEffect( () => {
    fetchData().catch(error => console.log(error));
  }, []);

  const paginate = (currentIndex) => {
    setCurrentPage(currentIndex);
    setFinalPosts(allPosts.slice(currentIndex * perPage, indexOfPageLastPost - perPage));
  };
  const showAll = () => {
    setShow(1);
    setFinalPosts(allPosts);
  };
  const sort = (field) => {
      allPosts.sort((a, b) => compare(b[field], a[field], direction));
      setDirection(direction === 'asc' ? 'desc' : 'asc');
      if(show){
        setFinalPosts(allPosts);
      }else{
        setFinalPosts(allPosts.slice(indexOfPageFirstPost, indexOfPageLastPost));
      }
  };
  return (
    <div className="App">
      <SelectedPost post={selectedPost}/>
      <BtnShowAll showAll={showAll}/>
      <Pagination paginate={paginate} perPage={perPage} total={allPosts.length} current={currentPage}/>
      <Posts posts={finalPosts} fetchSelected={(post) => setSelectedPost(post)} setSortBy={sort}/>
    </div>
  );
}

export default App;
