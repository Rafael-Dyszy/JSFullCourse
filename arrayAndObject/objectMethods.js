const product = {
  name: 'pen',
  qtd: 10,
  buy(n) {
    console.log(this);
    if (n > this.qtd) {
      return;
    }
    this.qtd -= n;
  },
  buy1: function () {
    console.log('buy1');
    console.log(this);
  },
  //   on arrowFunction this represent window object
  buy2: () => {
    console.log('buy2');
    console.log(this);
  },
};
product.buy(3);
// console.log(product);

product.buy(12);
// console.log(product);
product.buy1();
product.buy2();
