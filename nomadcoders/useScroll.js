import { useState, useEffect } from 'react';

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const onScroll = () => {
      setState({ x: window.screenX, y: window.scrollY });
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

export default useScroll;

// function App() {
//   const { y } = useScroll();
//   return (
//     <div className="App" style={{ height: "1000vh" }}>
//       <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hi</h1>
//     </div>
//   );
// }
