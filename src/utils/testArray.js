export function testArray(arr, testFn) {
  return new Promise((resolve, reject) => {
    const result = arr.every((element) => testFn(element));

    if (result) {
      resolve("All elements pass the test");
    } else {
      reject("Not all elements pass the test");
    }
  });
}
