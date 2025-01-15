const cl = console.log;


const snackbar = (msg, icon) => {
    Swal.fire({
        title: msg,
        icon: icon,
        timer: 3000
      });
}



const hrCall = () => {
    setTimeout(() => {
        let err = Math.random() >= .3 ? false : true;
        if (!err) {
            cl(`The candidate is shortlisted for 1st Tech interview !!!`);
            firstTechIntr();
        }else {
            snackbar(`Looking for another candidate`, 'error')
        }
    }, 1500);
}

const firstTechIntr = () => {
    setTimeout(() => {
        let err = Math.random() >= .3 ? false : true;
        if(!err) {
            cl(`The candidate is shortlisted for 2nd Tech Interview !!!`);
            secondTechIntr();
        }else{
            snackbar(`The candidate is not good in Basics`, 'error')
        }
    }, 1000);
}

const secondTechIntr = () => {
    setTimeout(() => {
        let err = Math.random() >= .3 ? false : true;
        if(!err) {
            cl(`The candidate is shortlisted for M1 Round Interview !!!`);
            M1Round();
        }else{
            snackbar(`The candidate is struglling to write the code`, 'error')
        }
    }, 700);
}

const M1Round = () => {
    setTimeout(() => {
        let err = Math.random() >= .3 ? false : true;
        if(!err) {
            snackbar(`The candidate is selected for a given profile !!!`, 'success');

        }else{
            snackbar(`The candidate is unable to explain pre angular project !!!`, 'error')
        }
    }, 500);
}

hrCall();