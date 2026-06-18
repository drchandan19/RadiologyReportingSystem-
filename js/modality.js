document.getElementById("modality").addEventListener("change", function () {

    let modality = this.value;

    let studyType = document.getElementById("studyType");

    studyType.innerHTML = "";

    if (modality === "Ultrasound") {

        studyType.innerHTML = `
            <option>Abdomen</option>
            <option>KUB</option>
            <option>Pelvis</option>
            <option>Thyroid</option>
            <option>Breast</option>
            <option>Scrotum</option>
        `;

    }

    else if (modality === "CT") {

        studyType.innerHTML = `
            <option>CT Chest</option>
            <option>NCCT Head</option>
        `;

    }

});
