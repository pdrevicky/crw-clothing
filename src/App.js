import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";
const Shop = () => {
  return <div>I am the shop</div>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* index mean that <Navigation /> and also <Home /> component will be rendered if the path match '/' */}
        <Route index element={<Home />}></Route>{" "}
        <Route path="shop" element={<Shop />}></Route>
        <Route path="sign-in" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
