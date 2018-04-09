import React, { Component } from "react";

class RestaurantTags extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tags = this.props.tags;
    return (
      <div className="restaurant-tags">
        Perfect For:
        {tags.slice(0, 3).map((tag, idx) => (
          <div key={idx} className="tag">
            {tag.name}
          </div>
        ))}
      </div>
    )
  }
}

export default RestaurantTags;
