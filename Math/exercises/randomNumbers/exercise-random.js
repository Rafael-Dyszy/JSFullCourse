function getNumberInterger(start = 0, final = 1, integer = true) {
  let r = Math.random() * (final - start + 1) + start;
  return integer ? parseInt(r) : r;
}
