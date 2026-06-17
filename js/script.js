document.getElementById("loadTemplate").addEventListener("click", function () {

    let modality = document.getElementById("modality").value;

    let report = "";

    if (modality === "Ultrasound") {

        report =
`ULTRASOUND ABDOMEN

Liver:
Normal in size and echotexture.

Gall Bladder:
No calculi seen.

Pancreas:
Normal.

Spleen:
Normal.

Impression:
No significant abnormality detected.`;

    }

    else if (modality === "CT") {

        report =
`CT CHEST

Lungs:
No focal lesion seen.

Pleura:
No pleural effusion.

Mediastinum:
No significant lymphadenopathy.

Impression:
No acute CT abnormality detected.`;

    }

    document.getElementById("reportArea").value = report;

});
