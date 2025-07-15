// 目覚まし時計の状態
export const State = Object.freeze({
  NORMAL: Symbol("normal"), // 通常
  ALARM_SET: Symbol("alarmSet"), // アラームセット中
  ALARM_SOUNDING: Symbol("alarmSounding"), // アラーム鳴動中
  SNOOZING: Symbol("snoozing"), // スヌーズ中
});

// イベント時に発生するアクション
export const Action = Object.freeze({
  NONE: Symbol("none"), // 何もしない
  SOUND_ALARM: Symbol("soundAlarm"), // アラームを鳴らす
  STOP_ALARM: Symbol("stopAlarm"), // アラームを止める
});

// 補足:
// JavaScript では 列挙型を上記のように記述するが
// TypeScript では 列挙型を `type Action = "none" | "soundAlarm" | "stopAlarm";` のように代数的データ型を使って記述するのが一般的

class NormalState {
  setAlarm(context) {
    context.setState(new AlarmSetState());
    return Action.NONE;
  }

  cancelAlarm() {
    return Action.NONE;
  }

  reachedToAlarmTime() {
    return Action.NONE;
  }

  snooze() {
    return Action.NONE;
  }

  elapseSnoozeTime() {
    return Action.NONE;
  }
}

class AlarmSetState {
  setAlarm() {
    return Action.NONE;
  }

  cancelAlarm(context) {
    context.setState(new NormalState());
    return Action.NONE;
  }

  reachedToAlarmTime(context) {
    context.setState(new AlarmSoundingState());
    return Action.SOUND_ALARM;
  }

  snooze() {
    return Action.NONE;
  }

  elapseSnoozeTime() {
    return Action.NONE;
  }
}

class AlarmSoundingState {
  setAlarm() {
    return Action.NONE;
  }

  cancelAlarm(context) {
    context.setState(new NormalState());
    return Action.STOP_ALARM;
  }

  reachedToAlarmTime() {
    return Action.NONE;
  }

  snooze(context) {
    context.setState(new SnoozingState());
    return Action.STOP_ALARM;
  }

  elapseSnoozeTime() {
    return Action.NONE;
  }
}

class SnoozingState {
  setAlarm() {
    return Action.NONE;
  }

  cancelAlarm(context) {
    context.setState(new NormalState());
    return Action.NONE;
  }

  reachedToAlarmTime() {
    return Action.NONE;
  }

  snooze() {
    return Action.NONE;
  }

  elapseSnoozeTime(context) {
    context.setState(new AlarmSoundingState());
    return Action.SOUND_ALARM;
  }
}

// コンテキストクラス
export class AlarmClock {
  #state;

  constructor() {
    this.#state = new NormalState();
  }

  setState(state) {
    this.#state = state;
  }

  setAlarm() {
    return this.#state.setAlarm(this);
  }

  cancelAlarm() {
    return this.#state.cancelAlarm(this);
  }

  reachedToAlarmTime() {
    return this.#state.reachedToAlarmTime(this);
  }

  snooze() {
    return this.#state.snooze(this);
  }

  elapseSnoozeTime() {
    return this.#state.elapseSnoozeTime(this);
  }
}