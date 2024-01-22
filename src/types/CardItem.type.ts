import { CardTypeEnum } from '../enum/CardTypeEnum/Card-type.enum';
import { MonsterAttributeEnum } from '../enum/MonsterAttributeEnum/Monster-attribute.enum';
import { MonsterTypeEnum } from '../enum/MonsterTypeEnum/Monster-type.enum';

export type CardItemType = {
  name: string;
  desc: string;
  level: number;
  atk: number;
  def: number;
  extraDeck: boolean;
  cardType: CardTypeEnum;
  monsterType: MonsterTypeEnum;
  monsterSubType: MonsterTypeEnum;
  monsterAttribute: MonsterAttributeEnum;
  cardImagePresignedUrl: string;
};
