function bubbleSort(array) {
  let i = 0,
    length = array.length;
  for (i; i < array.length; i++) {
    for (let j = 0; j < length; j++) {
      const next_index = j + 1,
        current_value = array[j],
        next_value = array[next_index];
      if (current_value > next_value) {
        array[j] = next_value;
        array[next_index] = current_value;
      }
    }
    length--;
  }
  return array;
}

function selectionSort(array) {
  for (let index = 0; index < array.length; index++) {
    for (let next_index = index + 1; next_index < array.length; next_index++) {
      const current_element = array[index];
      const next_element = array[next_index];
      console.log({ index, next_index, array });
      if (current_element > next_element) {
        array[index] = next_element;
        array[next_index] = current_element;
        next_index = index;
      }
    }
  }
  return array;
}

function insertionSort(array) {
  let i = 1,
    length = array.length;
  for (i; i < length; i++) {
    const current_value = array[i];
    for (let j = i - 1; j > -1; j--) {
      // console.log({ i, j})
      const prev_value = array[j];
      // console.log({ i, j, array, current_value });
      if (current_value < prev_value) {
        array[j] = current_value;
        array[i] = prev_value;
        i = j;
      }
    }
  }
  return array;
}

function mergeSort(array) {
  if (array.length < 2) return array;
  const middle = Math.ceil(array.length / 2),
    left = array.slice(0, middle),
    right = array.slice(middle),
    sortedLeft = mergeSort(left),
    sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let container = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) container.push(left.shift());
    else container.push(right.shift());
  }
  if (left.length) container = [...container, ...left];
  if (right.length) container = [...container, ...right];
  return container;
}

function pivot(array) {
  return array[Math.floor(array.length / 2)];
}

function quickSort(array) {
  if (array.length <= 1) return array;
  const pivot = Math.floor(array.length / 2);
  let left = [],
    right = [];

  for (let i = 0; i < array.length; i++) {
    if (i !== pivot) {
      if (array[i] <= array[pivot]) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  }

  return [...quickSort(left), array[pivot], ...quickSort(right)];
}
