```js
var x; // var bị hoisting kéo lên đầu trước tiên, gtri mặc định là undefined

if (x == 5) {
  // x lúc này là undefined (undefined == 5 false), nên điều kiện sai
  x = 5; // không chạy dòng này
}
console.log(x); // in ra undefined
```

```js
console.log(x); // ReferenceError
const x = 3;

const x = 3;
console.log(x); //output: 3
```

```js
let z = 37 + 7; // 44
console.log(z);

let x = "37" + 7; // "377" Ngoại lệ
console.log(x);

let y = "37" - 7; // 30 (trừ + các toán tử khác, JavaScript không chuyển đổi giá trị số thành chuỗi.)
console.log(y);
```

## LOOPS

```js
for (let i = 1; i <= 5; i++) {
  //khởi tạo đk ok -> chạy
  console.log("Lần lặp thứ:", i);
}

let i = 0;
while (i < 3) {
  //khởi tạo đk ok -> chạy
  console.log("while:", i);
  i++;
}

let i = 0; //khởi tạo -> chạy 1 vòng -> xét đk
do {
  console.log("do...while:", i);
  i++;
} while (i < 3);

let i = 0; //nếu i=3 bỏ qua bước console.log(n) tiếp tục thực hiện các bước tiếp theo
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}
```

### FUNCTION

```js
function carTypes(name) {
  return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
}
//?  là toán tử điều kiện - kiểm tra xem name === "Honda" không? nếu không thì trả về Sorry, we don't sell...
const car = { myCar: "Saturn", getCar: carTypes("yamaha"), special: sales };
```

```js
function map(f, a) { // f:hàm, a: mảng   => tạo ra mảng mới
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {  //length= 5
    result[i] = f(a[i]);
  }
  return result;
}

const numbers = [0, 1, 2, 5, 10]; //B1:duyệt qua numbers
const cubedNumbers = map(function (x) {
  return x * x * x; //(i= 0->4)
}, numbers);
console.log(cubedNumbers); // [0, 1, 8, 125, 1000]

//Đệ quy
function loop(x){
  if(x >= 10){
    return;
  }
  console.log("output: ", x);
  loop(x +1):
}
loop(0);

//
function foo(i) {
  if (i < 0) {
    return; // Điều kiện dừng (base case)
  }
  console.log(`begin: ${i}`); // In ra trước khi gọi đệ quy
  //các lệnh trước lời gọi đệ quy được thực thi theo thứ tự từ i cao đến thấp
  foo(i - 1);                 // Gọi đệ quy
  console.log(`end: ${i}`);   // In ra sau khi gọi đệ quy
  //các lệnh sau lời gọi đệ quy chỉ được thực thi khi hàm bắt đầu trả về (từ i thấp nhất trở lên)
}
foo(3);
// Logs:
// begin: 3
// begin: 2
// begin: 1
// begin: 0
// end: 0
// end: 1
// end: 2
// end: 3


// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {  //Closure (Đóng gói)
    return `${name} scored ${num1 + num2}`;
  }
//có thể truy cập biến ở hàm bên ngoài(hàm cha), tạo phạm vi riêng, tránh xung đột
  return add();
}

console.log(getScore()); // "Chamakh scored 5"

```

```js
//Hàm truyền thống
const addTraditional = function (a, b) {
  return a + b;
};
// Hàm mũi tên (nhiều tham số)
const addArrow = (a, b) => a + b;
console.log(addArrow(5, 3)); // Output:

------------------------

// Hàm truyền thống
const greetTraditional = function(name) {
  return "Hello, " + name + "!";
};

// Hàm mũi tên 1 tham số
const greetArrow = name => "Hello, " + name + "!";


```

# BÀI TẬP

