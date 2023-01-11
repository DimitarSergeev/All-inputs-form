const baseUrl = 'https://www.toptal.com/developers/postbin/1673441858950-1121392007917'

export const postData = async (data) => {
    
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json' ,
                'X-Status': 'Awesome'
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
