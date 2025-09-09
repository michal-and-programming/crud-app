import { Button } from "react-bootstrap";
import { useState } from "react";


const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublished] = useState(props.publishedDate || '');
  const [shortDescription, setDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = e => {
    e.preventDefault();
    action({title, author, publishedDate, shortDescription , content});
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
        <textarea className="form-control" rows="5" placeholder="Leave a comment here" value={content} onChange={ e => setContent(e.target.value)}></textarea>
      </div>
      <Button type="submit">{actionText}</Button>
    </form>
  )
};

export default PostForm;