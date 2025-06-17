import Header from "../components/Header";
import HomeNav from "../components/HomeNav";
import BoardsContainer from "../components/BoardsContainer";
import Footer from "../components/Footer";
import NewBoardForm from "../components/NewBoardForm";
import { useState } from "react";

function HomePage() {
  const [createModalClass, setCreateModalClass] = useState("closed");

  return (
    <main>
      <Header />
      <HomeNav />
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
