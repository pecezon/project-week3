import Header from "../components/Header";
import HomeNav from "../components/HomeNav";
import BoardsContainer from "../components/BoardsContainer";
import Footer from "../components/Footer";
import NewBoardForm from "../components/NewBoardForm";
import { useState, useEffect } from "react";

function HomePage() {
  const [createModalClass, setCreateModalClass] = useState("closed");
  const [boardList, setBoardList] = useState([]);
  const [filterType, setFilterType] = useState("all");
  const baseAPIURL = import.meta.env.VITE_API_URL || "http://localhost:5001";

  const sort = (arr, filterType) => {
    if (filterType === "sort") {
    }
    if (filterType === "recent") {
      arr = arr
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 6);
    } else if (filterType !== "all") {
      arr = arr.filter((b) => b.category === filterType);
    }

    return arr;
  };

  const fetchBoardList = async (filterType) => {
    try {
      const response = await fetch(baseAPIURL + "/boards/get-all-boards", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`Error fetching the board list: ${response.status}`);
      }
      const parsedResponse = await response.json();
      setBoardList(sort(parsedResponse, filterType));
      console.log(boardList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBoardList(filterType);
  }, []);

  return (
    <main>
      <Header />
      <HomeNav
        setCreateModalClass={setCreateModalClass}
        fetchBoardList={fetchBoardList}
        filterType={filterType}
        setFilterType={setFilterType}
      />
      <BoardsContainer
        boardList={boardList}
        fetchBoardList={fetchBoardList}
        filterType={filterType}
      />
      <Footer />
      <NewBoardForm
        createModalClass={createModalClass}
        setCreateModalClass={setCreateModalClass}
        baseAPIURL={baseAPIURL}
        fetchBoardList={fetchBoardList}
        filterType={filterType}
      />
    </main>
  );
}

export default HomePage;
