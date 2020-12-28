import React, {Component} from 'react'
import cn from 'classnames'

// import classes from './ButtonGroup.module.css';

class BtnGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLeft: false,
            activeRight: false
        }
    }

    btnLeftHandler = (e) => {
        const target = e.target;
        const btnSide = target.textContent;
        if (btnSide === 'Left') {
            this.setState({activeLeft: true, activeRight: false});
        } else if (btnSide === 'Right') {
            this.setState({activeLeft: false, activeRight: true});
        } else {
            return;
        }
    }

    render() {
        const {activeLeft, activeRight} = this.state;
        const btnClassLeft = cn('btn', 'btn-secondary', 'left', {
            'active': activeLeft
        });
        const btnClassRight = cn('btn', 'btn-secondary', 'right', {
            'active': activeRight
        });
        return (
            <div onClick={this.btnLeftHandler} className="btn-group" role="group">
                <button type="button" className={btnClassLeft}>Left</button>
                <button type="button" className={btnClassRight}>Right</button>
            </div>
        )
    }
}

export default BtnGroup;

// btnLeftHandler = (e) => () => {
//     const target = e.target;
//     const btnSide = target.innerText;
//     if (btnSide === 'Left') {
//         this.setState({isPressedLeft: true, isPressedRight: false, btnSide: btnSide});
//     } else if (btnSide === 'Right') {
//         this.setState({isPressedLeft: false, isPressedRight: true, btnSide: btnSide});
//     } else {
//         return;
//     }
// }
//     const pressedLeft = this.state.isPressedLeft;
//     // const pressedRight = this.state.isPressedRight;
//     pressedLeft ? this.setState({isPressedLeft: true, isPressedRight: false, btnSide: 'left'}) : this.setState({
//         isPressedLeft: false,
//         isPressedRight: true,
//         btnSide: 'right'
//     });


//     render() {
//         const {btnSide, active} = this.state;
//         const btnClass = cn('btn', 'btn-secondary', {
//             [`${btnSide}`]: true,
//             'active': active
//         });
//         return (
//             <div onClick={this.btnLeftHandler} className="btn-group" role="group">
//                 <button type="button" className={btnClass}>Left</button>
//                 <button type="button" className={btnClass}>Right</button>
//             </div>
//         )
//     }
// }
//
// export default ButtonGroup;
