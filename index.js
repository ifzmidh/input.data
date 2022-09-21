// Storage Datas Input User
const outputScreen1 = document.getElementById("output1");
const outputScreen2 = document.getElementById("output2");

const datas = [
    { varData1: "", varData2: "" }
];

function saveDatas() {
    const data1 = document.getElementById("data1").value;
    const data2 = document.getElementById("data2").value;
    if (!data1 && data2) {
        alert('Data tak boleh kosong...')
    } else {
        datas[0].varData1 = data1
        datas[0].varData2 = data2
        outputScreen1.value = datas[0].varData1
        outputScreen2.value = datas[0].varData2
        return;
    }
};
// Storage Datas Input User END