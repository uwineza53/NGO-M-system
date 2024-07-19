/**
 * ## Fetching
 * A user defined function having default fetch options
 * @param {*} url 
 * @param {*} option 
 * @returns fetch promise
 */
export const fetching = async (url, option={}) => {
    const options = {
        method: 'GET',
        header: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        referrerPolicy: "no-referrer-when-downgrade",
        mode: 'cors',
        "Access-Control-Allow-Origin": "*",
    };

    return await fetch(url, {
        ...options,
        ...option
    })
}

/**
 * ### Response Handling
 * This function handles a fetch request response in standard format collaborating with the firing of notification box when necessary.
 * @param {*} response a response object from fetch
 * @param {*} respondOnSuccess boolean indicating whether it emit notification on success
 * @param {*} setNotification notification context setter state
 * @returns josnify response on success otherwise error on fail.
 */
export const handleResponse = (response, respondOnSuccess, setNotification) => {
    if (response.status === 200) {
        if (respondOnSuccess)
            setNotification(prev => ({
                ...prev,
                visible: true,
                text: response.statusText
            }))
        return response.json()
    }

    if (process.env.REACT_APP_ENV === 'Development')
        setNotification({
            visible: true,
            status: response.status,
            text: response.statusText
        })
        // console.error(response.statusText);
    

}

/**
 * ### Catch handling
 * A function used to handle raised exceptions
 * @param {*} error  &nbsp; an error catched from try-catch
 */
export const handleCatch = (error) => {
    if (process.env.REACT_APP_ENV === 'Development') 
        console.error('🪳 🪲 🐒 ', error);
}