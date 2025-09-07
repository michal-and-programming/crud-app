import { useSelector } from 'react-redux';
import {getAllPosts} from '../../../redux/postsRedux';
import { Container } from 'react-bootstrap';
import AllPostsList from '../../vievs/AllPostsList/AllPostsList';
import styles from './Home.module.scss';

const Home = () => {
  const posts = useSelector(getAllPosts);
  return(
    <Container>
      <div>
        <h1>All posts</h1>
      </div>
      <div className={styles.postWrapper}>
        {posts.map(post => (
          <AllPostsList
            key={post.id} 
            title={post.title} 
            author={post.author} 
            publishedDate={post.publishedDate} 
            shortDescription={post.shortDescription}
            id={post.id}
          />
        ))}
      </div>
    </Container>
  );
};

export default Home;
