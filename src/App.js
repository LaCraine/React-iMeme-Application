import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Hot from "./components/pages/Hot";
import Regular from "./components/pages/Regular";
import Add from "./components/pages/Add";
import Footer from "./components/Footer";
import Error404 from "./components/pages/Error404";

import meme_1 from "./assets/images/meme_1.jpg";
import meme_2 from "./assets/images/meme_2.jpg";
import meme_3 from "./assets/images/meme_3.jpg";
import meme_4 from "./assets/images/meme_4.jpg";
import meme_5 from "./assets/images/meme_5.jpg";
import meme_6 from "./assets/images/meme_6.jpg";
import meme_7 from "./assets/images/meme_7.jpg";
import meme_8 from "./assets/images/meme_8.jpg";
import meme_9 from "./assets/images/meme_9.jpg";
import meme_10 from "./assets/images/meme_10.png";
import meme_11 from "./assets/images/meme_11.jpg";
import meme_12 from "./assets/images/meme_12.jpg";
import meme_13 from "./assets/images/meme_13.jpg";
import meme_14 from "./assets/images/meme_14.jpg";
import meme_15 from "./assets/images/meme_15.jpg";
import meme_16 from "./assets/images/meme_16.jpg";
import meme_17 from "./assets/images/meme_17.jpg";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memesDatabase: [
        {
          id: 1,
          title: "2021 - best season ever",
          upvotes: 22,
          downvotes: -20,
          image: meme_1,
        },
        {
          id: 2,
          title: "How could you do this",
          upvotes: 47,
          downvotes: -51,
          image: meme_2,
        },
        {
          id: 3,
          title: "Sweet potato",
          upvotes: 18,
          downvotes: -13,
          image: meme_3,
        },
        {
          id: 4,
          title: "Summertime",
          upvotes: 65,
          downvotes: -61,
          image: meme_4,
        },
        {
          id: 5,
          title: "No worries!",
          upvotes: 17,
          downvotes: -13,
          image: meme_5,
        },
        {
          id: 6,
          title: "Weird dad",
          upvotes: 48,
          downvotes: -43,
          image: meme_6,
        },
        {
          id: 7,
          title: "I'm just an uber driver",
          upvotes: 18,
          downvotes: -5,
          image: meme_7,
        },
        {
          id: 8,
          title: "It can get worse",
          upvotes: 32,
          downvotes: -47,
          image: meme_8,
        },
        {
          id: 9,
          title: "Useless example",
          upvotes: 46,
          downvotes: -43,
          image: meme_9,
        },
        {
          id: 10,
          title: "Who needs comments?",
          upvotes: 16,
          downvotes: -14,
          image: meme_10,
        },
        {
          id: 11,
          title: "True 4k",
          upvotes: 73,
          downvotes: -139,
          image: meme_11,
        },
        {
          id: 12,
          title: "He's a hero",
          upvotes: 11,
          downvotes: -5,
          image: meme_12,
        },
        {
          id: 13,
          title: "Here they are",
          upvotes: 38,
          downvotes: -35,
          image: meme_13,
        },
        {
          id: 14,
          title: "Be fit",
          upvotes: 13,
          downvotes: -19,
          image: meme_14,
        },
        {
          id: 15,
          title: "Transparent",
          upvotes: 13,
          downvotes: -12,
          image: meme_15,
        },
        {
          id: 16,
          title: "Wizard",
          upvotes: 19,
          downvotes: -29,
          image: meme_16,
        },
        {
          id: 17,
          title: "Safety place",
          upvotes: 18,
          downvotes: -12,
          image: meme_17,
        },
      ],
    };

    this.dislikeCounter = this.dislikeCounter.bind(this);
    this.likeCounter = this.likeCounter.bind(this);
  }

  // DISLIKE BUTTON FUNCTION

  dislikeCounter = (id) => {
    let memesDatabase = [...this.state.memesDatabase];
    
    memesDatabase.forEach((meme) => {
      if (meme.id === id) {
        meme.downvotes = meme.downvotes - 1;
      }
    });
    this.setState({ memesDatabase });
  };

  //LIKE BUTTON FUNCTION

  likeCounter = (id) => {
    let memesDatabase = [...this.state.memesDatabase];

    memesDatabase.forEach((meme) => {
      if (meme.id === id) {
        meme.upvotes = meme.upvotes + 1;
      }
    });
    this.setState({ memesDatabase });
  };

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/regular">
            <Regular
              memesDatabase={this.state.memesDatabase}
              dislikeCounter={this.dislikeCounter}
              likeCounter={this.likeCounter}
            />
          </Route>

          <Route exact path="/hot">
            <Hot 
            memesDatabase={this.state.memesDatabase}
            dislikeCounter={this.dislikeCounter}
            likeCounter={this.likeCounter}
            />
          </Route>

          <Route exact path="/add">
            <Add />
          </Route>

          <Route path="*">
            <Error404 />
          </Route>
          
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
