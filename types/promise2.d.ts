// Type definitions for promise2 fork of project promisejs.org
// Project: https://github.com/aminbros/promise2
// Definitions by: Hossein Amin <hossein@aminbros.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Support AMD require
declare module 'promise2' {
		export = Promise2;
}

declare var Promise2: Promise2.Ipromise2;

declare namespace Promise2 {

	export interface Ipromise2 {
		new <T>(resolver: (resolve: (value: T) => void, reject: (reason: any) => void) => void): IThenable2<T>;

		resolve: <T>(value: T) => IThenable2<T>;
		reject: <T>(value: T) => IThenable2<T>;
		all: (array: Array<IThenable2<any>>) => IThenable2<Array<any>>;
		denodeify: (fn: Function) => (...args: any[]) => IThenable2<any>;
		nodeify: (fn: Function) => Function;
	}

	export interface IThenable2<T> {
		then<R>(onFulfilled?: (value: T) => IThenable2<R>|R, onRejected?: (error: any) => IThenable2<R>|R): IThenable2<R>;
		catch<R>(onRejected?: (error: any) => IThenable2<R>|R): IThenable2<R>;
		done<R>(onFulfilled?: (value: T) => IThenable2<R>|R, onRejected?: (error: any) => IThenable2<R>|R): IThenable2<R>;
		nodeify<R>(callback: Function): IThenable2<R>;
    finally<U>(onFinally?: () => U | IThenable2<U>): IThenable2<U>;
    // new in promise2
    abort(): void;
	}
}
