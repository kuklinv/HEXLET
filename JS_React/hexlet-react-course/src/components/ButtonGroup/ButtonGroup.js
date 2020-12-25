import React, {Component} from 'react'
// import classes from './ButtonGroup.module.css';
import cn from 'classnames';

class ButtonGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPressedLeft: false,
            isPressedRight: false,
            btnSide: null
        }
    }

    btnLeftHandler = () => {
        const pressedLeft = this.state.isPressedLeft;
        // const pressedRight = this.state.isPressedRight;
        pressedLeft ? this.setState({isPressedLeft: true, isPressedRight: false, btnSide: 'left'}) : this.setState({
            isPressedLeft: false,
            isPressedRight: true,
            btnSide: 'right'
        });
    }
    // btnRightHandler = () => {
    //
    //
    // }

    render() {
        const {isPressedLeft, isPressedRight, btnSide} = this.state;
        const btnClass = cn('btn', 'btn-secondary', {
            'active': isPressedLeft,
            'left': isPressedLeft,
            'right': isPressedRight
        });
        return (
            <div className="btn-group" role="group">
                <button onClick={this.btnLeftHandler} type="button" className={btnClass}>Left</button>
                <button onClick={this.btnRightHandler} type="button" className={btnClass}>Right</button>
            </div>
        )
    }
}

export default ButtonGroup;
