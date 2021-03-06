'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:SummaryPlayerCtrl
 * @description
 * # SummaryPlayerCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('SummaryPlayerCtrl', function ($scope, $routeParams, $location) {

        $scope.getChapterContents = function (chapter_id, appContent) {
            var search_criteria = {
                id: parseInt(chapter_id)
            };

            var chapter = _.where(appContent, search_criteria)[0];

            chapter.element_array = _.where(appContent, search_criteria)[0].element_list.toString().split(",");

            chapter.contents = [];
            // console.log("Chapter selected:",_.where(appContent, search_criteria)[0]);
            // console.log("Chapter contents list:",chapter_contents_list);

            _.each(chapter.element_array, function (element) {
                // console.log(parseInt(element));
                chapter.contents.push(_.where(appContent, {
                    id: parseInt(element)
                })[0]);
            });

            return chapter;
        };

        $scope.showAddSkills = false;

        $scope.lessons = JSON.parse(localStorage['lessons']);

        $scope.chapter = $scope.getChapterContents($routeParams.id,$scope.lessons);

        $scope.pageTitle = $scope.chapter.pretty_name;

        $scope.page = $scope.chapter.contents;

        $scope.addToMySkills = function(){

        var id = $scope.page.id;

        if (localStorage['mySkills'] == undefined){

            localStorage['mySkills'] = JSON.stringify([id]);
        }
        else {
            var mySkills = JSON.parse(localStorage['mySkills']);

            mySkills.push(parseInt(id));
            localStorage['mySkills'] = JSON.stringify(mySkills);
        }

            $location.path('/mySkills');

        }
        debugger;

    });
