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

    }

    document.getElementById("reportArea").value = report;

});
