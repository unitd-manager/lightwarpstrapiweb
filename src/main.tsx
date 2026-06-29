import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";

// StrictMode is intentionally omitted: in dev mode it double-invokes mount
// lifecycles (mount -> unmount -> remount), which resets Framer Motion's
// whileInView/initial animations on every navigation and shows up as a
// visible flicker (content appears, vanishes for a frame, reappears) even
// though this never happens in a production build.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
