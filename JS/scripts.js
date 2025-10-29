function newItem() {

    // adding Items to the list via Add Button
    let li = $('<li></li>'); 

    let inputValue = $('#input').val();
    li.append(inputValue);
    $('#input').val(''); //clearing input field

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $('#list').append(li);
    }

    // double click to cross out. toggle makes it switch between crossed out and not.
    li.on("dblclick", function() {
        li.toggleClass("strike");
    });

    // delete X button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);
    
    function deleteListItem() {
        li.addClass("delete");
    }

    // change order of items by dragging them
    $('#list').sortable();
}

$('#input').on("keypress", function(e) {
    if (e.which === 13) {   // 13 means "Enter" key
        // Help from chatgpt: Default setting for pressing enter key is reloading page
        e.preventDefault(); // preventing Default = Now it works!
        newItem();
    }
});
