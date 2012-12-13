// Overall viewmodel for this screen, along with initial state
function TodoViewModel() {
    var self = this;

    self.items = ko.observableArray();

    self.addItem = function() {
        self.items.push('');
    };
}

ko.applyBindings(new TodoViewModel());

$('#todoForm').submit(function(){
    console.log($('#todoForm').serialize());

    return false;
});