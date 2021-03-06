import Loader from 'components/PageLoader';
import Header from 'components/Header';
import MainMenu from 'components/MainMenu';

export default function Layout({ children }) {
  return (
    <div className="font-sans antialiased min-h-screen bg-gray-100">
      <Loader />
      <Header />
      <div className="flex flex-col md:flex-row">
        <MainMenu />

        <main className="flex-1 ml-48 pt-12">{children}</main>
      </div>
    </div>
  );
}
