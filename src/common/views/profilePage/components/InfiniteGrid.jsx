import React from 'react';
import {
  InfiniteLoader,
  List,
  AutoSizer,
  WindowScroller,
} from 'react-virtualized';
import 'react-virtualized/styles.css';
import Post from '../../feed/components/Post';
import styles from '../css/infiniteGrid.css';

function InfiniteGrid ({
  hasNextPage,
  isNextPageLoading,
  list,
  loadNextPage
}) {
  
  const rowCount = hasNextPage? list.length + 1: list.length;
  const loadMoreRows = isNextPageLoading
    ? () => {}
    : loadNextPage
  const isRowLoaded = ({ index }) => {
    return !!list[index];
  };

  const rowRenderer = ({ index, key, style }) => {
    const dataArr = list[index]? list[index] : [{id:1}];
    return (
      <div style = { style } key = { index }>
        <div className = 'post-grid'>
        { dataArr.map(e => 
          <div className = 'grid-img-wrapper' key = { e.id }>
            <img src = { e.imgname } />
          </div>
        )}
        </div>
      </div>
    )
  }
  const gheight = 200;
  const gwidth = 600;
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
                rowHeight = { gheight }
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
