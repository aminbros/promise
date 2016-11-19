/// <reference path="promise2.d.ts"/>

var prom = new Promise2<Boolean>((resolve, reject) => {
	resolve(true);
});

var prom2 = new Promise2<Boolean>((resolve, reject) => {
	resolve(true);
});

prom.then((val) => {
  console.log(val);
}).catch(() => {

});

var prom3 = Promise2.all([prom, prom2]);

prom3.then((resolve: Array<any>) => {

});

function withCallback(arg: any, cb: (e: Error, result: any) => void): void {
	cb(null, arg);
}
var prom4 = Promise2.denodeify(withCallback);
prom4('test').then(result => result);


var prom5 = new Promise2<boolean>((resolve, reject) => {});
prom5.finally(() => { })
prom5.abort();
