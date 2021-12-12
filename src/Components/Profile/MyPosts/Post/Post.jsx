
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://i.ytimg.com/vi/EOiNkHRXJbs/maxresdefault.jpg' />
      {props.message}
      <div>
        <span>Like</span>
      </div>
      <div className={s.like}>
        <Post message='Hi, how are you?' />
        <Post message="It's my first post" />
      </div>
    </div>
  );


}

export default Post;