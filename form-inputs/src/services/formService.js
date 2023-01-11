const baseUrl = 'https://www.toptal.com/developers/postbin/1673441858950-1121392007917'

export const postData = async (data) => {

    // I don't know how to use postBin  
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': 'https://www.toptal.com/developers/postbin/1673441858950-1121392007917',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Method': '*'
        },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        const result = await response.json();

        return result;
    } else {
        throw { message: 'Unable to create user' };
    }
}
