import styled from 'styled-components';
import eatIcon from '@assets/images/eat.svg';
import garbageIcon from '@assets/images/garbage.svg';
import sproutIcon from '@assets/images/sprout.svg';
import noMeatIcon from '@assets/images/no-meat.svg';

const StyledFeatureCard = styled.li`
  padding: 20px;
  background-color: #f8ddd7;
  text-align: start;

  &.advantages__item--farm {
    background-color: #e1edce;
  }
`;

const CardLabel = styled.span`
  position: relative;
  display: inline-block;
  margin-inline-start: 76px;
  margin-block: 0 4px;
  padding-inline: 10px;
  padding-block: 2px;
  background-color: #f75531;
  color: #ffffff;
  font-size: 14px;

  &.advantages__item--farm {
    background-color: #88aa4d;
  }

  &::before {
    position: absolute;
    display: block;
    inline-size: 56px;
    block-size: 56px;
    top: 0;
    left: -76px;
    content: "";    
    background-repeat: no-repeat;
    background-size: contain;
  }

  &.advantages__item--eat::before {
    background-image: url(${eatIcon});
  }

  &.advantages__item--garbage::before {
    background-image: url(${garbageIcon});
  }

  &.advantages__item--sprout::before {
    background-image: url(${sproutIcon});
  }

  &.advantages__item--no-meat::before {
    background-image: url(${noMeatIcon});
  }
`;

const CardTitle = styled.p`
  margin-inline-start: 76px;
  margin-block: 0 20px;
  font-weight: 700;
`;

const FeatureText = styled.p`
  margin-block: 0;
`;

export {
  StyledFeatureCard,
  CardLabel,
  CardTitle,
  FeatureText,
};