import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
  hello: 'JS World',
});
});

app.get('/task2b', (req, res) => {
  const fullname = req.query.fullname;
var result = "Invalid fullname";
if (/[0123456789]/.test(fullname)) {
  return res.send(result);
}
const fullNameArray = fullname.split(" ");
if (((fullNameArray.length < 4) && (fullNameArray.length > 1)) ||
((fullNameArray.length == 1) && (fullNameArray[0].length != 0))){
  var count = 0;
  result = fullNameArray[fullNameArray.length - 1];
  while (count < fullNameArray.length - 1) {
    result += (" " + fullNameArray[count].substr(0, 1) + ".");
    count ++;
  }

}
res.send(result);
})
;

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
})
;
