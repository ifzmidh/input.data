// Storage Datas Input User
const data1 = document.getElementById("data1").value;
const data2 = document.getElementById("data2").value;

let datas = {
    varData1: [],
    varData2: []
};

let i = 0;
function saveDatas() {
    i++;
    if (i <= 1) {
        datas.varData1.push(data1);
        datas.varData2.push(data2);
        console.log("data di push..");
        console.log(i);
    } else {
        alert("Hanya boleh menginput 1 kali yah...");
    }
};
// Storage Datas Input User END
// Update Screen Output
const outputScreen = document.getElementById("output");
function showOutput() {
    outputScreen.value = `Data 1 = ${datas.varData1}, Data 2 = ${datas.varData2}`
}
// Update Screen Output END