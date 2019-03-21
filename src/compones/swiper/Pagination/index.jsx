import React from "react";
export default class Pagination extends React.Component {
  render() {
    const { dots, index } = this.props;
    return (
      <ul className='dots'>
        {dots.map((ele, Carunindex) => {
          return (
            <li
              className={index === Carunindex ? "select" : ""}
              key={Carunindex}
            />
          );
        })}
      </ul>
    );
  }
}
