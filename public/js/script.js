// This script fetches the data from the API and populates the company list.
document.addEventListener("DOMContentLoaded", () => {
    // Fetch the data from the API
    fetch("http://localhost:8000/api/data")
        .then((response) => response.json())
        .then((data) => {
            populateCompanyList(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
});

// Chart.js code
let stockChart;
function updateChart(data, company) {
    const filteredData = data.filter((item) => item.index_name === company);

    const labels = filteredData.map((item) => item.index_date);
    const values = filteredData.map((item) =>
        parseFloat(item.closing_index_value)
    );

    const ctx = document.getElementById("stockChart").getContext("2d");

    if (stockChart) {
        stockChart.destroy(); // Destroy the previous chart
    }

    stockChart = new Chart(ctx, { 
        // Create a new chart
        type: "line",
        data: {
            labels: labels,
            datasets: [
                {
                    label: `${company} Closing Prices`,
                    data: values,
                    borderColor: "blue",
                    borderWidth: 2,
                    fill: false,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        },
    });
}

// Populate the company list
function populateCompanyList(data) {
    const companyList = document.getElementById("company-list");

    const uniqueCompanies = [...new Set(data.map((item) => item.index_name))];

    uniqueCompanies.forEach((company) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = company;
        li.onclick = () => updateChart(data, company);
        companyList.appendChild(li);
    });
}
