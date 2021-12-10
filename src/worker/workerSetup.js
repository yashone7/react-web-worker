export default class WebWorker {
  constructor(worker) {
    // console.log(worker);
    const code = worker.toString();
    // console.log(code);
    const blob = new Blob(["(" + code + ")()"]);
    // console.log(blob);
    // console.log(URL.createObjectURL(blob));
    return new Worker(URL.createObjectURL(blob));
  }
}
