import React, { Component } from "react"
import styled from "styled-components"
import MaterialSlider from "@material-ui/lab/Slider"

const Wrapper = styled.div`
  position: absolute;
  top: -50px;
  left: 100px;
  width: 200px;
`

class Slider extends Component {
  static defaultProps = {
    onChange: () => {},
  }
  state = { value: 100 }

  handleChange = (e, value) => {
    this.setState({ value }, () => {
      this.props.onChange(this.state.value)
    })
  }

  render() {
    return (
      <Wrapper>
        <MaterialSlider value={this.state.value} onChange={this.handleChange} />
      </Wrapper>
    )
  }
}

export default Slider
