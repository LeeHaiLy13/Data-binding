# reduce

```js
array.reduce((accumulator, currentValue, currentIndex, array) => {
  // logic xử lý
}, initialValue);

//Dùng để biến đổi mảng thành một giá trị duy nhất (có thể là bất cứ thứ gì: một số, một chuỗi, một đối tượng, hoặc thậm chí là một mảng mới.)

accumulator:	Giá trị được "tích lũy" sau mỗi lần lặp
currentValue:	Phần tử hiện tại trong mảng
currentIndex:	(Tuỳ chọn) Vị trí của phần tử hiện tại
array:	(Tuỳ chọn) Chính là mảng gốc
initialValue:	Giá trị khởi tạo ban đầu cho accumulator

const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, value) => acc + value, 0);
console.log(sum); // Output: 15

```

# forEach

```js
array.forEach((element, index, array) => {
  // Thao tác với element
  // (vét cạn, chạy từ đầu đến cuối)
  //Thực hiện một hành động cho mỗi phần tử => không tạo thành mảng mới
  // có thể sử dụng forEach để tính tổng, đếm số lượng, hoặc thực hiện các phép tính tích lũy
});

element:	Phần tử hiện tại trong mảng
index:	(Tùy chọn) Vị trí của phần tử trong mảng
array:	(Tùy chọn) Chính là mảng đang được duyệt
const arr = ['a', 'b', 'c'];

arr.forEach((item, index) => {
  console.log(`Phần tử tại index ${index} là ${item}`);
});

// Output:
// Phần tử tại index 0 là a
// Phần tử tại index 1 là b
// Phần tử tại index 2 là c

```

# for...of

```js
for (const element of iterable) {
  // Thao tác với element
}
iterable: mảng, chuỗi, Set, Map, v.v.
element: từng phần tử trong iterable

const fruits = ['apple', 'banana', 'cherry'];
for (const fruit of fruits) {
  console.log(fruit);
}
// Output:
// apple
// banana
// cherry

```

# filter

```js
array.filter((element, index, array) => {
  return condition;
});
=>  DÙng khi muốn lọc mảng, chỉ giữ lại những phần tử đáp ứng điều kiện

element:	Phần tử hiện tại trong mảng
index	: (Tuỳ chọn) Vị trí của phần tử
array:	(Tuỳ chọn) Chính là mảng đang xử lý
//filter() trả về một mảng mới chỉ chứa các phần tử thoả điều kiện (condition là true).
// luôn trả về mảng mới và không làm thay đổi mảng gốc
// Nếu hàm callback trả về true thì phần tử đó sẽ đc thêm vào trong mảng, ngược lại sẽ bị xoá bỏ

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(number => {
  return number % 2 === 0; // Trả về true nếu số là số chẵn
});

console.log(evenNumbers); // Kết quả: [2, 4, 6, 8, 10]
console.log(numbers);     // Mảng gốc không thay đổi: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

# map

```js
// arr.map(callback(currentValue, index, array), thisArg)

Dùng map() khi bạn muốn biến đổi tất cả các phần tử trong một mảng thành một dạng khác và nhận về một mảng chứa các kết quả biến đổi đó.

// callback: Đây là một hàm được gọi cho mỗi phần tử trong mảng. Hàm này có thể nhận tới ba đối số:
// currentValue (bắt buộc): Giá trị của phần tử hiện tại đang được xử lý trong mảng.
// index (tùy chọn): Chỉ số của phần tử hiện tại đang được xử lý trong mảng.
// array (tùy chọn): Mảng mà map() đang được gọi.
// thisArg (tùy chọn): Một giá trị để sử dụng làm this khi thực thi hàm callback

const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8]
console.log(numbers);       // Output: [1, 2, 3, 4] (mảng gốc không thay đổi)
```
