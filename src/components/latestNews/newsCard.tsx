import { Link } from "react-router-dom";
import { Post } from "../../models/post";

function NewsCard(props: any) {
  const post: Post = props.post;

  var details: string = post.details?.substring(0, 110);

  if(post.details.length > 110) {
    details += ' ...';
  }


  return (
    <Link to={"/post/"+post.id} className="LatestNewsCard">
        <article className="LatestNewsCard" key={post.id}>
        <h3>{post.title}</h3>
        <i>{new Date(post.event_date_unix * 1000).toDateString()}</i>
        <p>{details}</p>
        <Link to={"/post/"+post.id}>Read more</Link>
        </article>
    </Link>
  );
}

export default NewsCard;
