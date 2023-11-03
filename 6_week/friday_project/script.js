document.addEventListener("DOMContentLoaded", function () {
    const companyList = document.getElementById("companyList");
    const comparisonResult = document.getElementById("comparisonResult");
    const compareButton = document.getElementById("compareButton");
    const clearFavoritesButton = document.getElementById("clearFavoritesButton");

    // Sample company data (you can load this from JSON)
    const companies = [
        { id: 1, name: "M&", revenue: 1000, employees: 50, isFavorite: false },
        { id: 2, name: "Company B", revenue: 800, employees: 40, isFavorite: false },
        { id: 3, name: "Company C", revenue: 1200, employees: 60, isFavorite: false },
    ];

    // Function to render the list of companies
    function renderCompanies() {
        companyList.innerHTML = "";
        companies.forEach((company) => {
            const companyElement = document.createElement("div");
            companyElement.classList.add("company");
            if (company.isFavorite) {
                companyElement.classList.add("favorite");
            }
            companyElement.innerHTML = `
                <h3>${company.name}</h3>
                <p>Revenue: $${company.revenue}M</p>
                <p>Employees: ${company.employees}</p>
                <button onclick="compareCompany(${company.id})">Compare</button>
                <button onclick="toggleFavorite(${company.id})">
                    ${company.isFavorite ? "Unfavorite" : "Favorite"}
                </button>
            `;
            companyList.appendChild(companyElement);
        });
    }

    // Function to compare selected companies
    function compareCompany(companyId) {
        const selectedCompany = companies.find((company) => company.id === companyId);
        if (!selectedCompany) {
            alert("Company not found.");
            return;
        }
        comparisonResult.innerHTML = `
            <h2>Comparison Result</h2>
            <p>Name: ${selectedCompany.name}</p>
            <p>Revenue: $${selectedCompany.revenue}M</p>
            <p>Employees: ${selectedCompany.employees}</p>
        `;
    }

    // Function to toggle a company's favorite status
    function toggleFavorite(companyId) {
        const selectedCompany = companies.find((company) => company.id === companyId);
        if (selectedCompany) {
            selectedCompany.isFavorite = !selectedCompany.isFavorite;
            renderCompanies();
        }
    }

    // Function to clear all favorites
    function clearFavorites() {
        companies.forEach((company) => (company.isFavorite = false));
        renderCompanies();
    }

    compareButton.addEventListener("click", () => {
        comparisonResult.innerHTML = "<p>Select companies to compare.</p>";
    });

    clearFavoritesButton.addEventListener("click", clearFavorites);

    // Initial rendering of companies
    renderCompanies();
});
