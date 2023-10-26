import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchPostDetails,
  getpostDetails,
  getpostDetailsStatus,
} from "../store/postDetails";
import { AppDispatch } from "../store/store";
import { Post } from "../models/post";
import { devApiDomain } from "../providers/helpersFunc";
import SocialSharing from "../components/socialSharing";
import Loading from "../components/loading";

function PostDetails() {
  let { id } = useParams();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPostDetails(id));
  }, [id]);

  const postStatus = useSelector(getpostDetailsStatus);

  const postDetails: Post = useSelector(getpostDetails);
  const postLink: string = devApiDomain() + "post/" + id;

  if (postStatus === "loading") {
    return <Loading />;
  } else {
    return (
      <div className="postDetails">
        <h1>{postDetails.title}</h1>
        <img
          className="factImg"
          src="https://sxcontent9668.azureedge.us/cms-assets/assets/Psyche_outside39abmound_IMG_8486_desktop_f5072ad69b.jpg"
          alt=""
        />

        <p>
          <i>
            Published on{" "}
            {new Date(postDetails.event_date_unix * 1000).toDateString()}.
            <a
              href={postDetails?.links?.article}
              target="_blank"
              rel="noreferrer"
            >
              <span>Link to post</span>
            </a>
          </i>
        </p>
        <p>{postDetails.details}</p>
        <hr />
        <div className="socialSharing">
          <SocialSharing postLink={postLink}></SocialSharing>
        </div>
      </div>
    );
  }
}
export default PostDetails;
