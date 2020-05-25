import React from "react";

export default class Definitions {
    render(){
        const {data} = this.props;

        return(
            <dl>
                {data.map(function ({dt, dd}) {
                    return(
                    <React.Fragment>
                    <dt key={dt.id}>{dt}</dt>
                    <dd key={dd.id}>{dd}</dd>
                    </React.Fragment>)
                })
                }
            </dl>
        );
    }
}

// <React.Fragment>
//     <dt key={dt.id}>{dt}</dt>
//     <dd key={dd.id}>{dd}</dd>
// </React.Fragment>
