import React from 'react';
import {
  InfiniteLoader,
  List,
  AutoSizer,
  WindowScroller,
} from 'react-virtualized';
import 'react-virtualized/styles.css';
import Post from '../../feed/components/Post';
// import styles from '../css/infiniteComp.css';

function InfiniteComp ({
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
      dataObj = {
        ...list[index],
        userimage : '/user.svg', 
      };
    }
    return (
      <div style = { style } key = { dataObj.imgname + '/' + index } >
        <Post data = { dataObj } />
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
        <WindowScroller>
          {({ height, isScrolling, scrollTop }) => (
          <AutoSizer disableHeight>
            {({ width }) => (
              <List
                ref = { registerChild }
                autoHeight
                onRowsRendered = { onRowsRendered }
                rowRenderer = { rowRenderer }
                rowCount = { rowCount }
                rowHeight = { 600 }
                height = { height }
                width = { width }
                scrollTop = { scrollTop }
              />
            )}
          </AutoSizer>
          )}
        </WindowScroller>
        )}
    </InfiniteLoader>
  )
}

export default InfiniteComp;
