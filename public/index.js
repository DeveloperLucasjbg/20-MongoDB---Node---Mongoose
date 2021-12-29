const d = document;
const socket = io();
const ul = d.getElementById("ul");

socket.on("PRODUCTOS", (data) => {
  console.log(data)
  toRender(data);
});

const toRender = (data) => {
  let pantilla = data
    .map(
      (e) => `
  <li class='grid'>  
  <em> ${e.nombre}</em>
  <p>${e.precio}</p>
  <p>${e.stock}</p>
  </li>`
    )
    .join(" ");
  ul.innerHTML = pantilla;
};

const productSend = () => {
  const nombre = d.getElementById("nombre").value;
  const precio = d.getElementById("precio").value;
  const stock = d.getElementById("stock").value;
  let newProduct = { nombre, precio, stock };
  socket.emit("productIn", newProduct);
};
