import { useDispatch, useSelector } from "react-redux";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { fetchPosts, selectAllPosts } from "../store/latestNewsSlice";
import { Post } from "../models/post";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../store/store";
import { useEffect } from "react";

function SearchBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const postsList = useSelector(selectAllPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);



  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnSelect = (post: Post) => {
    console.log(post)
    navigate("/post/" + post.id);
  };

  const formatResult = (item: Post) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          {item.title}
        </span>
      </>
    );
  };

  return (
    <div>
      <ReactSearchAutocomplete<Post>
        items={postsList}
        onSearch={handleOnSearch}
        onSelect={handleOnSelect}
        autoFocus
        formatResult={formatResult}
        fuseOptions={{ keys: ["title", "details"] }}
        resultStringKeyName="title"
        placeholder="Search latest news. Falcon rocket, Dragon, or Raptor? "
      />
    </div>
  );
}

export default SearchBar;
