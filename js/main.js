async function loadData() {
  const response = await fetch("data/amazonia.json");
  return response.json();
}

async function renderCharts() {
  const data = await loadData();

  const years = data.map((item) => item.year);
  const temperatures = data.map((item) => item.temperature);
  const deforestation = data.map((item) => item.deforestation);

  const tempCtx = document.getElementById("temperatureChart");
  const defCtx = document.getElementById("deforestationChart");

  new Chart(tempCtx, {
    type: "line",
    data: {
      labels: years,
      datasets: [
        {
          label: "Average Temperature (°C)",
          data: temperatures,
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Average Annual Temperature – Amazon Biome",
        },
      },
    },
  });

  new Chart(defCtx, {
    type: "bar",
    data: {
      labels: years,
      datasets: [
        {
          label: "Deforestation (km²)",
          data: deforestation,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Annual Deforestation – Amazon Biome",
        },
      },
    },
  });
}

renderCharts();
