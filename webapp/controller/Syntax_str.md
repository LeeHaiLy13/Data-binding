```js
// String.prototype.includes()
Kiểm tra xem một chuỗi có chứa một chuỗi con cụ thể nào hay không.
--> Nó trả về true nếu tìm thấy, và false nếu không tìm thấy.

 str.includes(searchString, position)
// searchString: (bắt buộc) Chuỗi cần tìm.
// position: (tùy chọn) Vị trí bắt đầu tìm kiếm (mặc định là 0).

const message = "Xin chào, tôi là Hải";
console.log(message.includes("tôi", 11)); // false (vì tìm từ vị trí 10 trở đi)
console.log(message.includes("tôi", 9));

// space cũng tính index
```

```js
// String.prototype.replace()
Dùng để thay thế một phần của chuỗi bằng một chuỗi khác.

str.replace(searchValue, replaceValue)
// searchValue: Chuỗi hoặc biểu thức chính quy (RegExp) dùng để tìm phần cần thay.
// replaceValue: Chuỗi thay thế.

const message = "Tôi thích JavaScript";
const newMessage = message.replace("JavaScript", "TypeScript");

console.log(newMessage); // "Tôi thích TypeScript"

```

```js
//String.prototype.split()
dùng để tách chuỗi thành một mảng các phần tử dựa trên một dấu phân cách (separator).

str.split(separator, limit)
// separator: (bắt buộc) ký tự, chuỗi, hoặc RegExp dùng để tách.
// limit: (tùy chọn) số lượng phần tử tối đa cần lấy trong mảng kết quả.

const word = "Hello";
console.log(word.split("")); // ["H", "e", "l", "l", "o"]

const data = "a-b-c-d-e";
console.log(data.split("-", 3));
// ["a", "b", "c"]

```

```js
// String.prototype.trim()
Xóa khoảng trắng ở cả hai đầu của chuỗi này và trả về một chuỗi mới mà không sửa đổi chuỗi gốc.

str.trim()

const stringg = "  hello  ";
console.log(stringg); // "   hello   "
console.log(stringg.trim());  // "hello"
```

```js
// String.prototype.at()
at(index);
//index: Chỉ số (vị trí) của ký tự chuỗi cần trả về

const sentence = "The quick brown fox jumps over the lazy dog.";
let index = 5;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"
```

```js
// String.prototype.at()
at(index);
//index: Chỉ số (vị trí) của ký tự chuỗi cần trả về

const sentence = "The quick brown fox jumps over the lazy dog.";
let index = 5;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"
```
