import Header from "../header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="layout-grid">{children}</main>
    </>
  );
};

export default Layout;
