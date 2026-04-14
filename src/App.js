import { PAGE_SECTIONS } from './config/pageSections';
import { SITE_HEAD_LINKS, SITE_META, structuredData } from './config/site';
import { useDocumentHead } from './hooks/useDocumentHead';
import Preloader from './components/common/Preloader';
import ProgressBar from './components/common/ProgressBar';
import ScrollTop from './components/common/ScrollTop';
import Footer from './components/common/Footer';
import Navbar from './components/layout/Navbar';

function App() {
  useDocumentHead({
    ...SITE_META,
    links: SITE_HEAD_LINKS,
    structuredData,
  });

  return (
    <>
      <Preloader />
      <ProgressBar />
      <Navbar />
      <main>
        {PAGE_SECTIONS.map(({ id, Component, props = {} }) => (
          <Component key={id} {...props} />
        ))}
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;
