import { Link, useLocation } from "react-router-dom";
import "./product.css";
// import Chart from "../../components/chart/Chart";
// import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";

export default function Product() {
  const location = useLocation();
  const movie = location.state;

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={movie.movie.img} alt="" className="productInfoImg" />
            <span className="productName">{movie.movie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">
                {movie.movie._id.substring(0, 5)}
              </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Genre:</span>
              <span className="productInfoValue">{movie.movie.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Year:</span>
              <span className="productInfoValue">{movie.movie.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Limit: </span>
              <span className="productInfoValue">{movie.movie.limit}+</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input type="text" placeholder={movie.movie.title} />
            <label>Year</label>
            <input type="text" placeholder={movie.movie.year} />
            <label>Genre</label>
            <input type="text" placeholder={movie.movie.genre} />
            <label>Limit</label>
            <input type="text" placeholder={movie.movie.limit} />
            <label>trailer</label>
            <input type="file" placeholder={movie.movie.trailer} />
            <label>Video</label>
            <input type="file" placeholder={movie.movie.video} />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={movie.movie.img} alt="" className="productUploadImg" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
