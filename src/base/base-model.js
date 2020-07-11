class BaseModel {

    getMethod(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((response) => response.json())
                .then((json) => {
                    resolve(json.data);
                })
                .catch((error) => {
                    console.error(error);
                    reject();
                })
        });
    }

    postMethod() {
    }

}

export default BaseModel;
