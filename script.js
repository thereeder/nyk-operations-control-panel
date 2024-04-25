const graceful_leader_link = 'https://app.powerbi.com/groups/ab3dbb24-3cf5-499b-8fa5-291d8cfde922/reports/c44c8367-e124-433f-92f8-143d43984c8a/ReportSection?experience=power-bi';
const green_bay_link = 'https://app.powerbi.com/groups/ab3dbb24-3cf5-499b-8fa5-291d8cfde922/reports/bbdaa636-6c74-4649-a1bc-19d4a272adf8/ReportSection?experience=power-bi';

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


const OpenGreenBayReport = () => {

    window.open(green_bay_link,
    "_blank")

}
