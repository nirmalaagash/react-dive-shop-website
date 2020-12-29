export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("state");
        console.log("Loading...." + serializedState);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch (err) {

    }
}


export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    }
    catch (err) {

    }
}