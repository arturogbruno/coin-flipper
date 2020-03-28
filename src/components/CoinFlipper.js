import React, { Component } from 'react';
import Coin from './Coin';
import './CoinFlipper.css';

class CoinFlipper extends Component {
    static defaultProps = {
        coins: [
            { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
            { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" }
        ]
    }

    constructor(props) {
        super(props);

        this.state = {
            currCoin: null,
            numFlips: 0,
            numHeads: 0,
            numTails: 0
        }

        this.flipCoin = this.flipCoin.bind(this);
    }

    flipCoin() {
        let newCoin = this.props.coins[Math.floor(Math.random() * this.props.coins.length)];
        this.setState(currState => {
            return {
                currCoin: newCoin, 
                numFlips: currState.numFlips++,
                numHeads: currState.numHeads + (newCoin.side === 'heads' ? 1 : 0),
                numTails: currState.numTails + (newCoin.side === 'tails' ? 1 : 0)
            }
        });
    }

    render() {
        console.log(this.state);
        return(
            <div className="CoinFlipper">
                <h1>Let's flip a coin!</h1>
                <button onClick={this.flipCoin}>Flip the coin!</button>
                <Coin {...this.state.currCoin} />
                <p>Out of {this.state.numFlips} flips, there have been {this.state.numHeads} heads and {this.state.numTails} tails.</p>
            </div>
        )
    }
}

export default CoinFlipper;