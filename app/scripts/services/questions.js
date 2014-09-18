'use strict';

/**
 * @ngdoc service
 * @name livewellApp.Questions
 * @description
 * # Questions
 * accesses locally stored questions that were provided over the questions / question-responses routes
 */
angular.module('livewellApp')
  .service('Questions', function Questions() {
    // AngularJS will instantiate a singleton by calling "new" on this function

  var content = {};
  var _QUESTIONS_COLLECTION_KEY = 'questions';
  var _RESPONSES_COLLECTION_KEY = 'questionresponses';
  var _QUESTION_CRITERIA_COLLECTION_KEY = 'questioncriteria';
  var _RESPONSE_CRITERIA_COLLECTION_KEY = 'responsecriteria';

  content.query = function(questionGroup){

  if (localStorage[_QUESTIONS_COLLECTION_KEY] != undefined){
  //grab from synched local storage
  content.items = JSON.parse(localStorage[_QUESTIONS_COLLECTION_KEY]);
  //filter to show only one question group
  content.items = _.where(content.items, {questionGroup:questionGroup});
  
  //attach response groups to questions
  var responses_collection = JSON.parse(localStorage[_RESPONSES_COLLECTION_KEY]);
  var criteria_collection = JSON.parse(localStorage[_QUESTION_CRITERIA_COLLECTION_KEY]);

  _.each(content.items, function(el,idx){
      content.items[idx].responses = _.where(responses_collection, {responseGroupId: el.responseGroupId});
      content.items[idx].criteria = _.where(criteria_collection, {questionCriteriaId: el.questionCriteriaId});

  });

  content.items = _.sortBy(content.items,"order");

	}
	else{
		content.items = [];
	}

 	return content.items

	}

  return content
  });
