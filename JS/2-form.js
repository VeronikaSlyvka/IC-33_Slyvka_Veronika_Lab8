const formData = {
    email: "",
    message: "",
};

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

const updateFormData = () => {
    formData.email = emailInput.value.trim();
    formData.message = messageInput.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

window.addEventListener('load', () => {
    const savedFormData = localStorage.getItem("feedback-form-state");
    if (savedFormData) {
        const parsedData = JSON.parse(savedFormData);
        emailInput.value = parsedData.email;
        messageInput.value = parsedData.message;
        formData.email = parsedData.email;
        formData.message = parsedData.message;
    }
});

form.addEventListener('input', (event) => {
    if (event.target === emailInput || event.target === messageInput) {
        updateFormData();
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.removeItem("feedback-form-state");
        form.reset();
    }
});
