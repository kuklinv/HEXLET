import React, {Component} from 'react'
import classes from './ButtonGroup.module.css';

class ButtonGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnLeftActive: "btn btn-secondary left active",
            btnLeftUnActive : "btn btn-secondary left",
            btnRightActive: "btn btn-secondary right active",
            btnRightUnActive: "btn btn-secondary right"
        }
    }

    btnLeftHandler = () => {

    }
    btnRightHandler = () => {


    }
    render() {
        return (
            <div className="btn-group" role="group">
                <button onClick={this.btnLeftHandler} type="button" className={this.state.btnLeftUnActive}>Left</button>
                <button onClick={this.btnRightHandler} type="button" className={this.state.btnRightUnActive}>Right</button>
            </div>
        )
    }
}

export default ButtonGroup;
