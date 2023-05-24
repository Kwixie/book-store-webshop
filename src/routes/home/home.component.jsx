import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/footer.component";
import Directory from "../../components/directory/directory.component";
import "./home.component.scss";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Topplistan",
      imageUrl: "https://source.unsplash.com/Gs-tdnDyYKE",
    },
    {
      id: 2,
      title: "Alla Böcker",
      imageUrl: "https://source.unsplash.com/eeSdJfLfx1A",
    },
    {
      id: 3,
      title: "Fjodor Dostrojevskij",
      imageUrl:
        "https://bilder.akademibokhandeln.se/images_akb/9789174290882_766",
    },
    {
      id: 4,
      title: "Virginia Wolf",
      imageUrl:
        "https://bilder.akademibokhandeln.se/images_akb/9780241284643_383/orlando",
    },
    {
      id: 5,
      title: "Selma Lagerlöf",
      imageUrl:
        "https://bilder.akademibokhandeln.se/images_akb/9789174296051_383/gosta-berlings-saga",
    },
  ];

  return (
    <div>
      <h1 className="h1-title">Klassiska bokshoppen</h1>
      <Directory categories={categories} />
      <Footer />
      <Outlet />
    </div>
  );
};

export default Home;
