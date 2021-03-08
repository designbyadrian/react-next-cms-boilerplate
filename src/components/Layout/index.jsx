import Loader from 'components/PageLoader';
import Header from 'components/Header';
import MainMenu from 'components/MainMenu';

export default function Layout({ children }) {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Loader />
      <MainMenu />
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <Header />
        <main
          className="flex-1 relative overflow-y-auto focus:outline-none"
          tabindex="0"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
