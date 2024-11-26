import { MyDisplay } from '../core/myDisplay';
import { Util } from '../libs/util';
import { Parts } from './parts';
import './style.css'

export class Main extends MyDisplay {
  private _parts: Array<Parts> = [];

  // 常用漢字を100個
  private _kanji:Array<string> = [
    '一','二','三','四','五','六','七','八','九','十',
    '百','千','万','円','口','目','耳','手','足','力',
    '子','女','男','山','川','田','雨','火','水','木',
    '金','土','日','月','年','時','分','秒','先','今',
    '来','去','行','見','聞','言','読','書','話','食',
    '飲','買','売','帰','学','校','生','生','友','会',
    '社','自','動','車','家','道','駅','電','気','天',
    '地','人','国','海','空','旅','楽','知','愛','思',
    '心','体','病','院','薬','話','語','答','問','開',
    '閉','強','弱','明','暗','遠','近','早','遅','昼'
  ]
  private _yomi:Array<string> = [
    'いち','に','さん','し','ご','ろく','しち','はち','きゅう','じゅう',
'ひゃく','せん','まん','えん','くち','め','みみ','て','あし','ちから',
'こ','おんな','おとこ','やま','かわ','た','あめ','ひ','みず','き',
'きん','つち','ひ','つき','とし','じ','ふん','びょう','さき','いま',
'くる','さる','いく','みる','きく','いう','よむ','かく','はなす','たべる',
'のむ','かう','うる','かえる','がく','こう','せい','せんせい','とも','かい',
'しゃ','じ','どう','しゃ','いえ','みち','えき','でん','き','てん',
'ち','ひと','くに','うみ','そら','たび','たのしい','しる','あい','おもう',
'こころ','からだ','びょう','いん','くすり','はなす','ご','こたえる','とい','ひらく',
'しめる','つよい','よわい','あかるい','くらい','とおい','ちかい','はやい','おそい','ひる'
  ]

  constructor(opt: any) {
    super(opt);

    const num = 20
    for (let i = 0; i < num; i++) {
      const el = document.createElement('div');
      el.classList.add('l-item');
      this.el.appendChild(el);

      const key = Util.randomInt(0, this._kanji.length - 1);

      const p = new Parts({
        el: el,
        dispId: i,
      }, this._kanji[key], this._yomi[key]);

      this._parts.push(p);
    }
  }


  // 更新
  protected _update(): void {
    super._update();

  }
}


document.querySelectorAll('.l-main').forEach((el) => {
  new Main({
    el: el,
  })
})
