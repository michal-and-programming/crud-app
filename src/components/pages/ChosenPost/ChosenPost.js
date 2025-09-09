import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {getAllPosts} from '../../../redux/postsRedux';
import { Container } from "react-bootstrap";
import { Link, Navigate } from 'react-router-dom';
import styles from './ChosenPost.module.scss';
import ModalViev from "../../vievs/ModalViev/ModalViev";
import { useState } from "react";
import { deletePost } from "../../../redux/postsRedux";
import Button from '../../common/Button/Button';

const ChosenPost = () => {
  const params = useParams();
  const id = params.id;
  const posts = useSelector(getAllPosts);
  const post = posts.find(post => post.id === id);

  const [showModal, setShowModal] = useState(false);
  const handleDelete = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const dispatch = useDispatch();

  const chosenDeletePost = () => {
    dispatch(deletePost(id));
    closeModal();
  }
  
  if(!post) {return <Navigate to="/" />}
  else{
    return(
      <>
        <Container className={styles.chosenPostWrapper}>
          <div className={styles.chosenPostContent}>
              <h2>{post.title}</h2>
              <h4>Author: <span>{post.author}</span></h4>
              <h4>Published: <span>{post.publishedDate}</span></h4>
              <p><span>{post.content}</span></p>
          </div>
          <div>
            <Link to={`/post/edit/${id}`}>
              <Button className="btn btn-outline-primary">Edit</Button>
            </Link>
            <Button className="btn btn-outline-danger" onClick={handleDelete}>Delete</Button>
          </div>
        </Container>
        <ModalViev show={showModal} close={closeModal} deletePost={chosenDeletePost}/>
      </>
    )
  }
};

export default ChosenPost;
