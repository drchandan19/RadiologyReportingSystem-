document.getElementById("loadTemplate").addEventListener("click", function () {

    let modality = document.getElementById("modality").value;
    let studyType = document.getElementById("studyType").value;

    let report = "";

    if (modality === "Ultrasound") {

        if (studyType === "Abdomen") {

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

        else if (studyType === "KUB") {

            report =
`ULTRASOUND KUB

Both kidneys are normal in size and echotexture.

No renal calculus seen.

Urinary bladder is adequately distended.

Impression:
No significant abnormality detected.`;

        }

        else if (studyType === "Pelvis") {

            report =
`ULTRASOUND PELVIS

Uterus:
Normal in size and echotexture.

Endometrium:
Normal thickness.

Both ovaries:
Normal.

No free fluid seen.

Impression:
No significant abnormality detected.`;

        }

        else if (studyType === "Thyroid") {

            report =
`ULTRASOUND THYROID

Both thyroid lobes are normal in size.

Echotexture is homogeneous.

No focal thyroid nodule seen.

Impression:
Normal thyroid ultrasound.`;

        }
        else if (studyType === "Breast") {

    report =
`ULTRASOUND BREAST

Both breasts show normal fibroglandular parenchymal pattern.

No focal solid or cystic lesion identified.

No architectural distortion seen.

Both axillae are unremarkable.

Impression:
No sonographic abnormality detected.`;

}
else if (studyType === "Scrotum") {

    report =
`ULTRASOUND SCROTUM

Both testes are normal in size and echotexture.

No focal intratesticular lesion seen.

Bilateral epididymides appear normal.

No hydrocele or varicocele seen.

Impression:
No significant abnormality detected.`;

}

    }

    document.getElementById("reportArea").value = report;

});

document.getElementById("copyReport").addEventListener("click", function () {

    let reportText = document.getElementById("reportArea");

    navigator.clipboard.writeText(reportText.value);

    alert("Report copied successfully!");

});
