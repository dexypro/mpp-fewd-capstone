import React from "react";
import $ from "jquery";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }

  /* 
    rubric10
    If the “Toggle Slide Show” switch is checked, the product carousel
    should automatically move forward one slide every 3 seconds
*/
  /*
    rubric11
    Whenever the product carousel changes it slide, it should do in
    an animated way 
*/
  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
    if (!this.state.isChecked) {
      console.log("Toggle Slide Show: ON");
      $("#carouselExampleIndicators").carousel({
        interval: 3000
      });
    } else {
      console.log("Toggle Slide Show: OFF");
      $("#carouselExampleIndicators").carousel(`pause`);
    }
  };
  render() {
    return (
      /*
        rubric06
        The user should see a toggle switch labeled “Toggle Slide Show”
    */
      <label htmlFor="slideShowToggle">
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.toggleChange}
          id="slideShowToggle"
        />
        Toggle Slide Show
      </label>
    );
  }
}

export { Checkbox };