```js
/*1. Viết hàm `frequency` trả về số lần xuất hiện của mỗi phần tử trong mảng:
const arr = ['HTML', 'HTML', 'CSS', 'JavaScript', 'CSS'];
console.log(frequency(arr)); // { HTML: 2, CSS: 2, JavaScript: 1 }
*/
const arr = ["HTML", "HTML", "CSS", "JavaScript", "CSS"];
const counts = {}; //khai báo biến để lưu trữ kq

//----------  FOR....OF

function frequency() {
  for (const item of arr) {
    counts[item] = (counts[item] || 0) + 1;
  }
  return counts;
}
console.log(frequency());
//dùng để duyệt qua các phần tử của các đối tượng có thể lặp (iterable) như: Array, String, Map, Set, arguments,

//-------------- Reduce

const frequencys = arr.reduce((count, item) => {
  counts[item] = (counts[item] || 0) + 1;
  return counts;
}, {});
console.log(frequencys);

//được dùng để rút gọn một mảng thành một giá trị duy nhất (giá trị này có thể là: 1 số, 1 chuỗi, 1 đt, 1 mảng khác)
//cách hoạt động: thực thi reduce(rút gọn) trên mỗi phần tử của mảng, tích luỹ kết quả từ mỗi lần gọi

//----------- forEach

arr.forEach((item) => {
  counts[item] = (counts[item] || 0) + 1;
});
console.log(counts);

//được sử dụng khi muốn lặp qua một mảng và thực hiện một hành động cho mỗi phần tử, nhưng không cần tạo một mảng mới.
//forEach dùng để thực hiện trực tiếp các hành động cho mỗi phần tử, không phải để tạo ra một giá trị mới (như reduce()) hay một mảng mới (như map())
// nếu gán const f = arr.forEach sẽ trả về undefined.

//----------Filter

const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = arr.filter((item, index, array) => {
  return arr.indexOf(item) === index;
});
console.log(unique);

//indexOf(item) luôn trả về chỉ mục (vị trí) xuất hiện đầu tiên của giá trị a trong mảng.
//index là chỉ mục (vị trí) của phần tử hiện tại mà filter đang xử lý.
//nếu 2 chỉ mục = nhau => lần đầu tiên xuất hiện và được giữ lại và ngược lại
```

```js
------1. Viết hàm `frequency` trả về số lần xuất hiện của mỗi phần tử trong mảng:
const arr = ['HTML', 'HTML', 'CSS', 'JavaScript', 'CSS'];
console.log(frequency(arr)); // { HTML: 2, CSS: 2, JavaScript: 1 }

const arr = ["HTML", "HTML", "CSS", "JavaScript", "CSS"];
const counts = {};

function frequency(array) {
  for (const item of array) {
    counts[item] = (counts[item] || 0) + 1;
  }
  return counts;
}
console.log(frequency(arr));

//------------------
const frequencys = arr.reduce((count, item) => {
  counts[item] = (counts[item] || 0) + 1;
  return counts;
}, {});
console.log(frequencys);

//-------------------

arr.forEach((item) => {
  counts[item] = (counts[item] || 0) + 1;
});
console.log(counts);
```

```js
------------2. Viết hàm `unique` loại bỏ các giá trị trùng lặp trong mảng:

const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(unique(arr)); // [ 1, 2, 3, 4, 5 ]


const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = arr.filter((item, index, array) => {
  return arr.indexOf(item) === index;
});
console.log(unique);

//-----------------
const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = arr.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, []);
console.log(unique);

```

```js
-----------3. Viết hàm `sum` tính tổng các phần tử trong mảng:

const arr = [0, 1, 2, 3];
console.log(sum(arr)); // 6

const arr = [0, 1, 2, 3];
let sum = 0;
arr.forEach((item) => {
  sum += item;
});
console.log(sum);


const arr = [0, 1, 2, 3];
const sum = 0;
const total = arr.reduce((sum, item) => {
  return (sum += item);
}, 0);
console.log(total);
```

```js
-------------4. Viết hàm `average` tính trung bình cộng các phần tử trong mảng:
const arr = [1, 2, 3, 4, 5];
console.log(average(arr)); // 3


const arr = [1, 2, 3, 4, 5];
const acc = 0;
const sum = arr.reduce((acc, item) => {
  return (acc += item);
}, 0);
const average = sum / arr.length;
console.log(average);


const arr = [1, 2, 3, 4, 5];
let sum = 0;
arr.forEach((item) => {
  sum += item;
});
const average = sum / arr.length;
console.log(average);

```
