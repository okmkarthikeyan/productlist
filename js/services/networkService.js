angular.module('productlist.services',[])
.factory('networkService', function($log,$http,$httpParamSerializer) {
var host = " http://www.omdbapi.com/?apikey=176da322";

var getMovieList = function(){
    var url = host+"&s=batman";
    return $http.get(url).then(function(result){
        return result.data;
    });
};

var getSingleMovieList = function(itemId){
    var url = host+"&i="+itemId;
    return $http.get(url).then(function(result){
        return result.data;
    });
};


return {
    getMovieList:getMovieList,
    getSingleMovieList:getSingleMovieList
};

});
