let count: number = 7;

console.log(
    "count > 5 && count == 7 should be true => ",
    count > 5 && count == 7
  );
  console.log(
    "count < 5 && count > 7 should be false => ",
    count > 5 && count > 7
  );
  console.log(
    "count < 5 || count > 7 should be false => ",
    count < 5 || count > 7
  );
  console.log(
    "count > 5 || count == 7 should be true => ",
    count > 5 || count == 7
  );
  let arr: Array<string> = ["items", "count"];
  console.log("arr.includes('Mango') should be false =>", arr.includes("Mango"));
  console.log("arr.includes('items') should be true =>", arr.includes("items"));
  console.log("arr.includes('ITEMS') should be false =>", arr.includes("ITEMS"));
  console.log(
    "arr.includes('items', 1) should be false =>",
    arr.includes("items", 1)
  );