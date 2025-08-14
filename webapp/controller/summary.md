```js
|| nếu toán hạng bên trái true => trả về true, k thì trả về bên phải
(chạy từ trái qua phải)

for: (có break, continue => có thể dừng ở bất cứ chỗ nào), có bước nhảy(i++)
forEach: (vét cạn, chạy từ đầu đến cuối)
for...of: (có break, continue )
```

# Mảng

```js
//Array.prototype.at()

const array = [5, 12, 8, 130, 44];

let index = 2;
console.log(`An index of ${index} returns ${array.at(index)}`);
//=> An index of 2 returns 8

index = -2;
console.log(`An index of ${index} returns ${array.at(index)}`);
//=>An index of -2 returns 130

//.at(index) trên mảng (Array.prototype.at()) cho phép bạn truy cập phần tử tại một vị trí nhất định trong mảng — đặc biệt là nó hỗ trợ cả chỉ số âm.
//nếu index là số âm, nó sẽ đếm ngược từ cuối mảng (bắt đầu từ -1)
```

```js
//Array.prototype.concat()

hợp nhất hai hoặc nhiều mảng

// Có thể nối các mảng hoặc phần tử không cùng kiểu dữ liệu, vì nó không kiểm tra kiểu, mà chỉ nối các giá trị vào nhau theo thứ tự.
```

```js
//  Array.prototype.copyWithin()

sao chép một phần của mảng này đến một vị trí khác trong cùng một mảng và trả về mảng này mà không sửa đổi độ dài của nó.

const array = ["a", "b", "c", "d", "e"];

// Copy to index 0 the element at index 3
console.log(array.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]

copyWithin(target, start, end)

// target: Vị trí sẽ được ghi đè bởi dữ liệu được sao chép
// start: Vị trí bắt đầu sao chép
// end: Vị trí kết thúc sao chép — nếu bỏ qua sẽ sao chép đến hết mảng
```

```js
// Array.prototype.every()

Kiểm tra xem tất cả các phần tử trong mảng có vượt qua bài kiểm tra được triển khai bởi hàm được cung cấp hay không. Phương thức này trả về giá trị Boolean
// phải thoả mãn tất cả các ĐK thì mới trả về true, ngược lại trả về fales
every(callbackFn)
```

```js
// Array.prototype.fill()

 Gán một giá trị cho tất cả hoặc một phần tử của mảng, ghi đè lên các phần tử hiện có, mà không thay đổi độ dài mảng.

fill(value)
fill(value, start)
fill(value, start, end)

const array = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array.fill(6));
// Expected output: Array [6, 6, 6, 6]

// value:Giá trị sẽ được dùng để gán vào mảng
// start (tùy chọn)	Vị trí bắt đầu gán (mặc định là 0)
// end (tùy chọn)	Vị trí kết thúc (không bao gồm nó)

```

```js
// Array.prototype.find()

Tìm kiếm phần tử đầu tiên trong mảng thỏa mãn một điều kiện nhất định.
// trả về giá trị của phần tử đầu tiên tìm thấy mà làm cho hàm callback trả về true.
// nếu không tìm thấy phần tử nào thỏa mãn điều kiện, nó sẽ trả về undefined.
// Ngay khi tìm thấy phần tử đầu tiên thỏa mãn, nó sẽ dừng lại và trả về kết quả (không lặp qua các phần tử còn lại).

const array = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;

console.log(array.findIndex(isLargeNumber));
// Expected output: 3 (trả về chỉ số đầu tiên thoả mãn - 130)

```

```js
// Array.prototype.findIndex()

Trả về CHỈ SỐ của phần tử đầu tiên trong mảng thỏa mãn hàm kiểm tra được cung cấp. Nếu không có phần tử nào thỏa mãn hàm kiểm tra, -1 sẽ được trả về.

const array = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array.findIndex(isLargeNumber));
// Expected output: 3 (trả về chỉ số đầu tiên thoả mãn - 130)

```

```js
// Array.prototype.findLast()

Lặp lại mảng theo thứ tự NGƯỢC LẠI và trả về GIÁ TRỊ  của phần tử đầu tiên thỏa mãn hàm kiểm tra được cung cấp. Nếu không có phần tử nào thỏa mãn hàm kiểm tra, thì sẽ trả về undefined

const array = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array.findIndex(isLargeNumber));
// Expected output: 3 (trả về chỉ số đầu tiên thoả mãn - 130)

```

```js
// Array.prototype.findLastIndex()

Lặp lại mảng theo thứ tự NGƯỢC LẠI và trả về CHỈ SỐ của phần tử đầu tiên thỏa mãn hàm kiểm tra được cung cấp. Nếu không có phần tử nào thỏa mãn hàm kiểm tra, -1 sẽ được trả về.

const array = [5, 12, 50, 130, 44];
const isLargeNumber = (element) => element > 45;
console.log(array.findLastIndex(isLargeNumber));
// Expected output: 3
// Index of element with value: 130

```

```js
// Array.prototype.includes()

Xác định xem mảng có bao gồm một giá trị nhất định trong các mục nhập của nó hay không, trả về true hoặc false tùy theo trường hợp.

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// Expected output: true

console.log(pets.includes("at"));
// Expected output: false

```

