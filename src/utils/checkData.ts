const checkData = (dueDate: string) => {
    const dueDateObj = new Date(dueDate);
    const dueDateFormatted = dueDateObj.toISOString().split('T')[0]; 

    const currentDate = new Date();
    const currentDateFormatted = currentDate.toISOString().split('T')[0];

    let statusColor = "";
    let statusText = "";

    if (dueDateFormatted < currentDateFormatted) {
        statusColor = "red"; 
        statusText = "Atrasada";
    }
    else if (dueDateFormatted > currentDateFormatted) {
        statusColor = "blue"; 
        statusText = "Próxima";
    }
    else {
        statusColor = "yellow";
        statusText = "Hoje";
    }

    return { statusColor, statusText };
};

export default checkData;
