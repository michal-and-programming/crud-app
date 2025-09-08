import { Container } from "react-bootstrap";
import AddPostForm from "../../features/AddPostForm/AddPostForm";

const AddPost = () => {
  return(
    <Container className="mx-auto" style={{ width: '50%' }}>
      <h1>AddPost</h1>
      <AddPostForm />
    </Container>
  )
};

export default AddPost;
