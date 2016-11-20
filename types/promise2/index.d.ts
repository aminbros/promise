// Type definitions for promise2 fork of project promisejs.org
// Project: https://github.com/aminbros/promise2
// Definitions by: Hossein Amin <hossein@aminbros.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Support AMD require
declare module 'promise2' {
		export = Promise2;
}

declare var Promise2: Promise2.Ipromise;

declare namespace Promise2 {

	export interface Ipromise {
		new <T>(resolver: (resolve: (value?: T) => void, reject: (reason?: any) => void, bindabort: (onabort: Function) => void) => void): IThenable<T>;

		resolve<T>(value: T): IThenable<T>;
		reject<T>(value: T): IThenable<T>;
		resolve(): IThenable<void>;
		reject(): IThenable<void>;
		all: (array: Array<IThenable<any>>) => IThenable<Array<any>>;
		denodeify: (fn: Function) => (...args: any[]) => IThenable<any>;
		nodeify: (fn: Function) => Function;
    Aborted: any; // identifier
	}

	export interface IThenable<T> {
		then<R>(onFulfilled?: (value: T) => IThenable<R>|R, onRejected?: (error: any) => IThenable<R>|R): IThenable<R>;
		catch<R>(onRejected?: (error: any) => IThenable<R>|R): IThenable<R>;
		done<R>(onFulfilled?: (value: T) => IThenable<R>|R, onRejected?: (error: any) => IThenable<R>|R): IThenable<R>;
		nodeify<R>(callback: Function): IThenable<R>;
    finally<U>(onFinally?: () => U | IThenable<U>): IThenable<U>;
    // new in promise2
    abort(): void;
	}
}
