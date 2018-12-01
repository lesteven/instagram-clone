import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import GridPost from '../components/GridPost';
import { clickGridPost } from '../../../redux/popUpModule/popUpModule';

class GridPostContainer extends Component {
  clickGrid = () => {
    const { data, clickGridPost } = this.props;
    clickGridPost(data);
  }
  keyPress = (e) => { 
    const { display } = this.props.popUp.gridPost;
    if (e.key === 'Escape' && display === 'flex') {
      this.clickGrid();
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.keyPress, false);
  }
  render() {
  const { popUp, data, style } = this.props;
    return (
      <div onClick = { this.clickGrid }>
        <GridPost data = { data }  style = { style }/>
      </div>
    )
  }
}


const mapState = ({ popUp }) => ({
  popUp,
});

const mapDispatch = {
  clickGridPost,
};

export default connect(mapState, mapDispatch)(GridPostContainer);