```js
// Array.prototype.indexOf()

indexOf(searchElement)
indexOf(searchElement, fromIndex)
// searchElement: Giá trị cần tìm
// fromIndex: Vị trí bắt đầu tìm kiếm (mặc định là 0)

Trả về CHỈ MỤC đầu tiên mà phần tử nhất định có thể được tìm thấy trong mảng hoặc trả về -1 nếu không có phần tử đó.

const beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(beasts.indexOf("bison"));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf("bison", 2));
// Expected output: 4

console.log(beasts.indexOf("giraffe"));
// Expected output: -1

```

```js
// Array.prototype.join()

Trả về một chuỗi mới bằng cách nối tất cả các phần tử trong mảng này, phân tách bằng dấu phẩy hoặc một chuỗi phân cách được chỉ định.
Nếu mảng chỉ có một phần tử, thì phần tử đó sẽ được trả về mà không cần sử dụng dấu phân cách.

const elements = ["Fire", "Air", "Water"];
console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"

```

```js
// Array.prototype.keys()

Trả về : một Iterator object ((trình lặp)) chứa các chỉ số (index) của các phần tử trong mảng.

const arr = ["a", "b", "c"];
const iterator = arr.keys();

for (const key of iterator) {
 console.log(key);
}

```

```js
// Array.prototype.lastIndexOf()

trả về CHỈ SỐ cuối cùng mà phần tử được tìm thấy trong mảng, hoặc -1 nếu phần tử đó không tồn tại. Mảng được tìm kiếm ngược lại, bắt đầu từ fromIndex.

lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)
//searchElement:  Phần tử cần xác định vị trí trong mảng.
// fromIndex: Chỉ số bắt đầu từ số 0 để bắt đầu tìm kiếm ngược
const arr = ["a", "b", "c"];
const iterator = arr.keys();

for (const key of iterator) {
 console.log(key);
}

```

```js
// Array.prototype.pop()

Xóa phần tử cuối cùng khỏi mảng và trả về phần tử đó. Phương thức này thay đổi độ dài của mảng.

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();
console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]

```

```js
// Array.prototype.push()

Thêm các phần tử được chỉ định vào cuối mảng và trả về độ dài mới của mảng.

const animals = ["pigs", "goats", "sheep"];

const count = animals.push("cows");
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

```

```js
// Array.prototype.reduceRight()

Giống như .reduce(), nhưng thay vì chạy từ trái sang phải, nó sẽ chạy từ phải sang trái trong mảng.

cconst arr = [1, 2, 3];
console.log(arr.reduce((acc, val) => acc - val)); // ((1 - 2) - 3) = -4
console.log(arr.reduceRight((acc, val) => acc - val)); // ((3 - 2) - 1) = 0

const words = ['a', 'b', 'c'];

console.log(words.reduce((acc, val) => acc + val));      // "abc"
console.log(words.reduceRight((acc, val) => acc + val)); // "cba"

```

```js
// Array.prototype.reverse()  //reverse(đảo ngược)

Đảo ngược một mảng tại chỗ và trả về tham chiếu đến cùng mảng đó, phần tử mảng đầu tiên giờ trở thành phần tử cuối cùng, và phần tử mảng cuối cùng trở thành phần tử đầu tiên.
// Nói cách khác, thứ tự các phần tử trong mảng sẽ được đảo ngược theo hướng ngược lại với hướng đã nêu trước đó.
--> làm thay đổi mảng gốc

const arr = [1, 2, 3];
const result = arr.reverse();

console.log(result); // [3, 2, 1]
console.log(arr);    // [3, 2, 1] ← mảng gốc bị thay đổi

```

```js
// Array.prototype.toReversed()  //
là bản copy của reverse
--> không làm thay đổi mảng gốc

const arr = [1, 2, 3];
const result = arr.toReversed();

console.log(result); // [3, 2, 1]
console.log(arr);    // [1, 2, 3] ← mảng gốc giữ nguyên


```

```js
// Array.prototype.shift()

Xóa phần tử đầu tiên khỏi mảng và trả về phần tử đã xóa đó. Phương thức này thay đổi độ dài của mảng.

const array = [1, 2, 3];

const firstElement = array.shift();

console.log(array);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1


```

```js
// Array.prototype.unshift()

thêm các phần tử được chỉ định vào đầu một mảng và trả về độ dài mới của mảng.

const array = [1, 2, 3];

console.log(array.unshift(4, 5));
// Expected output: 5

console.log(array);
// Expected output: Array [4, 5, 1, 2, 3]

```

```js
// Array.prototype.slice()

Trích xuất một phần tử của mảng thành một mảng mới mà không làm thay đổi mảng ban đầu.

array.slice(start, end)
// start (tuỳ chọn): chỉ số bắt đầu (tính từ 0).
// end (tuỳ chọn): chỉ số kết thúc (không bao gồm phần tử ở vị trí này). => không tính end
// Nếu không truyền start, mặc định là 0.
// Nếu không truyền end, mặc định là chiều dài mảng (array.length).

const fruits = ["apple", "banana", "cherry", "date"];

const sliced = fruits.slice(1, 3);
console.log(sliced);       // ["banana", "cherry"]
console.log(fruits);       // ["apple", "banana", "cherry", "date"]


```

