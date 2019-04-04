import React, { Component } from "react";
import "../styles/Header.css";

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid header">
                <div className="container text-center ">
                    <h1 className="display-4">Start clicking to play!</h1>
                    <p className="h3">Instructions: </p>
                <p className="lead"> Earning points is easy, just click on any image. Once one image is clicked
                the board will shuffle! If you click on the same image twice, you lose! Try to last a round without
                clicking any doubles to hit the top score and <strong>WIN!</strong></p>                </div>
            </div>

            
        )
    }
}
export default Header;