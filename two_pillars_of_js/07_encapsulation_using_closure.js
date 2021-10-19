const makeNuclearButton = () => {

    let timeWitoutDestruction = 0;
    const passTime = () => {
        timeWitoutDestruction++;
    }
    const totalPeaceTime = () => timeWitoutDestruction;

    const launch = () => {
        timeWitoutDestruction = -1;
        return 'BOOM';
    }

    setInterval(passTime, 1000);

    return {
        // lanuch : launch,
        totalPeaceTime: totalPeaceTime
    }
}

const ohno = makeNuclearButton();
console.log(ohno.totalPeaceTime());


/*
Here we're able to hide the launch() which is very private, nobody outside of makeNuclaer function can not call launch()


*/