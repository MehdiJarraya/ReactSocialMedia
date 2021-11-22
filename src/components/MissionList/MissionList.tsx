import * as React from 'react';
import { FbPostMission, GetMissionsQuery, IgStoryMission } from '../../generated/graphql';
import { groupBy } from '../../utils';
import MissionItem from '../MisssionItem';
import './styles.css';

interface Props {
  data: GetMissionsQuery;
}

// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const MissionList: React.FC<Props> = ({ data }) => {
  if (!data.getFeed.items) {
    return <div>No data available</div>;
  }

  return (
    <div>
      {Object.keys(groupBy(data.getFeed.items, i => i.date)).map(key =>
        <div key={key}>
          {/* es-GT */}
          <p className="date">{`${new Date(key).getDay()}  ${new Date(key).toLocaleDateString(localStorage.getItem("language")||"", { month: 'long'})} ${new Date(key).getFullYear()} ` }  </p>
          {groupBy(data.getFeed.items, i => i.date)[key].map((item: FbPostMission | IgStoryMission, index) =>
            <MissionItem key={index} {...item}  />
          )}
        </div>
      )}
    </div >
  );
};

export default MissionList;