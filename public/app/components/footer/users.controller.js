angular
.module('app.admin')
.controller('UsersController',function($scope, $firebaseArray, Notification){

    //Load firebase users into $scope;
    var ref = firebase.database().ref('users');

    // To use with table (see .html)
    $scope.users = $firebaseArray(ref);

    $scope.mode = "add";
    $scope.user = {};

    //CREATE
    $scope.create = function()
    {
        ref.push($scope.user);
        $scope.user = {};
    }

    //READ
    $scope.edit = function(user)
    {
        console.log(user);
        $scope.user = user;
        $scope.mode = "edit";
    }

    //UPDATE
    $scope.update = function()
    {
        //Get the index of the user that was just updated
        var index = $scope.users.$indexFor($scope.user.$id);

        //Assign the $firebaseArray at that index to equal the current $scope.user
        $scope.users[index] = $scope.user;

        //Save to db
        //Possible future addition of error handling...
        $scope.users.$save(index).then(function(){
            Notification.success({message:"User updated"});
        });

        $scope.user = {}
        $scope.mode = "add";
    }

    //DELETE
    $scope.delete = function(id)
    {
        //Get the index of the user to remove
        var index = $scope.users.$indexFor(id);

        $scope.users.$remove(index);
    }

    //RESET
    $scope.cancel = function()
    {
        $scope.user = {};
        $scope.mode = "add";
    }

    $scope.view = function(user)
    {
        $scope.user = user;
    }

    // When do you want to create a factory?

    // ui-grid
    // To use with ui-grid (see .html)
    // For more options: https://github.com/angular-ui/ui-grid/wiki/Configuration-Options
    // Be very careful about styling "height": https://stackoverflow.com/questions/30784359/ui-grid-dynamic-row-height-alternatives
    var linkActions = '<div class="ngCellText text-right" ng-class="col.colIndex()">' +
        '<a href="" ng-click="grid.appScope.view(row.entity)" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-search"></i></a> ' +
        '<a href="" ng-click="grid.appScope.edit(row.entity)"><i class="fa fa-pencil"></i></a> ' +
        '<a href="" ng-click="grid.appScope.delete(row.entity.$id)"><i class="fa fa-ban"></i></button>' +
        '</div>';

    $scope.grid = {
        columnDefs : [
            { field:'name'},
            { field:'age'},
            { field:'location'},
            { field:'isAdmin'},
            { field: 'Actions',
                width: 100,
                enableCellEdit: false,
                cellTemplate: linkActions,
                enableFiltering: false
            }
        ],
        data: $firebaseArray(ref)
    }
});
