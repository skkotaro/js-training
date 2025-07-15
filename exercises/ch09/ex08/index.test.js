import { AlarmClock, Action } from './index_fix.js';

describe('AlarmClock 状態遷移テスト', () => {
  let clock;

  beforeEach(() => {
    clock = new AlarmClock();
  });

  test('通常 -> アラームセット -> アラーム鳴動 -> スヌーズ -> 通常', () => {
    expect(clock.setAlarm()).toBe(Action.NONE); // 通常 -> アラームセット
    expect(clock.reachedToAlarmTime()).toBe(Action.SOUND_ALARM); // アラームセット -> アラーム鳴動
    expect(clock.snooze()).toBe(Action.STOP_ALARM); // アラーム鳴動 -> スヌーズ
    expect(clock.elapseSnoozeTime()).toBe(Action.SOUND_ALARM); // スヌーズ -> アラーム鳴動
    expect(clock.cancelAlarm()).toBe(Action.STOP_ALARM); // アラーム鳴動 -> 通常
  });

  test('通常 -> アラームセット -> 通常', () => {
    expect(clock.setAlarm()).toBe(Action.NONE); // 通常 -> アラームセット
    expect(clock.cancelAlarm()).toBe(Action.NONE); // アラームセット -> 通常
  });

  test('アラーム鳴動中にキャンセル', () => {
    clock.setAlarm();
    clock.reachedToAlarmTime();
    expect(clock.cancelAlarm()).toBe(Action.STOP_ALARM); // アラーム鳴動 -> 通常
  });

  test('スヌーズ中にキャンセル', () => {
    clock.setAlarm();
    clock.reachedToAlarmTime();
    clock.snooze();
    expect(clock.cancelAlarm()).toBe(Action.NONE); // スヌーズ -> 通常
  });

  test('スヌーズ中にスヌーズ時間経過でアラーム鳴動に戻る', () => {
    clock.setAlarm();
    clock.reachedToAlarmTime();
    clock.snooze();
    expect(clock.elapseSnoozeTime()).toBe(Action.SOUND_ALARM); // スヌーズ -> アラーム鳴動
  });

  test('通常状態での無効な操作', () => {
    expect(clock.cancelAlarm()).toBe(Action.NONE); // 通常でキャンセル
    expect(clock.reachedToAlarmTime()).toBe(Action.NONE); // 通常でアラーム時刻到達
    expect(clock.snooze()).toBe(Action.NONE); // 通常でスヌーズ
    expect(clock.elapseSnoozeTime()).toBe(Action.NONE); // 通常でスヌーズ時間経過
  });

  test('アラームセット中での無効な操作', () => {
    clock.setAlarm();
    expect(clock.snooze()).toBe(Action.NONE); // アラームセット中でスヌーズ
    expect(clock.elapseSnoozeTime()).toBe(Action.NONE); // アラームセット中でスヌーズ時間経過
  });

  test('アラーム鳴動中での無効な操作', () => {
    clock.setAlarm();
    clock.reachedToAlarmTime();
    expect(clock.reachedToAlarmTime()).toBe(Action.NONE); // アラーム鳴動中でアラーム時刻到達
    expect(clock.setAlarm()).toBe(Action.NONE); // アラーム鳴動中でアラームセット
  });

  test('スヌーズ中での無効な操作', () => {
    clock.setAlarm();
    clock.reachedToAlarmTime();
    clock.snooze();
    expect(clock.setAlarm()).toBe(Action.NONE); // スヌーズ中でアラームセット
    expect(clock.snooze()).toBe(Action.NONE); // スヌーズ中でスヌーズ
    expect(clock.reachedToAlarmTime()).toBe(Action.NONE); // スヌーズ中でアラーム時刻到達
  });
});