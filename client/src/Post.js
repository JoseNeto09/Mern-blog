/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Post(){
  return(
     <div className="post">
     <div className="image">
        <img src="https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg?w=653" alt='img'/>
     </div>
    <div className="texts">
        <h2>full-house battery backup coming later this year</h2>
           <p className='info'>
            <a className="author">José Lopes</a>
            <time>2023-01-06 16:45</time>
           </p>
        <p className="summary">today at its special launch event, home backup power giant EcoFlow launched a flurry of new products, including a “Whole-Home Backup Power Solution.”</p>
    </div>
    </div>
  );
}

