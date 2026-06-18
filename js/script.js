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

    else if (modality === "CT") {

        if (studyType === "CT Chest") {

            report =
`CT CHEST

Lungs:
No focal consolidation or suspicious pulmonary nodule.

Pleura:
No pleural effusion or pneumothorax.

Mediastinum:
No significant lymphadenopathy.

Impression:
No acute CT abnormality detected.`;

        }

        else if (studyType === "NCCT Head") {

            report =
`NCCT HEAD

No evidence of intracranial hemorrhage.

No focal parenchymal abnormality.

Ventricular system is normal.

No midline shift.

Impression:
No acute intracranial abnormality detected.`;

        }

        else if (studyType === "HRCT Thorax") {

            report =
`HRCT THORAX

Trachea and central bronchi are patent.

No focal consolidation.

No suspicious pulmonary nodule.

No pleural effusion.

No mediastinal lymphadenopathy.

Impression:
No significant abnormality detected on HRCT thorax.`;

        }
        
        else if (studyType === "CECT Abdomen") {

        report =
`CECT ABDOMEN

Liver:
Normal in size and enhancement pattern.

Gall bladder:
Unremarkable.

Pancreas:
Normal.

Spleen:
Normal.

Both kidneys show normal enhancement.

No free fluid or significant lymphadenopathy.

Impression:
No significant abnormality detected on CECT abdomen.`;

        }

        else if (studyType === "CT KUB") {

        report =
`CT KUB

Both kidneys are normal in size.

No renal, ureteric or vesical calculus seen.

No hydronephrosis.

Urinary bladder appears unremarkable.

Impression:
No evidence of urolithiasis or obstructive uropathy.`;

        }

        else if (studyType === "CT PNS") {

        report =
`CT PNS

Frontal, ethmoid, sphenoid and maxillary sinuses are well aerated.

No mucosal thickening.

No air-fluid level.

Ostiomeatal complexes are patent.

Impression:
No significant abnormality detected in paranasal sinuses.`;

        }

        else if (studyType === "HRCT ILD") {

        report =
`HRCT THORAX (ILD PROTOCOL)

No reticulations, honeycombing or traction bronchiectasis.

No ground glass opacities.

No significant air trapping.

No pleural effusion.

Impression:
No CT evidence of interstitial lung disease.`;

        }
        
    }

    else if (modality === "MRI") {

        if (studyType === "MRI Brain") {

    report = templates.MRI["MRI Brain"];

    }

        else if (studyType === "MRI Lumbar Spine") {

        report =
`MRI LUMBAR SPINE

Lumbar vertebral alignment is maintained.

No focal marrow signal abnormality.

Intervertebral discs show preserved height and signal intensity.

No significant disc bulge, protrusion or extrusion.

Conus medullaris appears normal.

Impression:
No significant MRI abnormality detected in the lumbar spine.`;

    }

    else if (studyType === "MRI Knee") {

    report =
`MRI KNEE

ACL and PCL are intact.

Medial and lateral menisci are normal in morphology and signal intensity.

Collateral ligaments are intact.

No significant joint effusion.

Articular cartilage is preserved.

Impression:
No significant MRI abnormality detected in the knee joint.`;

    }

    else if (studyType === "MRI Shoulder") {

    report =
`MRI SHOULDER

Rotator cuff tendons are intact.

No full-thickness tear identified.

Long head of biceps tendon is normally located.

No significant joint effusion.

No marrow edema.

Impression:
No significant MRI abnormality detected in the shoulder joint.`;

        }

    }

    document.getElementById("reportArea").value = report;

});

document.getElementById("copyReport").addEventListener("click", function () {

    let reportText = document.getElementById("reportArea");

    navigator.clipboard.writeText(reportText.value);

    alert("Report copied successfully!");

});
