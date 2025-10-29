function newItem(){

// function for adding Items to the list via Add Button
let li = $('<li></li>');

let inputValue = $('#input').val();
li.append(inputValue);

if (inputValue === '') {
    alert("You must write something!");
} else {
    $('#list').append(li);
}

// Crossing out Item when Double Click on it . With toggle another Double Click nullifies it
    li.on("dblclick" , function(){
    li.toggleClass("strike");
});

// Creating X Button for deleting List Item
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

// on = addEventListner in Vanilla JS
crossOutButton.on("click", deleteListItem);

function deleteListItem(){
    li.addClass("delete");
}

// Change order of items
$('#list').sortable();

}

// How can I add an Item with pressing the Enter key? Tried around with code but its definitely not right
$('#input').on("keypress", function(e){
    if (e.which === 13) {
        newItem();  
    }
});