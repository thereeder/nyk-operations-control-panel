const goliathLink = '';
const heroicLink = '';
const kingLink = '';

const KingMessage = () => {
    const message = document.querySelector('.kingtext');

    message.style.display = 'flex';

    setTimeout(() => {
        message.style.display = 'none';
    }, 1300)


}

const OpenGoliathReport = () => {

    window.open('',
    "_blank")

}
