import React, { Component } from 'react';
import './Game.css';
class Modal extends Component {



    render() {

        return (
            <div className="modal" id="myModal" data-backdrop="static" data-keyboard="false">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                <img src="https://media1.tenor.com/images/7d94cd074b11ad663338c33ad329787b/tenor.gif?itemid=7453669" />
          
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Modal;