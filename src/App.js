import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
function App() {
  return (
    <div className="App">
      {/* Header */}
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header BackButton="/chat" />
            <ChatScreen />
            <Chats />
          </Route>
          <Route path="/chat">
            <Header BackButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
        {/* Tinder cards */}
        {/* button elow tinder card */}
        {/* Chat screen */}
        {/* Individual cht screen */}
      </Router>
    </div>
  );
}

export default App;
