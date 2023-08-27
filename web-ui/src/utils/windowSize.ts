/*
Lets you know if the window is mobile or desktop
*/

const deviceType = () => {
    const width = window.innerWidth;
    if (width >= 450) {
        return "desktop";
    }else {
        return "mobile";
    }
}

export default deviceType;