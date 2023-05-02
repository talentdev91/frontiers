import "./assets/styles/base.css";
import Header from "./widgets/Header";
import Footer from "./widgets/Footer";
import BodyContent from "./widgets/content";
import Announcement from "./widgets/Announcement";

export default function App() {
  return (
    <div className="bg-white tracking-tight text-gray-900 antialiased dark:bg-slate-900 dark:text-slate-300">
      <Announcement />
      <Header />
      <BodyContent />
      <Footer />
    </div>
  );
}
