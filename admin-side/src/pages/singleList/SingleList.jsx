import { Link, useLocation, useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import "./singleList.css";
import { updateList } from "../../context/listContext/apiCalls";
import { ListContext } from "../../context/listContext/ListContext";
// import Chart from "../../components/chart/Chart";
// import { productData } from "../../dummyData";

export default function SingleList() {
  const location = useLocation();
  const list = location.state;
  const [updatedList, setUpdatedList] = useState(null);
  const { dispatch } = useContext(ListContext);
  const history = useHistory();

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdatedList({ ...updatedList, [e.target.name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    updateList(list.list._id, updatedList, dispatch);
    history.push("/lists");
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newlist">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{list.list.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{list.list._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Genre:</span>
              <span className="productInfoValue">{list.list.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">type:</span>
              <span className="productInfoValue">{list.list.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>List Title</label>
            <input
              type="text"
              name="title"
              placeholder={list.list.title}
              onChange={handleChange}
            />
            <label>type</label>
            <input
              type="text"
              name="type"
              placeholder={list.list.type}
              onChange={handleChange}
            />
            <label>Genre</label>
            <input
              type="text"
              name="genre"
              placeholder={list.list.genre}
              onChange={handleChange}
            />
          </div>
          <div className="productFormRight">
            <button className="productButton" onClick={handleClick}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
