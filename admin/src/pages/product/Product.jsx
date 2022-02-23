import { Link, useLocation } from 'react-router-dom';
import './product.css';
import { Publish } from '@material-ui/icons';

export default function Product() {
  const location = useLocation();
  const { movie } = location.state;
  console.log(`${JSON.stringify(movie)}`);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={movie.img} alt="" className="productInfoImg" />
            <span className="productName">{movie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">id:</div>
              <div className="productInfoValue">{movie._id}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">genre:</div>
              <div className="productInfoValue">{movie.genre}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">year:</div>
              <div className="productInfoValue">{movie.year}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">limit:</div>
              <div className="productInfoValue">{movie.limit}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input type="text" placeholder={movie.title} />
            <label>Year</label>
            <input type="text" placeholder={movie.year}></input>
            <label>Genre</label>
            <input type="text" placeholder={movie.genre}></input>
            <label>Limit</label>
            <input type="text" placeholder={movie.limit}></input>
            <label>Trailer</label>
            <input type="file" placeholder={movie.trailer}></input>
            <label>Video</label>
            <input type="file" placeholder={movie.video}></input>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={movie.img} alt="" className="productUploadImg" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: 'none' }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
