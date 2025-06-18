import Header from "../components/Header";
import HomeNav from "../components/HomeNav";
import BoardsContainer from "../components/BoardsContainer";
import Footer from "../components/Footer";
import NewBoardForm from "../components/NewBoardForm";
import { useState, useEffect } from "react";

function HomePage() {
  const [createModalClass, setCreateModalClass] = useState("closed");
  const [boardList, setBoardList] = useState([]);
  const baseAPIURL = import.meta.env.VITE_API_URL || "http://locahost:5001";

  const fetchBoardList = async () => {
    try {
      const response = await fetch(baseAPIURL + "/boards/get-all-boards", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`Error fetching the board list: ${response.status}`);
      }
      const parsedResponse = await response.json();
      console.log(parsedResponse);
      setBoardList(parsedResponse);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBoardList();
  }, []);

  return (
    <main>
      <Header />
      <HomeNav setCreateModalClass={setCreateModalClass} />
      <BoardsContainer boardList={boardList} />
      <Footer />
      <NewBoardForm
        createModalClass={createModalClass}
        setCreateModalClass={setCreateModalClass}
        baseAPIURL={baseAPIURL}
        fetchBoardList={fetchBoardList}
      />
    </main>
  );
}

export default HomePage;
