

let a = [];
for (let i = 0; i < 11; i++) {
  a[i] = () => {
    console.log(i);
  };
}

a[6]();

const obj = Object.assign({},{a:1})