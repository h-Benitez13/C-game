import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Toon from "./components/Card";
import Wrapper from "./components/Wrapper";
import character from "./character.json"

// first i want to shuffle the cards

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

class App extends Component {
  state = {
    character,
    score: 0,
    topScore: 0,
    clickedToon: []
  };

  clickedToon = id => {
    let clickedToon = this.state.clickedToon;
    let score = this.state.score;
    let topScore = this.state.topScore;


    if (clickedToon.indexOf(id) === -1) {
      clickedToon.push(id);
      console.log(clickedToon);

      this.handleIncrement();

      this.makeShuffle();

    } else if (this.state.score === 13) {
      alert("Winner Winner chicken Dinner, you clicked and hit the top score! Now leave...");
      this.setState({
        clickedToon: [],
        score: 0
      });
    } else {
      this.setState({
        score: 0,
        clickedToon: []
      });
      console.log("Doubled down");
      alert("You lose! Try clicked different images to hit the top score!");
    }

    if (score > topScore) {
      this.setState({
        topScore: score
      })
    }
  }


  // f(x) for auto incrememnt onClick

  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  }

  makeShuffle = () => {
    this.setState({ character: shuffle(character) })
  }

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Header />
        <Wrapper>
          {this.state.character.map(character => (
            <Toon
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              clickedToon={this.clickedToon}
            />
          ))}
        </Wrapper>
      </div>
    )
  }
}


export default App;


