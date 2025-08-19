// 以下全て再インポートとしてインポートしている
// defaultのgreetをgreetingとしてインポート
import greeting from './reexport.ts';
// Humanクラスをインポート
import { HumanEx04 } from './reexport.ts';
// 名前変更を伴うimport
import { birthDayEx04 as HappyBirthDay } from './reexport.ts';

const human = new HumanEx04('Alice', 30);
greeting(human);
HappyBirthDay(human);
greeting(human);