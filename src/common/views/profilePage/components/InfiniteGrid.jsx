import React from 'react';
import {
  InfiniteLoader,
  List,
  AutoSizer,
  WindowScroller,
} from 'react-virtualized';
// import 'react-virtualized/styles.css';
import GridPostContainer from '../containers/GridPostContainer';
import styles from '../css/infiniteGrid.css';

function InfiniteGrid ({
  hasNextPage,
  isNextPageLoading,
  list,
  loadNextPage,
  screenSize,
}) {
  
  const rowCount = hasNextPage? list.length + 1: list.length;
  const loadMoreRows = isNextPageLoading
    ? () => {}
    : loadNextPage
  const isRowLoaded = ({ index }) => {
    return !!list[index];
  };

  const smallLen = (screenSize - 50)/3;
  const boxLen = (screenSize < 750)? smallLen: 230;
  const gwidth = (screenSize < 750)? screenSize : 750;

  const gridStyle = {
    height: boxLen,
    width: boxLen,
  };
  const rowRenderer = ({ index, key, style }) => {
    const dataArr = list[index]? list[index] : [{id:1}];
    return (
      <div style = { style } key = { index }>
        <div className = 'post-grid'>
        { dataArr.map(e => 
          <GridPostContainer key = { e.id } data = { e } 
            style = { gridStyle }/>
        )}
        </div>
      </div>
    )
  }
  return (
    <InfiniteLoader
      isRowLoaded = { isRowLoaded }
      loadMoreRows = { loadMoreRows }
      rowCount = { rowCount }
    >
      {({ onRowsRendered, registerChild }) => (
        <WindowScroller serverHeight = { 1000 } serverWidth = { gwidth }>
          {({ height, isScrolling, scrollTop }) => (
              <List
                ref = { registerChild }
                autoHeight
                onRowsRendered = { onRowsRendered }
                rowRenderer = { rowRenderer }
                rowCount = { rowCount }
                rowHeight = { boxLen }
                height = { height }
                width = { gwidth }
                scrollTop = { scrollTop }
              />
          )}
        </WindowScroller>
        )}
    </InfiniteLoader>
  )
}

export default InfiniteGrid;
