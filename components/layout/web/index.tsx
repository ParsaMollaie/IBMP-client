import NavBar from './Navbar';

const WebLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default WebLayout;
