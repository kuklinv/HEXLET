import React, {Component} from 'react'
// import classes from './ButtonGroup.module.css';
import cn from 'classnames';

class ButtonGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            btnSide: null
        }
    }

    btnLeftHandler = (e) => () => {
        const target = e.target;
        const btnSide = target.innerText;
        if (btnSide === 'Left') {
            this.setState({isPressedLeft: true, isPressedRight: false, btnSide: btnSide});
        } else if (btnSide === 'Right') {
            this.setState({isPressedLeft: false, isPressedRight: true, btnSide: btnSide});
        } else {
            return;
        }
    }
    //     const pressedLeft = this.state.isPressedLeft;
    //     // const pressedRight = this.state.isPressedRight;
    //     pressedLeft ? this.setState({isPressedLeft: true, isPressedRight: false, btnSide: 'left'}) : this.setState({
    //         isPressedLeft: false,
    //         isPressedRight: true,
    //         btnSide: 'right'
    //     });


    render() {
        const {btnSide, active} = this.state;
        const btnClass = cn('btn', 'btn-secondary', {
            [`${btnSide}`]: true,
            'active': active
        });
        return (
            <div onClick={this.btnLeftHandler} className="btn-group" role="group">
                <button type="button" className={btnClass}>Left</button>
                <button type="button" className={btnClass}>Right</button>
            </div>
        )
    }
}

export default ButtonGroup;
