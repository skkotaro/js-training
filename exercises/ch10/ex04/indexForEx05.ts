// 以下全て再インポートとしてインポートしている
// defaultのgreetをgreetingとしてインポート
import greeting from './module.ts';
import { HumanEx04NameChanged } from './module.ts';
// 名前変更を伴うimport
import { birthDayEx04NameChanged as HappyBirthDay } from './module.ts';

const human = new HumanEx04NameChanged('Alice', 30);
greeting(human);
HappyBirthDay(human);
greeting(human);