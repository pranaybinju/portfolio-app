import Info from "./Info";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Contact from "./Contact";

const Main = () => {
  console.log("hey");
  return (
    <div style={{ padding: "2rem" }}>
      <Info />
      <div style={{ display: "flex" }}>
        <Skills />
        <Achievements />
        <Contact />
      </div>
    </div>
  );
};

export default Main;
