const goliathLink = 'https://app.powerbi.com/groups/me/reports/0bc84b68-f321-477d-b3f9-5f9500a4b2e7/ReportSection?experience=power-bi';
const heroicLink = 'https://app.powerbi.com/groups/me/reports/aa921a29-8a78-447b-ab3b-86f3d2b3a265/ReportSection?experience=power-bi';
const kingLink = '';

const KingMessage = () => {
    const message = document.querySelector('.kingtext');

    message.style.display = 'flex';

    setTimeout(() => {
        message.style.display = 'none';
    }, 1300)


}

const OpenGoliathReport = () => {

    window.open(goliathLink,
    "_blank")

}

const OpenHeroicReport = () => {

    window.open(heroicLink,
    "_blank")
}
