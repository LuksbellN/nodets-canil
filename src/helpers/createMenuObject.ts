type menuOptions = '' | 'all' | 'dog' | 'cat' | 'fish' ;

export const createMenuObject = (activemenu: menuOptions) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };

    if (activemenu !== '') {
        returnObject[activemenu] = true
    }
    return returnObject
};