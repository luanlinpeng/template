import type { IEventType } from ".";

export class EventEmitter {
  public callbacks: { [key in IEventType]: Function[] } = {} as any;

  public on(event: IEventType, fn: Function): this {
    if (!this.callbacks[event]) {
      this.callbacks[event] = [];
    }

    this.callbacks[event] = [...this.callbacks[event], fn];

    return this;
  }

  public emit(event: IEventType, ...args: any): this {
    const callbacks = this.callbacks[event];

    if (callbacks) {
      callbacks.forEach((callback) => callback.apply(this, args));
    }

    return this;
  }

  public off(event: IEventType, fn?: Function): this {
    const callbacks = this.callbacks[event];

    if (callbacks) {
      if (fn) {
        this.callbacks[event] = callbacks.filter((callback) => callback !== fn);
      } else {
        delete (this.callbacks as any)[event];
      }
    }

    return this;
  }

  destroy(): void {
    this.callbacks = {} as any;
  }
}
