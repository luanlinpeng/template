import { EventEmitter } from "@/event/event-emitter";

export const eventEmitter = new EventEmitter();

export type IEventType =
  | "open_legend"
  | "change_Time";

export type CheckReadyEvents = "check_form";

/** 打开图例 */
export const openLegend = () => {
  eventEmitter.emit("open_legend");
};


/** 学科添加至layer时获取时间数据 */
export const changeTime = (res: object) => {
  eventEmitter.emit("change_Time", res);
};
