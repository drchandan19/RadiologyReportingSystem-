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
    <option>HRCT Thorax</option>
    <option>CECT Abdomen</option>
    <option>CT KUB</option>
    <option>CT PNS</option>
    <option>HRCT ILD</option>
`       ;

    }

    else if (modality === "MRI") {

    studyType.innerHTML = `
            <option>MRI Brain</option>
            <option>MRI Knee</option>
            <option>MRI Shoulder</option>
            <option>MRI Lumbar Spine</option>
    `    ;

    }

});
