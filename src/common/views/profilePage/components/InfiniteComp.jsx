import React from 'react';
import { InfiniteLoader, List } from 'react-virtualized';
import 'react-virtualized/styles.css';
import Post from '../../feed/components/Post';


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
        userimage: 'user.svg',
        username: '',
        imgname: '',
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
      <div style = { style } key = { dataObj.imgname } >
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
        <List
          ref = { registerChild }
          onRowsRendered = { onRowsRendered }
          rowRenderer = { rowRenderer }
          rowCount = { rowCount }
          rowHeight = { 350 }
          height = { 600 }
          width = { 300 }
        />
      )}
    </InfiniteLoader>
  )
}

export default InfiniteComp;
