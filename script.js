const graceful_leader_link = 'https://app.powerbi.com/groups/ab3dbb24-3cf5-499b-8fa5-291d8cfde922/reports/c44c8367-e124-433f-92f8-143d43984c8a/ReportSection?experience=power-bi';

const KingMessage = () => {
    const message = document.querySelector('.kingtext');

    message.style.display = 'flex';

    setTimeout(() => {
        message.style.display = 'none';
    }, 1300)


}

const OpenGracefulReport = () => {

    window.open(graceful_leader_link,
    "_blank")

}
