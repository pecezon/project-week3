import Header from "../components/Header";
import BoardNav from "../components/BoardNav";
import KudosContainer from "../components/KudosContainer";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

function BoardPage() {
  const { id } = useParams();

  const fetchBoard = async () => {
    // try {
    //   const response = await fetch(baseAPIURL + "/boards/get-all-boards", {
    //     method: "GET",
    //   });
    //   if (!response.ok) {
    //     throw new Error(`Error fetching the board list: ${response.status}`);
    //   }
    //   const parsedResponse = await response.json();
    //   setBoardList(sort(parsedResponse, filterType, searchWord));
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const fetchKudos = async () => {};

  return (
    <main>
      <Header></Header>
      <BoardNav></BoardNav>
      <KudosContainer />
      <Footer></Footer>
    </main>
  );
}

export default BoardPage;
