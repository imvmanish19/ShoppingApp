$(document).ready(() => {

    let addBtn = $('#addBtn');
    let name = $('#name');
    let manufacturer = $('#manufacturer');
    let price = $('#price');

    addBtn.click(() => {
        if(name.val() == undefined || manufacturer.val() == "" || price.val() == "") {
            return window.alert("Enter All Data")
        }
        addProduct(
            name.val(),
            manufacturer.val(),
            price.val(),
            (data) => {
                window.alert(`Product ${data.name} is been added to Database`)
            }
        )
    }) 

});