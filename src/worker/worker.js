export default function () {
  //   self.addEventListener("message", (e) => {
  //     console.log(e.data);
  //   });
  onmessage = (e) => {
    console.log(e.data);
    const { data, d3 } = e.data;
    const convertedFile = d3.csv(data);
    console.log(convertedFile);
    postMessage(data);
  };
}

/* 
  [
      {
       "date": "dasdnoashd",
       "temp": "24"
      }
  ]

*/
