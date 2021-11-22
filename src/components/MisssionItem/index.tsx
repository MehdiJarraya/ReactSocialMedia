import React from 'react';
import { ReactComponent as Fb } from '../../assets/Icons/fb.svg';
import { ReactComponent as Gift } from '../../assets/Icons/gift.svg';
import { ReactComponent as Ig } from '../../assets/Icons/ig.svg';
import { FbPostMission, IgStoryMission } from '../../generated/graphql';
import { useAppSelector } from '../../hooks';
import './styles.css';

const MissionItem: React.FC<FbPostMission | IgStoryMission> = (props) => {
    const { title, cashReward, __typename } = props
    const { video } = props as IgStoryMission;
    const { image } = props as FbPostMission;
    // The `state` arg is correctly typed as `RootState` already
    const language = useAppSelector(state => state.preference.language)
    return (
        <div className="missionItem">

            <div className="mediaContainer">
                {__typename === "FBPostMission" ? <img className="img" alt={image.alt || ""} src={image.src} /> :
                    <iframe title={video.alt || video.src} className="video"
                        src={video.src}>
                    </iframe>
                }
                <div className="mediaAction" >
                    {language === "en-emodeng" ? "Cash" : "Efectivo"}
                    {__typename === "FBPostMission" ? <Fb /> : <Ig />}
                </div>

            </div>
            <p className="title">{title}</p>
            <div className="rewardCard">
                <span >
                    <Gift />
                </span>
                <p className="rewardText">
                    {language === "en-emodeng" ? "Rewards" : "Recompensa"}
                </p>
                <p>$ {cashReward}</p>
            </div>

        </div>
    );
}
export default MissionItem
