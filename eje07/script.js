document
  .getElementById("notasForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const data = {
      fname: document.getElementById("fname").value,
      sname: document.getElementById("sname").value,
      lname: document.getElementById("lname").value,
      slname: document.getElementById("slname").value,
      materia: document.getElementById("materia").value,
      nota: document.getElementById("nota").value,
    };

    fetch("http://192.168.1.9:3000/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud: " + response.statusText);
        }
        return response.json();
      })
      .then((result) => {
        alert("Datos guardados");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Ocurrió un error al guardar los datos.");
      });
  });
