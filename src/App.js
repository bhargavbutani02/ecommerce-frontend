import { useAtom } from "jotai";
import "./App.css";
import Bestdeals from "./components/Bestdeals";
import PopularProducts from "./components/ProductList";
import Footer from "./components/footer";
import JustLaunched from "./components/JustLaunched";
import Modal from "./components/Modal";
import MainHeader from "./components/navbar/MainHeader";
import SubHeader from "./components/navbar/SubHeader";
import ShopbyBrand from "./components/ShopbyBrand";
import SupplimentShowCase from "./components/SupplimentShowCase";
import TopCategories from "./components/TopCategories";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { modalAtom } from "./jotai-provider";
import Discount from "./components/discount";

function App() {
  const [isOpen, setIsOpen] = useAtom(modalAtom);
  return (
    <>
      <ToastContainer />
      <Modal openModal={isOpen} setOpenModal={setIsOpen} />
      <MainHeader />
      <SubHeader />
      <SupplimentShowCase />
      <TopCategories />
      <PopularProducts />
      <Bestdeals />
      <JustLaunched />
      <ShopbyBrand />
      <Discount />
      <Footer />
    </>
  );
}

export default App;
