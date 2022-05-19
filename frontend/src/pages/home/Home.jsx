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
                "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODI0NDRkYzM0MzE2ZmM4M2E2MWY2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mjg3MTk5NywiZXhwIjoxNjUzMzAzOTk3fQ.lv6YqUY2uBsI-ewZeTsKAG2XqwzeAmcu4cMu5uK1AL0",
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
      <Featured type={type} />
      {lists.map((list, i) => (
        <List list={list} key={i} />
      ))}
    </div>
  );
};
