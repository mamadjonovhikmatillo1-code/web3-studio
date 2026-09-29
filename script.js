forma.addEventListener("submit", function(event) {

    event.preventDefault()

    if (ism.value.length === 0) {
        natija.textContent = `Ismingizni kiriting`
        return
    }

    if (email.value.length === 0) {
        natija.textContent = `Emailingizni kiriting`
        return
    }

    if (budjet.value.length === 0) {
        natija.textContent = `Budjetni kiriting`
        return
    }

    if (Number(budjet.value) === 0) {
        natija.textContent = `Budjetni to'g'ri kiriting`
        return
    }

    natija.textContent = `Rahmat, ${ism.value}. So'rovingiz yuborildi`
})