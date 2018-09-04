import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InfiniteLoader, List } from 'react-virtualized';


class InfiniteFeed extends Component {
  render() {
    const { feed } = this.props.profile; 
    return (
      <InfiniteLoader
        isRowLoaded = { isRowLoaded }
        loadMoreRows = { loadMoreRows }
        rowCount = { rowCount }    
      >
      {({ onRowsRendered, registerChild }) => (
        <List
          ref = { registerChild }
          onRowsRendered = { onRowsRendered }
          rowRenderer = { rowRenderer }
          rowCount = { rowCount }
          rowHeight = { 250 }
          height = { 400 }
          width = { 300 }
          />
      )}
      </InfiniteLoader>
    )
  }
}

const mapState = ({ profile }) => ({
  profile,
});

const mapDispatch = {

}

export default connect(mapState,mapDispatch)(InfiniteFeed);
