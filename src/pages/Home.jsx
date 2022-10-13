import Footer from "../components/Footer";
import Header from "../components/Header";
import MainHome from "../components/Home/MainHome";
import { useDispatch } from "react-redux";
import { showToto } from "../features/toto";

function Home() {
  const dispatch = useDispatch();
  dispatch(showToto());

  return (
    <div>
      <Header />
      <MainHome />
      <Footer />
    </div>
  );
}

export default Home;
