import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  fetchPosts,
  getPostsStatus,
} from "../../store/latestNewsSlice";
import { useEffect } from "react";
import { Post } from "../../models/post";
import { AppDispatch } from "../../store/store";
import NewsCard from "./newsCard";
import Loading from "../loading";

function LatestNews() {
  /*  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []); */

  const postsList = useSelector(selectAllPosts);

  const postsStatus = useSelector(getPostsStatus);

  var renderedNews =
    postsStatus === "loading" ? (
      <Loading />
    ) : (
      postsList.map((post: Post) => <NewsCard post={post} />)
    );

  return (
    <div>
      <h1>Discover the latest space news</h1>
      <div className="displayPost"> {renderedNews}</div>
    </div>
  );
}

export default LatestNews;
