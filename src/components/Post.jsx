const Post = ({ post }) => {
    return (
      <div className="postMain">
        <hr />
        <div>{post.date}</div>
        <div>{post.venue}</div>
        <div>{post.companyName}</div>
        <div>{post.address}</div>
        <div>{post.query}</div>
        <ul>{post.genres && post.genres.map((genre) => <li>{genre}</li>)}</ul>
        {/* <div src={post.img}></div> */}
      </div>
    );
  };
  export default Post;