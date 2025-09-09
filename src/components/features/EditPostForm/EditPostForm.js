import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import {getAllPosts} from '../../../redux/postsRedux';
import { editPost } from "../../../redux/postsRedux";
import PostForm from "../PostForm/PostForm";


const EditPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;
  const posts = useSelector(getAllPosts);
  const postId = posts.find(post => post.id === id);
  
  const handleSubmit = post => {
    dispatch(editPost({ ...post, id }));
    navigate('/')
  };

  if(!postId) {return <Navigate to="/" />}
  else{
    return(
      <PostForm action={handleSubmit}
        actionText="Edit post"
        title={postId.title}
        author={postId.author}
        publishedDate={postId.publishedDate}
        shortDescription={postId.shortDescription}
        content={postId.content}
      />
    )
  }
};

export default EditPostForm;