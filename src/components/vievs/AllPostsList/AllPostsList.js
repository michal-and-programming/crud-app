import styles from './AllPostsList.module.scss';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';

const AllPostsList = ({title, author, publishedDate, shortDescription, id}) => {
  return(
    <div className={styles.allPostsList}>
      <h2>{title}</h2>
      <h4>Author: <span>{author}</span></h4>
      <h4>Published: <span>{publishedDate}</span></h4>
      <p><span>{shortDescription}</span></p>
      <Link to={`/post/${id}`}>
        <Button />
      </Link>
    </div>
  )
}

export default AllPostsList;