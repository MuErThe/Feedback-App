import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import YoutubeEmbed from "./components/YoutubeEmbed";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from "./components/FeedbackList";
import AboutIconLink from "./components/shared/AboutIconLink";
import About from "./pages/About";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <YoutubeEmbed />
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIconLink />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
