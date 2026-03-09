const validateData = (userData) => {
    let errors = [];
    if (!userData.firstname) errors.push("กรุณากรอกชื่อ");
    if (!userData.lastname) errors.push("กรุณากรอกนามสกุล");
    if (!userData.age) errors.push("กรุณากรอกอายุ");
    if (!userData.gender) errors.push("กรุณาเลือกเพศ");
    if (!userData.interests) errors.push("กรุณาเลือกงานอดิเรก");
    if (!userData.description) errors.push("กรุณากรอกคำอธิบาย");
    return errors;
}

const submitData = async () => {
    let firstNameDOM = document.querySelector('input[name=firstname]');
    let lastNameDOM = document.querySelector('input[name=lastname]');
    let ageDOM = document.querySelector('input[name=age]');
    let genderDOM = document.querySelector('input[name=gender]:checked');
    let interestDOMs = document.querySelectorAll('input[name=interests]:checked');
    let descriptionDOM = document.querySelector('textarea[name=description]');
    let messageDOM = document.getElementById('message');

    try {
        let interest = "";
        for (let i = 0; i < interestDOMs.length; i++) {
            interest += interestDOMs[i].value;
            if (i != interestDOMs.length - 1) {
                interest += ",";
            }
        }

        let userData = {
            firstname: firstNameDOM.value,
            lastname: lastNameDOM.value,
            age: ageDOM.value,
            gender: genderDOM ? genderDOM.value : "",
            interests: interest,
            description: descriptionDOM.value
        }

        const errors = validateData(userData);
        if (errors.length > 0) {
            throw {
                message: "กรุณากรอกข้อมูลให้ครบ",
                errors: errors
            }
        }

        await axios.post("http://localhost:8000/users", userData);
        messageDOM.innerText = "บันทึกข้อมูลสำเร็จ";
        messageDOM.className = "message success";

    } catch (error) {
        let htmlData = `<div>${error.message || "เกิดข้อผิดพลาด"}</div>`;
        if (error.errors) {
            htmlData += "<ul>";
            for (let i = 0; i < error.errors.length; i++) {
                htmlData += `<li>${error.errors[i]}</li>`;
            }
            htmlData += "</ul>";
        }
        messageDOM.innerHTML = htmlData;
        messageDOM.className = "message danger";
    }
}