```js
// Array.prototype.splice()
Dùng để thêm, xóa hoặc thay thế phần tử trong mảng.
--> có làm thay đổi mảng gốc
--> trả về mảng phần tử bị xoá

array.splice(start, deleteCount, item1, item2, ...)
// start: Vị trí bắt đầu (index) trong mảng.
// deleteCount: Số lượng phần tử muốn xóa từ vị trí start.
// item1, item2,...: (tuỳ chọn) Phần tử bạn muốn chèn vào tại vị trí start.

------------Xoá phần tử----------

const fruits = ["apple", "banana", "cherry", "date"];
const removed = fruits.splice(1, 2);

console.log(removed); // ["banana", "cherry"]
console.log(fruits);  // ["apple", "date"]

------------thêm phần tử----------

const numbers = [1, 2, 5];
numbers.splice(2, 0, 3, 4);
console.log(numbers); // [1, 2, 3, 4, 5]

------------Thay thế phần tử----------

const arr = ["a", "b", "c"];
arr.splice(1, 1, "x", "y");
console.log(arr); // ["a", "x", "y", "c"]


```

```js
// Array.prototype.toSpliced()
--> là mảng copy từ mảng splice
Trả về một mảng mới (đã thay đổi) nhưng không làm thay đổi mảng ban đầu

toSpliced(start, skipCount, item1)
/
const fruits = ["apple", "banana", "cherry", "date"];

const sliced = fruits.slice(1, 3);
console.log(sliced);       // ["banana", "cherry"]
console.log(fruits);       // ["apple", "banana", "cherry", "date"]


```

```js
// Array.prototype.some()
Kiểm tra xem ít nhất 1 phần tử trong mảng có đáp ứng đủ đk của hàm hay không? chỉ cần 1 phần tử trả về true thì => true, nếu không trả về fales

const array = [1, 2, 3, 9, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true

```

```js
// Array.prototype.every()
Kiểm tra xem TẤT CẢ các phần tử trong mảng có thỏa mãn một điều kiện nhất định hay không.
// trả về true nếu tất cả các phần tử thoả mãn điều kiện
// trả về fales khi chỉ cần 1 phần tử không thoả mãn
// Ngay khi tìm thấy một phần tử không thỏa mãn điều kiện, nó sẽ dừng lại và trả về false (không lặp qua các phần tử còn lại).

const array = [1, 2, 3, 9, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true

```

```js
// Array.prototype.sort()
Sắp xếp các phần tử trong mảng tại chỗ (tức là làm thay đổi mảng gốc) và trả về chính mảng đó sau khi đã được sắp xếp.

array.sort([compareFunction])
//compareFunction (tùy chọn): là một hàm dùng để xác định cách so sánh hai phần tử.

const arr = [10, 2, 30];
arr.sort((a, b) => a - b); // tăng dần
console.log(arr); // [2, 10, 30]

```

```js
// Array.prototype.toSorted()
là bản copy của Sort
trả về một mảng mới với các phần tử được sắp xếp theo thứ tự tăng dần.

const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b) => a - b);
console.log(sortedValues); // [1, 2, 10, 21]
console.log(values); // [1, 10, 21, 2]

```

```js
// Array.prototype.toLocaleString()
trả về một chuỗi đại diện cho các phần tử trong mảng,

const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b) => a - b);
console.log(sortedValues); // [1, 2, 10, 21]
console.log(values); // [1, 10, 21, 2]

```

```js
// Array.prototype.toString()
Trả về một chuỗi của mảng và các phần tử của nó

const array = [1, 2, "a", "1a"];

console.log(array.toString());
// Expected output: "1,2,a,1a"

```

```js
// Array.prototype.values()
trả về iterator (bộ lặp) chứa các giá trị của mảng, theo đúng thứ tự.

const array = ["a", "b", "c"];
const iterator = array.values();
for (const value of iterator) {
  console.log(value);
}
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

```

trả về một bản sao của mảng, nhưng với một phần tử được thay thế tại chỉ số đã chỉ định.

```js
// Array.prototype.with()
trả về một bản sao của mảng, nhưng với một phần tử được thay thế tại chỉ số đã chỉ định.

array.with(index, newValue)
// index: vị trí muốn cập nhật (có thể là số âm để đếm từ cuối)
// newValue: giá trị mới thay thế tại vị trí đó

const arr = [1, 2, 3];
const newArr = arr.with(1, 99); // thay phần tử tại index 1

console.log(newArr); // [1, 99, 3]
console.log(arr);    // [1, 2, 3] (mảng gốc không thay đổi)


```

```js
// Array.from()
Chuyển một đối tượng không thể lặp hoặc không giống mản thành 1 mảng

const str = "hello";
const charArray = Array.from(str);
console.log(charArray); // Kết quả: ['h', 'e', 'l', 'l', 'o']

console.log(Array.from("foo"));
// Expected output: Array ["f", "o", "o"]
```
