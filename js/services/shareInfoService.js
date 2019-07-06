angular.module('productlist.services')
.factory('sharedInfoService', function() {
    var individualItemId = '';


    var setindividualItemId = function (data) {
		individualItemId = data;
	}

	var getindividualItemId = function () {
		return individualItemId;
    }
    
    return {
        setindividualItemId:setindividualItemId,
        getindividualItemId:getindividualItemId
    }
});