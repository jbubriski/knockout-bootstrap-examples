// Overall viewmodel for this screen, along with initial state
function TodoViewModel() {
    var self = this;

    self.items = ko.observableArray();

    self.itemToAdd = ko.observable("");

    self.addItem = function() {
        if (self.itemToAdd() != "") {
            self.items.push(self.itemToAdd()); // Adds the item. Writing to the "items" observableArray causes any associated UI to update.
            self.itemToAdd(""); // Clears the text box, because it's bound to the "itemToAdd" observable
        }
    };
}

ko.applyBindings(new TodoViewModel());

$('#todoForm').submit(function(){
    console.log($('#todoForm').serialize());
    
    return false;
});

