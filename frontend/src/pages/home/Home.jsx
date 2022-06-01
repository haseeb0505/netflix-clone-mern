import React, { useEffect } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import axios from "axios";

export const Home = ({ type }) => {
  const [lists, setLists] = React.useState([]);
  const [genre, setGenre] = React.useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `list${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
          {
            headers: {
              token:
                "bearer " +
                JSON.parse(localStorage.getItem("user")).accesstoken,
            },
          }
        );
        setLists(res.data);
        // setLists = res.data;
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list, i) => (
        <List list={list} key={i} />
      ))}
    </div>
  );
};
