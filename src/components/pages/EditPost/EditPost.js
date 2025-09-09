import { Container } from "react-bootstrap";
import EditPostForm from "../../features/EditPostForm/EditPostForm";

const EditPost = () => {
  return( 
    <Container className="mx-auto" style={{ width: '50%' }}>
      <h1>Edit Post</h1>
      <EditPostForm />
    </Container>
  )
};

export default EditPost;
