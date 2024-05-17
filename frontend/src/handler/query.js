const query = async (url, method, data) => {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json')

    let body = JSON.stringify(data)
    
    let options = {
        headers,
        body,
        method,
        redirect: 'follow'
    }

    let res = await fetch(url, options)
    
    try {
        return await res.json();
    }catch{
        return await res.statusText;
    }
}

export default query;