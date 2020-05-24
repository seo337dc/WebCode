function ChangeFunc(data, id) {
    //document.getElementById("demo").innerHTML = "Hello World";
    //console.log(obj);

    
    var orderDetail = JSON.parse(sessionStorage.getItem("dataValue"));
    let check = "test" + id;

    let img = `<img src="img/game/${data}.png" width='40%' height='90%'>`
    
    document.getElementById(check).innerHTML = img;

    if (orderDetail === null) {
        window.sessionStorage.setItem('dataValue', data);
    } else {
        console.log(orderDetail + ":" + data);

        let result = parseInt(window.sessionStorage.getItem('gameResult'));
        let count = parseInt(window.sessionStorage.getItem('gameCount'));
        console.log(count + ": " + result);

        if (orderDetail === data) {
            alert("맞췄습니다.");
            window.sessionStorage.setItem('gameResult', result + 1);
            window.sessionStorage.setItem('gameCount', count + 1);

        } else {
            alert("틀렸습니다.");
            window.sessionStorage.setItem('gameCount', count + 1);
        }
        sessionStorage.removeItem('dataValue');
        if (count === 4) {


            alert("끝났습니다. 맞은 개수 : " + window.sessionStorage.getItem('gameResult'));
        } else {
            alert("다음거 도전하세요.");
        }

    }

    
}