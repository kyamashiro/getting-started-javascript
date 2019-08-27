/**
 * コンストラクタの説明
 * @constructor
 * @classdesc クラスの説明
 * @param {string} suit - パラメータ
 * @param {string} rank - パラメータ
 */
class Card {
  // eslint-disable-next-line require-jsdoc
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }
}

const card = new Card('ハート', 'A');

console.log(card);
