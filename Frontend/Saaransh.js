const summaryPara=document.getElementById("summaryP")
const summaryPoints=document.getElementById("summaryPoints")
const content=document.getElementById("Content")
const loading=document.getElementById("loading")
const clip=document.getElementById("clipboard")

var URL=null

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    URL = tabs[0].url;
    // use `url` here inside the callback because it's asynchronous!
});

const summaryParaFunc=()=>{
    loading.style.display="block"
    content.innerText=""
    fetch("http://127.0.0.1:3000/getsummaryp",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            "url":URL
        }),
    }).then((data)=>{
        return data.json()
    }).then((data2)=>{
        loading.style.display="none"
        console.log(data2.summaryP)
        content.innerText=data2.summaryP
    }).catch((e)=>{
        loading.style.display="none"
        window.alert("Error Occured!")
        console.log(e)
    })
}
summaryPara.addEventListener('click',summaryParaFunc)


const summaryPointsFunc=()=>{
    loading.style.display="block"
    content.innerText=""
    fetch("http://127.0.0.1:3000/getsummarypoints",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            "url":URL
        }),
    }).then((data)=>{
        return data.json()
    }).then((data2)=>{
        loading.style.display="none"
        console.log(data2.summarypoints)
        content.innerText=data2.summarypoints
    }).catch((e)=>{
        loading.style.display="none"
        window.alert("Error occured")
        console.log(e)
    })
}
summaryPoints.addEventListener('click',summaryPointsFunc)


const clipboard=()=>{
    let inputEle=document.createElement('input')
    inputEle.setAttribute('value',content.innerText)
    document.body.appendChild(inputEle)
    inputEle.select()
    document.execCommand('copy')
    inputEle.parentNode.removeChild(inputEle)
}


clip.addEventListener('click',clipboard)