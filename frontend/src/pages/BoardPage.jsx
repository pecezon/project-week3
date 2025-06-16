import Header from "../components/Header";
import BoardNav from "../components/BoardNav";
import KudosContainer from "../components/KudosContainer";
import Footer from "../components/Footer";

function BoardPage() {
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
