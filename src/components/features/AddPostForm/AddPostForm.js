import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postsRedux";

const AddPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublished] = useState('');
  const [shortDescription, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPost({title, author, publishedDate, shortDescription}));
    navigate('/');
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input type="text" className="form-control w-50" placeholder="Enter title" value={title} onChange={ e => setTitle(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label className="form-label">Author</label>
        <input type="text" className="form-control w-50" placeholder="Enter author" value={author} onChange={ e => setAuthor(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label className="form-label">Published</label>
        <input type="date" className="form-control w-50" value={publishedDate} onChange={ e => setPublished(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label className="form-label">Short description</label>
        <textarea className="form-control" rows="2" placeholder="Leave a comment here" value={shortDescription} onChange={ e => setDescription(e.target.value)}></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label">Main content</label>
        <textarea className="form-control" rows="5" placeholder="Leave a comment here"></textarea>
      </div>
      <Button type="submit">Add post</Button>
    </form>
  )
};

export default AddPostForm;