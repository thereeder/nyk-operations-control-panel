const graceful_leader_link = 'https://app.powerbi.com/groups/ab3dbb24-3cf5-499b-8fa5-291d8cfde922/reports/c44c8367-e124-433f-92f8-143d43984c8a/ReportSection?experience=power-bi';
const green_bay_link = 'https://app.powerbi.com/groups/ab3dbb24-3cf5-499b-8fa5-291d8cfde922/reports/bbdaa636-6c74-4649-a1bc-19d4a272adf8/ReportSection?experience=power-bi';
const guardian_leader_link = 'https://app.powerbi.com/groups/ab3dbb24-3cf5-499b-8fa5-291d8cfde922/reports/cfe1e284-74aa-49fc-b7fc-2db8e1c79cfc/ReportSection?experience=power-bi';
const gentle_leader_link = 'https://app.powerbi.com/groups/ab3dbb24-3cf5-499b-8fa5-291d8cfde922/reports/03f01c62-0251-4311-b1b2-955755184d32/ReportSection?experience=power-bi';
const grand_phoenix_link = 'https://app.powerbi.com/groups/ab3dbb24-3cf5-499b-8fa5-291d8cfde922/reports/db848a10-e410-4764-b423-fa2ffa2d7ff7/ReportSection?experience=power-bi';


const KingMessage = () => {
    const message = document.querySelector('.kingtext');

    message.style.display = 'flex';

    setTimeout(() => {
        message.style.display = 'none';
    }, 1300)


}

const OpenGuardianLeader = () => {

    window.open(graceful_leader_link,
    "_blank")

}
const OpenGentleLeader = () => {

    window.open(graceful_leader_link,
    "_blank")

}
const OpenGrandPhoenix = () => {

    window.open(graceful_leader_link,
    "_blank")

}


const OpenGreenBayReportttt = () => {
    
    window.open(green_bay_link,
        "_blank")
}
