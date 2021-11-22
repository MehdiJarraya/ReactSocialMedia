import * as React from 'react';
import { FbPostMission, GetMissionsQuery, IgStoryMission } from '../../generated/graphql';
import { groupBy } from '../../utils';
import MissionItem from '../MisssionItem';
import './styles.css';

interface Props {
  data: GetMissionsQuery;
}

const MissionList: React.FC<Props> = ({ data }) => {
  if (!data.getFeed.items) {
    return <div>No data available</div>;
  }

  return (
    <div>
      {Object.keys(groupBy(data.getFeed.items, i => i.date)).map(key =>
        <div key={key}>
          <p>{key} </p>
          {groupBy(data.getFeed.items, i => i.date)[key].map((item: FbPostMission | IgStoryMission, index) =>
            <MissionItem key={index} {...item} />
          )}
        </div>
      )}
    </div >
  );
};

export default MissionList;