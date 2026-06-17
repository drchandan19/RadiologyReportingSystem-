// ==========================
// RADIOLOGY REPORTING SYSTEM
// APP.JS
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    setupButtons();

    generateReportNumber();

});

// --------------------------

function setupButtons() {

    const darkBtn = document.getElementById("darkModeBtn");
    const printBtn = document.getElementById("printBtn");
    const newBtn = document.getElementById("newBtn");
    const saveBtn = document.getElementById("saveBtn");
    const settingsBtn = document.getElementById("settingsBtn");

    if (darkBtn) {
        darkBtn.addEventListener("click", toggleDarkMode);
    }

    if (printBtn) {
        printBtn.addEventListener("click", () => {
            window.print();
        });
    }

    if (newBtn) {
        newBtn.addEventListener("click", createNewReport);
    }

    if (saveBtn) {
        saveBtn.addEventListener("click", saveReport);
    }

    if (settingsBtn) {
        settingsBtn.addEventListener("click", () => {
            alert("Institution Settings Module - Coming in v3.2");
        });
    }
}

// --------------------------

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

}

// --------------------------

function generateReportNumber() {

    const reportInputs = document.querySelectorAll("input");

    if (reportInputs.length < 3) return;

    const reportField = reportInputs[2];

    const year = new Date().getFullYear();

    let counter =
        parseInt(localStorage.getItem("reportCounter")) || 1;

    const reportNo =
        `RAD/7AFHK/${year}/${String(counter).padStart(4, "0")}`;

    reportField.value = reportNo;

}

// --------------------------

function createNewReport() {

    if (!confirm("Create New Report?")) return;

    location.reload();

}

// --------------------------

function saveReport() {

    const reportInputs = document.querySelectorAll("input");

    if (reportInputs.length < 4) {
        alert("Report fields not found.");
        return;
    }

    const reportNo = reportInputs[2].value;

    const patientName = reportInputs[3].value;

    const textareas =
        document.querySelectorAll("textarea");

    const reportData = {

        reportNo: reportNo,
        patientName: patientName,

        clinical:
            textareas[0]?.value || "",

        findings:
            textareas[1]?.value || "",

        impression:
            textareas[2]?.value || "",

        savedOn:
            new Date().toLocaleString()

    };

    localStorage.setItem(
        reportNo,
        JSON.stringify(reportData)
    );

    let counter =
        parseInt(localStorage.getItem("reportCounter")) || 1;

    counter++;

    localStorage.setItem(
        "reportCounter",
        counter
    );

    alert(
        "Report Saved Successfully\n\n" +
        reportNo
    );

}

// ==========================
