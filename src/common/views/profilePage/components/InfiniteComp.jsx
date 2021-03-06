import React from 'react';
import {
  InfiniteLoader,
  List,
  AutoSizer,
  WindowScroller,
} from 'react-virtualized';
// import styles from 'react-virtualized/styles.css';
import Post from '../../feed/components/Post';


function InfiniteComp ({
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

  const rowRenderer = ({ index, key, style }) => {
    let dataObj;

    if (!isRowLoaded({ index })) {
      dataObj = {
        userimage: '/user.svg',
        username: '',
        imgname: '/placeholder.svg',
        created_at: '', 
      }
    }
    else {
      dataObj = list[index];
    }
    return (
      <div style = { style } key = { dataObj.imgname + '/' + index } >
        <Post data = { dataObj } screenSize = { screenSize } />
      </div>
    )
  }
  const size = (screenSize < 600)? screenSize: 600;
  return (
    <InfiniteLoader
      isRowLoaded = { isRowLoaded }
      loadMoreRows = { loadMoreRows }
      rowCount = { rowCount }
    >
      {({ onRowsRendered, registerChild }) => (
        <WindowScroller serverHeight = { 1000 } serverWidth = { size }>
          {({ height, isScrolling, scrollTop }) => (
              <List
                ref = { registerChild }
                autoHeight
                onRowsRendered = { onRowsRendered }
                rowRenderer = { rowRenderer }
                rowCount = { rowCount }
                rowHeight = { size }
                height = { height }
                width = { size }
                scrollTop = { scrollTop }
              />
          )}
        </WindowScroller>
        )}
    </InfiniteLoader>
  )
}

export default InfiniteComp;
