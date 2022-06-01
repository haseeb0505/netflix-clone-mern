import { Link, useHistory, useLocation } from "react-router-dom";
import "./movie.css";
// import Chart from "../../components/chart/Chart";
// import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { useContext, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import storage from "../../firebase";
import { updateMovie } from "../../context/movieContext/apiCalls";

export default function Movie() {
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [img, setImg] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const location = useLocation();
  const movies = location.state;
  const { dispatch } = useContext(MovieContext);
  const history = useHistory();
  console.log(uploaded);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  // upload files on storage and get download url
  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item?.label + item?.file?.name;

      const storageRef = ref(storage, `/items/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, item.file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMovie(movies.movie._id, movie, dispatch);
    history.push("/movies");
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newmovie">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={movies.movie.img} alt="" className="productInfoImg" />
            <span className="productName">{movies.movie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">
                {movies.movie._id.substring(0, 5)}
              </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Genre:</span>
              <span className="productInfoValue">{movies.movie.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Year:</span>
              <span className="productInfoValue">{movies.movie.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Limit: </span>
              <span className="productInfoValue">{movies.movie.limit}+</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input
              type="text"
              placeholder={movies.movie.title}
              name="title"
              onChange={handleChange}
            />
            <label>Description</label>
            <input
              type="text"
              placeholder={movies.movie.desc}
              name="desc"
              onChange={handleChange}
            />
            <label>Year</label>
            <input
              type="text"
              placeholder={movies.movie.year}
              name="year"
              onChange={handleChange}
            />
            <label>Genre</label>
            <input
              type="text"
              placeholder={movies.movie.genre}
              name="genre"
              onChange={handleChange}
            />
            <label>Limit</label>
            <input
              type="text"
              placeholder={movies.movie.limit}
              name="limit"
              onChange={handleChange}
            />
            <label>trailer</label>
            <input
              type="file"
              name="trailer"
              placeholder={movies.movie.trailer}
              onChange={(e) => setTrailer(e.target.files[0])}
            />
            <label>Video</label>
            <input
              type="file"
              name="video"
              placeholder={movies.movie.video}
              onChange={(e) => setVideo(e.target.files[0])}
            />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={movies.movie.img}
                name="img"
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>

              <input
                type="file"
                id="file"
                onChange={(e) => setImg(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>
            {uploaded === 3 ? (
              <button className="productButton" onClick={handleSubmit}>
                create
              </button>
            ) : (
              <button className="productButton" onClick={handleUpload}>
                Update
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
