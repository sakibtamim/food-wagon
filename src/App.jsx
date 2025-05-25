import AppInstall from "./components/appInstall/AppInstall";
import Banner from "./components/banner/Banner";
import BestDeal from "./components/bestdeal/BestDeal";
import Discount from "./components/discount/Discount";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HowWork from "./components/howWork/HowWork";
import Order from "./components/order/Order";
import Popular from "./components/popular/Popular";
import Resturants from "./components/resturants/Resturants";
import SearchFood from "./components/searchFood/SearchFood";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Discount />
      <HowWork />
      <Popular />
      <Resturants />
      <SearchFood />
      <AppInstall />
      <BestDeal />
      <Order />
      <Footer />
    </>
  );
}

export default App;
