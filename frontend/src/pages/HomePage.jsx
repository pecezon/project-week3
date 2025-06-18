import Header from "../components/Header";
import HomeNav from "../components/HomeNav";
import BoardsContainer from "../components/BoardsContainer";
import Footer from "../components/Footer";
import NewBoardForm from "../components/NewBoardForm";
import { useState, useEffect } from "react";

function HomePage() {
  const [createModalClass, setCreateModalClass] = useState("closed");
  const [boardList, setBoardList] = useState([]);
  const baseAPIURL = import.meta.env.VITE_API_URL || "http://locahost:5432";

  useEffect(() => {
    const fetchBoardList = async () => {
      try {
        const response = await fetch(baseAPIURL + "/boards/get-all-boards");
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

    fetchBoardList();
  }, []);

  return (
    <main>
      <Header />
      <HomeNav setCreateModalClass={setCreateModalClass} />
      <BoardsContainer />
      <Footer />
      <NewBoardForm
        createModalClass={createModalClass}
        setCreateModalClass={setCreateModalClass}
      />
    </main>
  );
}

export default HomePage;
