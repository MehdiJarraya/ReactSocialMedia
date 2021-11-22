import React, { useEffect } from 'react';
import { useGetMissionsQuery } from '../../generated/graphql';
import InfiniteScroll from '../InfiniteScroll';
import MissionList from './MissionList';

export interface OwnProps {
  id: number
}
const MissionListContainer: React.FC = () => {

  const { data, loading, fetchMore } = useGetMissionsQuery({
    variables: {
      feedInput: { offset: 0, limit: 4 }
    }
  });

  const loadMoreNumbers = () => {
    fetchMore({
      variables: {
        feedInput: { offset: data?.getFeed.items.length, limit: 4 },
        offset: data?.getFeed.items.length
      },
    });
  };


  useEffect(() => {
    console.log("use Effect data changed", data);

  }, [data])

  if (!data) {
    return <div>No data</div>;
  }
  return (
    <>
      {data?.getFeed.items.length}
      <InfiniteScroll
        hasMoreData={data?.getFeed.hasNextPage || false}
        isLoading={loading}
        onBottomHit={loadMoreNumbers}
        loadOnMount={false}
      >
        <MissionList data={data} />;
      </InfiniteScroll>
    </>
  )

};

export default MissionListContainer;



