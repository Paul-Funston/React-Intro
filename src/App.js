import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

const urls = [
  "https://raw.githubusercontent.com/mrspecht/media/main/img/the-matrix.jpg",
  "https://raw.githubusercontent.com/mrspecht/media/main/img/spider-man-no-way-home.jpg",
  "https://raw.githubusercontent.com/mrspecht/media/main/img/the-godfather.jpg",
  "https://raw.githubusercontent.com/mrspecht/media/main/img/jurassic-park.jpg"
];

const pageTitle = "React";
const bannerTitle = "Be Creative";
const bannerText ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

function App() {
  return (
    <>
      <div style={{minHeight: "calc(100vh - 60px)"}}>
        <Header title={pageTitle} />

        <Banner
          title={bannerTitle}
          text={bannerText}
        />   
        <Gallery urls={urls}/>
      </div>
      
      <Footer />
    </>
    
  );
}

export default App;
