// Class to represent a row in the friend reservations grid
function Friend(name, email) {
    var self = this;
    self.name = ko.observable(name);
    self.email = email;
}

// Overall viewmodel for this screen, along with initial state
function FriendsViewModel() {
    var self = this;

    // Editable data
    self.friends = ko.observableArray([
        new Friend("", "")
        ]);

    self.addFriend = function() {
        self.friends.push(new Friend("", ""));
    };
    
    self.removeFriend = function(friend) {
        self.friends.remove(friend) 
    };

    self.percentComplete = ko.computed(function() {
        return "width: " + (self.friends().length * 20) + "%";
    });

    self.progressClass = ko.computed(function() {
        var progressClass = 'progress ';
        var friendCount = self.friends().length;

        if (friendCount <= 2) {
            progressClass += 'progress-danger';
        } else if (friendCount <= 4) {
            progressClass += 'progress-warning';
        } else {
            progressClass += 'progress-success';
        }

        return progressClass;
    });

    self.name2 = function(friend) {
        return friend.name();
    };
}

ko.applyBindings(new FriendsViewModel());

$('#friendsForm').submit(function() {
    console.log($(this).serialize());
    return false;
})