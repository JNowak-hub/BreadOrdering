import * as React from "react";
import { Component } from "react";
import { count } from "console";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.incrementState} className="btn btn-secondary">
          Increment
        </button>
      </div>
    );
  }

  // renderTags() {
  //   if (this.state.tags.length === 0) {
  //     return <p>There are no items in List !</p>;
  //   }
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag.id}>{tag.name}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  private getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  };

  private formatCount = () => {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  };

  private incrementState = () => {
    this.setState({ count: this.state.count + 1 });
  };
}
export default Counter;
