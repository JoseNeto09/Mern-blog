/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {format} from "date-fns";
import {Link} from "react-router-dom";
export default function Post({_id,title,summary,cover,content,createdAt, author}){

  return(
     <div className="post">
     <div className="image">
        <Link to={`/post/${_id}`}>
        <img src={'http://localhost:5000/'+cover} alt='img'/>
        </Link>
     </div>
    <div className="texts">
       <Link to={`/post/${_id}`}>
        <h2>{title}</h2>
        </Link>
           <p className='info'>
            <a className="author">{author.username}</a>
            <time>{format(new Date(createdAt), 'dd.MM.y')}</time>
           </p>
        <p className="summary">{summary}</p>
    </div>
    </div>
  );
}