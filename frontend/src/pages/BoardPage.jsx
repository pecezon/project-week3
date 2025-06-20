import Header from "../components/Header";
import BoardNav from "../components/BoardNav";
import KudosContainer from "../components/KudosContainer";
import Footer from "../components/Footer";
import NewKudoForm from "../components/NewKudoForm";
import CommentModal from "../components/CommentModal";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function BoardPage() {
  const { id } = useParams();
  const baseAPIURL = import.meta.env.VITE_API_URL || "http://localhost:5001";

  const [curBoard, setCurBoard] = useState({});
  const [kudoList, setKudoList] = useState([]);

  const [createKudoModalClass, setCreateKudoModalClass] = useState("closed");

  const fetchBoard = async () => {
    try {
      const response = await fetch(
        `${baseAPIURL}/boards/get-board-by-id/${id}`,
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error(`Error fetching the board list: ${response.status}`);
      }
      const parsedResponse = await response.json();
      setCurBoard(parsedResponse);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchKudos = async () => {
    try {
      const response = await fetch(
        `${baseAPIURL}/kudos/get-kudos-by-board-id/${id}`,
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error(`Error fetching the board list: ${response.status}`);
      }
      const parsedResponse = await response.json();
      setKudoList(
        parsedResponse
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .sort((a, b) => {
            if (a.pinned && !b.pinned) {
              return -1; // a (true) comes before b (false)
            } else if (!a.isActive && b.isActive) {
              return 1; // b (true) comes before a (false)
            } else {
              return 0; // Maintain relative order if both are true or both are false
            }
          })
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchKudos();
    // fetchBoard();
  }, []);

  return (
    <main>
      <Header></Header>
      <BoardNav
        boardName={curBoard.title}
        setCreateKudoModalClass={setCreateKudoModalClass}
      ></BoardNav>
      <KudosContainer kudoList={kudoList} fetchKudos={fetchKudos} />
      <Footer></Footer>
      <NewKudoForm
        boardId={id}
        fetchKudoList={fetchKudos}
        baseAPIURL={baseAPIURL}
        createKudoModalClass={createKudoModalClass}
        setCreateKudoModalClass={setCreateKudoModalClass}
      />
    </main>
  );
}

export default BoardPage;
