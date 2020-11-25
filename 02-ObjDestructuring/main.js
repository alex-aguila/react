// Object Destructuring

const servicios = {
    api: 'Soy Api',
    mailer: 'Soy Mailer',
    apollo: {msj: 'Soy apollo'},
}

// Forma 1
const enviarCorreo = ({ mailer }) => {
    console.log(mailer)
}

// Forma 2
const showMsj = (srs) => {
    const { apollo } = srs
    console.log(apollo.msj)
}

enviarCorreo(servicios)
showMsj(servicios)