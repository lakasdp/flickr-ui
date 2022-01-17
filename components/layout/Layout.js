import Seo from "./Seo";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  children,
  title = "Flickr UI",
  description = "Flickr Random Photo Gallery"
}) {

  return (
    <div id="layout">
      <Seo title={title} description={description}/>
      
      <Header />

      <main>{children}</main>

      <Footer />
      
    </div>
  );
}
