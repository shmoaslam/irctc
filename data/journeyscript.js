window.confirmValue = true;
window.confirm = function () { console.log('confirm button open'); }
//window.stop()
document.getElementById('cllink-12167-SL-3').click();

//
setTimeout(BookNow, 1000);

function BookNow(){
	document.getElementById("12167-SL-GN-0").click();
}