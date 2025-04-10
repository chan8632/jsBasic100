function test() {
  let result = "";
  if (a) {
    if (!b) {
      result = "c";
    }
  } else {
    result = "a";
  }
  result += "b";
  return result;
}

function test() {
  let result = "";
  if (!a) {
    result = "a";
    result += "b";
    return result;
  } else {
    if (!b) {
      result = "c";
    }
    result += "b";
    return result;
  }
}
