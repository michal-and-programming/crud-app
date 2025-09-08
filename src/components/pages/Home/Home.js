import { useSelector } from 'react-redux';
import {getAllPosts} from '../../../redux/postsRedux';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AllPostsList from '../../vievs/AllPostsList/AllPostsList';
import styles from './Home.module.scss';

const Home = () => {
  const posts = useSelector(getAllPosts);
  return(
    <Container>
      <div className={styles.wrapperName}>
        <h1>All posts</h1>
        <Link to={'/post/add'}>
          <button className="btn btn-outline-primary">Add post</button>
        </Link>
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
