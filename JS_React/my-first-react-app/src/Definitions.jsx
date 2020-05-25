// import { uniqueId } from 'lodash';
import React from "react";

export default class Definitions extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <dl>
        {data.map(({ dt, dd }) => (
          <React.Fragment key={{ dt, dd }.id}>
            <dt>{dt}</dt>
            <dd>{dd}</dd>
          </React.Fragment>
        ))}
      </dl>
    );
  }
}

// <React.Fragment>
//     <dt key={dt.id}>{dt}</dt>
//     <dd key={dd.id}>{dd}</dd>
// </React.Fragment>
