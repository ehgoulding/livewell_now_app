function md5cycle(a,b){var c=a[0],d=a[1],e=a[2],f=a[3];c=ff(c,d,e,f,b[0],7,-680876936),f=ff(f,c,d,e,b[1],12,-389564586),e=ff(e,f,c,d,b[2],17,606105819),d=ff(d,e,f,c,b[3],22,-1044525330),c=ff(c,d,e,f,b[4],7,-176418897),f=ff(f,c,d,e,b[5],12,1200080426),e=ff(e,f,c,d,b[6],17,-1473231341),d=ff(d,e,f,c,b[7],22,-45705983),c=ff(c,d,e,f,b[8],7,1770035416),f=ff(f,c,d,e,b[9],12,-1958414417),e=ff(e,f,c,d,b[10],17,-42063),d=ff(d,e,f,c,b[11],22,-1990404162),c=ff(c,d,e,f,b[12],7,1804603682),f=ff(f,c,d,e,b[13],12,-40341101),e=ff(e,f,c,d,b[14],17,-1502002290),d=ff(d,e,f,c,b[15],22,1236535329),c=gg(c,d,e,f,b[1],5,-165796510),f=gg(f,c,d,e,b[6],9,-1069501632),e=gg(e,f,c,d,b[11],14,643717713),d=gg(d,e,f,c,b[0],20,-373897302),c=gg(c,d,e,f,b[5],5,-701558691),f=gg(f,c,d,e,b[10],9,38016083),e=gg(e,f,c,d,b[15],14,-660478335),d=gg(d,e,f,c,b[4],20,-405537848),c=gg(c,d,e,f,b[9],5,568446438),f=gg(f,c,d,e,b[14],9,-1019803690),e=gg(e,f,c,d,b[3],14,-187363961),d=gg(d,e,f,c,b[8],20,1163531501),c=gg(c,d,e,f,b[13],5,-1444681467),f=gg(f,c,d,e,b[2],9,-51403784),e=gg(e,f,c,d,b[7],14,1735328473),d=gg(d,e,f,c,b[12],20,-1926607734),c=hh(c,d,e,f,b[5],4,-378558),f=hh(f,c,d,e,b[8],11,-2022574463),e=hh(e,f,c,d,b[11],16,1839030562),d=hh(d,e,f,c,b[14],23,-35309556),c=hh(c,d,e,f,b[1],4,-1530992060),f=hh(f,c,d,e,b[4],11,1272893353),e=hh(e,f,c,d,b[7],16,-155497632),d=hh(d,e,f,c,b[10],23,-1094730640),c=hh(c,d,e,f,b[13],4,681279174),f=hh(f,c,d,e,b[0],11,-358537222),e=hh(e,f,c,d,b[3],16,-722521979),d=hh(d,e,f,c,b[6],23,76029189),c=hh(c,d,e,f,b[9],4,-640364487),f=hh(f,c,d,e,b[12],11,-421815835),e=hh(e,f,c,d,b[15],16,530742520),d=hh(d,e,f,c,b[2],23,-995338651),c=ii(c,d,e,f,b[0],6,-198630844),f=ii(f,c,d,e,b[7],10,1126891415),e=ii(e,f,c,d,b[14],15,-1416354905),d=ii(d,e,f,c,b[5],21,-57434055),c=ii(c,d,e,f,b[12],6,1700485571),f=ii(f,c,d,e,b[3],10,-1894986606),e=ii(e,f,c,d,b[10],15,-1051523),d=ii(d,e,f,c,b[1],21,-2054922799),c=ii(c,d,e,f,b[8],6,1873313359),f=ii(f,c,d,e,b[15],10,-30611744),e=ii(e,f,c,d,b[6],15,-1560198380),d=ii(d,e,f,c,b[13],21,1309151649),c=ii(c,d,e,f,b[4],6,-145523070),f=ii(f,c,d,e,b[11],10,-1120210379),e=ii(e,f,c,d,b[2],15,718787259),d=ii(d,e,f,c,b[9],21,-343485551),a[0]=add32(c,a[0]),a[1]=add32(d,a[1]),a[2]=add32(e,a[2]),a[3]=add32(f,a[3])}function cmn(a,b,c,d,e,f){return b=add32(add32(b,a),add32(d,f)),add32(b<<e|b>>>32-e,c)}function ff(a,b,c,d,e,f,g){return cmn(b&c|~b&d,a,b,e,f,g)}function gg(a,b,c,d,e,f,g){return cmn(b&d|c&~d,a,b,e,f,g)}function hh(a,b,c,d,e,f,g){return cmn(b^c^d,a,b,e,f,g)}function ii(a,b,c,d,e,f,g){return cmn(c^(b|~d),a,b,e,f,g)}function md51(a){txt="";var b,c=a.length,d=[1732584193,-271733879,-1732584194,271733878];for(b=64;b<=a.length;b+=64)md5cycle(d,md5blk(a.substring(b-64,b)));a=a.substring(b-64);var e=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(b=0;b<a.length;b++)e[b>>2]|=a.charCodeAt(b)<<(b%4<<3);if(e[b>>2]|=128<<(b%4<<3),b>55)for(md5cycle(d,e),b=0;16>b;b++)e[b]=0;return e[14]=8*c,md5cycle(d,e),d}function md5blk(a){var b,c=[];for(b=0;64>b;b+=4)c[b>>2]=a.charCodeAt(b)+(a.charCodeAt(b+1)<<8)+(a.charCodeAt(b+2)<<16)+(a.charCodeAt(b+3)<<24);return c}function rhex(a){for(var b="",c=0;4>c;c++)b+=hex_chr[a>>8*c+4&15]+hex_chr[a>>8*c&15];return b}function hex(a){for(var b=0;b<a.length;b++)a[b]=rhex(a[b]);return a.join("")}function md5(a){return hex(md51(a))}function add32(a,b){return a+b&4294967295}function add32(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}angular.module("livewellApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/foundations",{templateUrl:"views/foundations.html",controller:"FoundationsCtrl"}).when("/checkins",{templateUrl:"views/checkins.html",controller:"CheckinsCtrl"}).when("/daily_review",{templateUrl:"views/daily_review.html",controller:"DailyReviewCtrl"}).when("/daily_review/:id",{templateUrl:"views/daily_review.html",controller:"DailyReviewCtrl"}).when("/wellness",{templateUrl:"views/wellness.html",controller:"WellnessCtrl"}).when("/wellness/:section",{templateUrl:"views/wellness.html",controller:"WellnessCtrl"}).when("/wellness",{templateUrl:"views/wellness.html",controller:"WellnessCtrl"}).when("/instructions",{templateUrl:"views/instructions.html",controller:"InstructionsCtrl"}).when("/daily_review_summary",{templateUrl:"views/daily_review_summary.html",controller:"DailyReviewSummaryCtrl"}).when("/daily_review_conclusion",{templateUrl:"views/daily_review_conclusion.html",controller:"DailyReviewConclusionCtrl"}).when("/daily_review_conclusion/:id",{templateUrl:"views/daily_review_conclusion.html",controller:"DailyReviewConclusionCtrl"}).when("/daily_review_conclusion/:intervention_set/:id",{templateUrl:"views/daily_review_conclusion.html",controller:"DailyReviewConclusionCtrl"}).when("/medications",{templateUrl:"views/medications.html",controller:"MedicationsCtrl"}).when("/skills",{templateUrl:"views/skills.html",controller:"SkillsCtrl"}).when("/team",{templateUrl:"views/team.html",controller:"TeamCtrl"}).when("/intervention",{templateUrl:"views/intervention.html",controller:"InterventionCtrl"}).when("/intervention/:code",{templateUrl:"views/intervention.html",controller:"InterventionCtrl"}).when("/exit",{templateUrl:"views/exit.html",controller:"ExitCtrl"}).when("/charts",{templateUrl:"views/charts.html",controller:"ChartsCtrl"}).when("/weekly_check_in",{templateUrl:"views/weekly_check_in.html",controller:"WeeklyCheckInCtrl"}).when("/weekly_check_in/:questionIndex",{templateUrl:"views/weekly_check_in.html",controller:"WeeklyCheckInCtrl"}).when("/daily_check_in",{templateUrl:"views/daily_check_in.html",controller:"DailyCheckInCtrl"}).when("/daily_check_in/:id",{templateUrl:"views/daily_check_in.html",controller:"DailyCheckInCtrl"}).when("/settings",{templateUrl:"views/settings.html",controller:"SettingsCtrl"}).when("/localStorageBackupRestore",{templateUrl:"views/localstoragebackuprestore.html",controller:"LocalstoragebackuprestoreCtrl"}).when("/cms",{templateUrl:"views/cms.html",controller:"CmsCtrl"}).when("/admin",{templateUrl:"views/admin.html",controller:"AdminCtrl"}).when("/load_interventions",{templateUrl:"views/load_interventions.html",controller:"LoadInterventionsCtrl"}).when("/lesson_player/:id",{templateUrl:"views/lesson_player.html",controller:"LessonPlayerCtrl"}).when("/lesson_player/",{templateUrl:"views/lesson_player.html",controller:"LessonPlayerCtrl"}).when("/lesson_player/:id/:post",{templateUrl:"views/lesson_player.html",controller:"LessonPlayerCtrl"}).when("/skills_fundamentals",{templateUrl:"views/skills_fundamentals.html",controller:"SkillsFundamentalsCtrl"}).when("/skills_awareness",{templateUrl:"views/skills_awareness.html",controller:"SkillsAwarenessCtrl"}).when("/skills_lifestyle",{templateUrl:"views/skills_lifestyle.html",controller:"SkillsLifestyleCtrl"}).when("/skills_coping",{templateUrl:"views/skills_coping.html",controller:"SkillsCopingCtrl"}).when("/skills_team",{templateUrl:"views/skills_team.html",controller:"SkillsTeamCtrl"}).when("/skills_fundamentals",{templateUrl:"views/skills_fundamentals.html",controller:"SkillsFundamentalsCtrl"}).when("/ews",{templateUrl:"views/ews.html",controller:"EwsCtrl"}).when("/ews2",{templateUrl:"views/ews2.html",controller:"Ews2Ctrl"}).when("/schedule",{templateUrl:"views/schedule.html",controller:"ScheduleCtrl"}).when("/summary_player",{templateUrl:"views/summary_player.html",controller:"SummaryPlayerCtrl"}).when("/summary_player/:id/:post",{templateUrl:"views/summary_player.html",controller:"SummaryPlayerCtrl"}).when("/load_interventions_review",{templateUrl:"views/load_interventions_review.html",controller:"LoadInterventionsReviewCtrl"}).when("/mySkills",{templateUrl:"views/myskills.html",controller:"MyskillsCtrl"}).when("/chartsDashboard",{templateUrl:"views/chartsdashboard.html",controller:"ChartsdashboardCtrl"}).when("/chartsMedication",{templateUrl:"views/chartsmedication.html",controller:"ChartsmedicationCtrl"}).when("/chartsSleep",{templateUrl:"views/chartssleep.html",controller:"ChartssleepCtrl"}).when("/chartsRoutine",{templateUrl:"views/chartsroutine.html",controller:"ChartsroutineCtrl"}).when("/chartsActivity",{templateUrl:"views/chartsactivity.html",controller:"ChartsactivityCtrl"}).when("/dailyReviewTester",{templateUrl:"views/dailyreviewtester.html",controller:"DailyreviewtesterCtrl"}).when("/personalSnapshot",{templateUrl:"views/personalsnapshot.html",controller:"PersonalsnapshotCtrl"}).otherwise({redirectTo:"/"})}]).run(["$rootScope",function(){}]);var prwAddrHostAndPortHttps="https://app2.cbits.northwestern.edu",clearContents=function(a){$(a).is("input")&&$(a).val(""),$(a).is("textarea")&&$(a).text("")},s4=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)},guid=function(){return s4()+s4()+"-"+s4()+"-"+s4()+"-"+s4()+"-"+s4()+s4()+s4()},postArrayToPRImporter=function(a,b,c,d,e,f){_.isArray(d)&&_.each(d,function(d){postToPRImporter(a,b,c,d,e,f)})},postToPRImporter=function(a,b,c,d,e,f){var g=a+"/prImporter",h=md5(b),i={json:{Operation:"SubmitProbes",UserHash:h,Payload:[{PROBE:c,GUID:guid(),TIMESTAMP:(new Date).getTime()/1e3}],Checksum:""}};_.each(_.keys(d),function(a){i.json.Payload[0][a]=d[a]}),i.json.Payload=JSON.stringify(i.json.Payload),i.json.Checksum=md5(i.json.UserHash+i.json.Operation+i.json.Payload);var d=i;d.json=JSON.stringify(i.json),console.log("posting the following object to this URL: "+g),console.log(d),$.post(g,d).done(function(a){isNullOrUndefined(e)||e(f,a,d,g)})},html5DateAndTimeToJSDateTime=function(a,b){var c=a.split("-"),d=b.split(":"),e=parseInt(c[0]),f=parseInt(c[1])-1,g=parseInt(c[2]),h=parseInt(parseInt(d[0],10)),i=parseInt(parseInt(d[1],10)),j=0,k=new Date(e,f,g,h,i,j);return k};Date.prototype.toICal=function(){var a=this.getFullYear(),b=this.clone().addMonths(1).getMonth(),c=this.getDate(),d=this.getHours(),e=this.getMinutes(),f=this.getSeconds(),g=""+a.toString()+(10>b?"0"+b:b.toString())+(10>c?"0"+c:c.toString())+"T"+(10>d?"0"+d:d.toString())+(10>e?"0"+e:e.toString())+(10>f?"0"+f:f.toString());return g};var iCalToDate=function(a){var b=a.substr(0,4),c=parseInt(a.substr(4,2),10)-1,d=a.substr(6,2),e=a.substr(9,2),f=a.substr(11,2),g=a.substr(13,2),h=new Date(b,c,d,e,f,g);return h},isNullOrUndefined=function(a){return null==a||void 0==a||"null"==a},isStringGt0Len=function(a){var b="isString",c=!self.isNullOrUndefined(a)&&_.isString(a)&&a.length>0;return self.debug("s = "+a+"; ret = "+c,b),c},getQuotedAndDelimitedStr=function(a,b,c,d){var e=self.isNullOrUndefined(c)?"'":c;return self.isNullOrUndefined(a)||0==a.length?"":_.reduce(_.map(a,function(a){return!self.isNullOrUndefined(d)&&_.isArray(d)&&_.contains(d,a)?a:e+a+e}),function(c,d){return 1==a.length?d:c+b+d})},hex_chr="0123456789abcdef".split("");"5d41402abc4b2a76b9719d911017c592"!=md5("hello"),angular.module("livewellApp").controller("MainCtrl",["$scope","UserDetails",function(a){a.pageTitle="LiveWell",a.mainLinks=[{name:"Foundations",href:"foundations"},{name:"Check Ins",href:"checkins"},{name:"Daily Review",href:"daily_review"},{name:"Wellness Plan",href:"wellness/resources"},{name:"Skills",href:"skills"}]}]),angular.module("livewellApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("livewellApp").controller("FoundationsCtrl",["$scope",function(a){a.pageTitle="Foundations",a.mainLinks=[{name:"Overview",id:162,post:"foundations",type:"lesson_player"},{name:"Basic Facts ",id:183,post:"foundations",type:"lesson_player"},{name:"Medications",id:184,post:"foundations",type:"lesson_player"},{name:"Lifestyle Skills",id:185,post:"foundations",type:"lesson_player"},{name:"Coping Skills",id:186,post:"foundations",type:"lesson_player"},{name:"Team",id:187,post:"foundations",type:"lesson_player"},{name:"Awareness",id:188,post:"foundations",type:"lesson_player"},{name:"Action",id:189,post:"foundations",type:"lesson_player"}]}]),angular.module("livewellApp").controller("CheckinsCtrl",["$scope","$location",function(a){a.pageTitle="Check Ins"}]),angular.module("livewellApp").controller("DailyReviewCtrl",["$scope","$routeParams","UserData",function(a,b,c){a.pageTitle="Daily Review",a.interventionGroups=c.query("dailyReview"),a.code=parseInt(b.id)||1,a.selectedIntervention=_.where(a.interventionGroups,{code:a.code})[0]}]),angular.module("livewellApp").controller("WellnessCtrl",["$scope","$routeParams",function(a,b){switch(a.pageTitle="Wellness Plan",a.section=b.section||"",a.showResources=function(){a.riskVisible=!1,a.awarenessVisible=!1,a.resourcesVisible=!0,$("button#awareness").removeClass("active"),$("button#risk").removeClass("active"),$("button#resources").addClass("active")},a.showRisk=function(){a.awarenessVisible=!1,a.resourcesVisible=!1,a.riskVisible=!0,$("button#awareness").removeClass("active"),$("button#risk").addClass("active"),$("button#resources").removeClass("active")},a.showAwareness=function(){a.resourcesVisible=!1,a.riskVisible=!1,a.awarenessVisible=!0,$("button#resources").removeClass("active"),$("button#risk").removeClass("active"),$("button#awareness").addClass("active")},a.section){case"resources":a.showResources();break;case"awareness":a.showAwareness();break;case"risk":a.showRisk();break;default:a.resourcesVisible=!1,a.riskVisible=!1,a.awarenessVisible=!1}}]),angular.module("livewellApp").controller("InstructionsCtrl",["$scope","StaticContent",function(a){a.pageTitle="Instructions",a.mainLinks=[{id:198,name:"Introduction",post:"instructions"},{id:199,name:"Schedule",post:"instructions"},{id:201,name:"Settings",post:"instructions"},{id:202,name:"Coach",post:"instructions"},{id:203,name:"Psychiatrist",post:"instructions"},{id:204,name:"Foundations",post:"instructions"},{id:205,name:"Daily Check In",post:"instructions"},{id:372,name:"Weekly Check In",post:"instructions"},{id:369,name:"Daily Review",post:"instructions"},{id:370,name:"Charts",post:"instructions"},{id:371,name:"Wellness Plan",post:"instructions"}]}]),angular.module("livewellApp").controller("DailyReviewSummaryCtrl",["$scope",function(a){a.pageTitle="Daily Review"}]),angular.module("livewellApp").controller("DailyReviewConclusionCtrl",["$scope","$sanitize",function(a){a.pageTitle="Daily Review",a.lastNotification="￼Keep up the good work!<br/>Check out your medication plan in Reduce Risk."}]),angular.module("livewellApp").controller("MedicationsCtrl",["$scope","UserData",function(a,b){a.pageTitle="My Medications",a.medications=b.query("medications")}]),angular.module("livewellApp").controller("SkillsCtrl",["$scope",function(a){a.pageTitle="My Skills",a.mainLinks=[{id:"awareness",name:"Awareness"},{id:"lifestyle",name:"Lifestyle"},{id:"coping",name:"Coping"}]}]),angular.module("livewellApp").controller("TeamCtrl",["$scope","UserData",function(a,b){a.pageTitle="My Team",a.team=b.query("team")}]),angular.module("livewellApp").controller("InterventionCtrl",["$scope","$routeParams","Questions",function(a,b,c){a.pageTitle="Daily Review",console.log(b),a.questionGroups=c.query(b.code),a.hideProgressBar=!0,console.log(a.questionGroups)}]),angular.module("livewellApp").controller("ExitCtrl",["$scope",function(){navigator.app.exitApp()}]),angular.module("livewellApp").controller("ChartsCtrl",["$scope",function(a){a.pageTitle="My Charts",a.pageCollection=[{label:"Dashboard",href:"#/chartsDashboard"},{label:"Medication",href:"#/chartsMedication"},{label:"Sleep",href:"#/chartsSleep"},{label:"Routine",href:"#/chartsRoutine"},{label:"Activity",href:"#/chartsActivity"}]}]),angular.module("livewellApp").controller("ResourcesCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("livewellApp").controller("RisksCtrl",["$scope","UserData",function(a,b){a.smarts=b.query("smarts")}]),angular.module("livewellApp").controller("AwarenessCtrl",["$scope","UserData",function(a,b){a.awareness=b.query("awareness"),a.intervention_anchors=b.query("anchors"),a.plan=b.query("plan"),a.showAnchors=!1,a.showAction=!1,a.showPlan=!0,$(".btn-default").removeClass("active"),$("#load-plan").addClass("active"),a.loadAnchors=function(){a.showAnchors=!0,a.showAction=!1,a.showPlan=!1,$(".btn-default").removeClass("active"),$("#load-anchors").addClass("active")},a.loadAction=function(){a.showAnchors=!1,a.showAction=!0,a.showPlan=!1,$(".btn-default").removeClass("active"),$("#load-action").addClass("active")},a.loadPlan=function(){a.showAnchors=!1,a.showAction=!1,a.showPlan=!0,$(".btn-default").removeClass("active"),$("#load-plan").addClass("active")}}]),angular.module("livewellApp").controller("WeeklyCheckInCtrl",["$scope","$location","$routeParams","Questions","Guid","UserDetails",function(a,b,c,d,e,f){a.pageTitle="Weekly Check In";var g=d.query("phq9"),h=d.query("amrs");a.questionGroups=[g,h],a.questionIndex=parseInt(c.questionIndex)-1||0,a.submit=function(){var c=$("form").serializeArray(),d=e.create();_.each(c,function(b){var c={userId:f.find,survey:a.pageTitle,questionDataLabel:b.name,questionValue:b.value,sessionGUID:d,savedAt:new Date};console.log(c)}),b.path("/ews")}}]),angular.module("livewellApp").controller("DailyCheckInCtrl",["$scope","$location","$routeParams","Pound",function(a,b,c,d){a.pageTitle="Daily Check In",a.dailyCheckIn={gotUp:"",toBed:"",wellness:"",medications:"",startTime:new Date},a.responses=[{order:1,response:"-4",label:"-4",tailoredMessage:"some message"},{order:2,response:"-3",label:"-3",tailoredMessage:"some message"},{order:3,response:"-2",label:"-2",tailoredMessage:"some message"},{order:4,response:"-1",label:"-1",tailoredMessage:"some message"},{order:5,response:"0",label:"0",tailoredMessage:"some message"},{order:6,response:"1",label:"+1",tailoredMessage:"some message"},{order:7,response:"2",label:"+2",tailoredMessage:"some message"},{order:8,response:"3",label:"+3",tailoredMessage:"some message"},{order:9,response:"4",label:"+4",tailoredMessage:"some message"}],a.times=[{value:"0000",label:"12:00AM"},{value:"0030",label:"12:30AM"},{value:"0100",label:"1:00AM"},{value:"0130",label:"1:30AM"},{value:"0200",label:"2:00AM"},{value:"0200",label:"2:30AM"},{value:"0300",label:"3:00AM"},{value:"0300",label:"3:30AM"},{value:"0400",label:"4:00AM"},{value:"0400",label:"4:30AM"},{value:"0500",label:"5:00AM"},{value:"0500",label:"5:30AM"},{value:"0600",label:"6:00AM"},{value:"0600",label:"6:30AM"},{value:"0700",label:"7:00AM"},{value:"0700",label:"7:30AM"},{value:"0800",label:"8:00AM"},{value:"0800",label:"8:30AM"},{value:"0900",label:"9:00AM"},{value:"0900",label:"9:30AM"},{value:"1000",label:"10:00AM"},{value:"1000",label:"10:30AM"},{value:"1100",label:"11:00AM"},{value:"1100",label:"11:30AM"},{value:"1200",label:"12:00PM"},{value:"1230",label:"12:30PM"},{value:"1300",label:"1:00PM"},{value:"1330",label:"1:30PM"},{value:"1400",label:"2:00PM"},{value:"1430",label:"2:30PM"},{value:"1500",label:"3:00PM"},{value:"1530",label:"3:30PM"},{value:"1600",label:"4:00PM"},{value:"1630",label:"4:30PM"},{value:"1700",label:"5:00PM"},{value:"1730",label:"5:30PM"},{value:"1800",label:"6:00PM"},{value:"1830",label:"6:30PM"},{value:"1900",label:"7:00PM"},{value:"1930",label:"7:30PM"},{value:"2000",label:"8:00PM"},{value:"2030",label:"8:30PM"},{value:"2100",label:"9:00PM"},{value:"2130",label:"9:30PM"},{value:"2200",label:"10:00PM"},{value:"2230",label:"10:30PM"},{value:"2300",label:"11:00PM"},{value:"2330",label:"11:30PM"}],a.saveCheckIn=function(){a.dailyCheckIn.endTime=new Date,d.add("dailyCheckIn",a.dailyCheckIn),b.path("/daily_review/"+c.id)},a.highlight=function(b,c){$("label").removeClass("highlight"),$(b).addClass("highlight"),a.dailyCheckIn.wellness=c}}]),angular.module("livewellApp").controller("EwsCtrl",["$scope","UserData",function(a,b){a.pageTitle="Weekly Check In",a.ews=b.query("ews")}]),angular.module("livewellApp").controller("Ews2Ctrl",["$scope","UserData",function(a,b){a.pageTitle="Weekly Check In",a.ews2=b.query("ews2")}]),angular.module("livewellApp").service("StaticContent",function(){var a={},b="staticContent",c='<div class="alert alert-warning">No content has been provided for this section.</div>';return a.items=void 0!=localStorage[b]?JSON.parse(localStorage[b]):[],a.query=function(b){var d=_.where(a.items,{sectionKey:b});return d.length>0?d[0].content:c},a}),angular.module("livewellApp").controller("FetchContentCtrl",["$scope","$http",function(a,b){var c="https://livewell2.firebaseio.com/",d="appcollections",e="test",f=".json",g=function(a){_.each(a,function(a){b.get(c+a.route+f+"?userId="+e).success(function(b){localStorage[a.route]=JSON.stringify(void 0!=b.length?_.compact(b):b),$("#update-summary").append("<div class='alert alert-sm alert-success'>Updating "+a.label+" successful!</div>")}).error(function(){$("#update-summary").append("<div class='alert alert-sm alert-danger'>Unable to update "+a.label)})})};a.fetchContent=function(){$("#update-summary").html("<br/><br/>"),b.get(c+d+f).success(function(a){g(_.compact(a))}).error(function(){$("#update-summary").append("<div class='alert alert-sm alert-danger'>Unable to access content server, please make sure that you hav access to internet connection.<br/>If you continue to have difficulties please contact the study coordination staff.</div>")})}}]),angular.module("livewellApp").service("UserData",function(){var a={};return a.query=function(b){return console.log(b),a.items=void 0!=localStorage[b]?JSON.parse(localStorage[b]):[],console.log(a.items),a.items},a}),angular.module("livewellApp").service("Questions",["$http",function(a){var b="https://livewellnew.firebaseio.com",c={},d="questions",e="questionresponses",f="questioncriteria",g="responsecriteria";return c.query=function(a){if(void 0!=localStorage[d]){c.items=JSON.parse(localStorage[d]),void 0!=a&&(c.items=_.where(c.items,{questionGroup:a}));var b=JSON.parse(localStorage[e]),h=JSON.parse(localStorage[f]),i=JSON.parse(localStorage[g]);_.each(c.items,function(a,d){c.items[d].responses=_.where(b,{responseGroupId:a.responseGroupId}),c.items[d].criteria=_.where(h,{questionCriteriaId:a.questionCriteriaId}),_.each(c.items[d].responses,function(a,b){c.items[d].responses[b].criteria=_.where(i,{responseId:a.id})})}),c.responses=b,c.questions=JSON.parse(localStorage[d]),c.questionCriteria=h,c.responseCriteria=i,c.items=_.sortBy(c.items,"order")}else c.items=[];return c.items},c.save=function(c,d){localStorage[c]=JSON.stringify(d),a.put(b+"/"+c).success(alert("Data saved to server"))},c.uniqueQuestionGroups=function(){var a=[];return _.each(_.uniq(c.query(),"questionGroup"),function(b){a.push({name:b.questionGroup,id:b.questionGroup})}),_.uniq(a,"name")},c}]),angular.module("livewellApp").directive("questionGroup",["$location",function(a){return{templateUrl:"views/questionGroups/question_group.html",restrict:"E",link:function(b){b._LABELS=b.labels||[{name:"back",label:"&lt;"},{name:"next",label:"&gt;"},{name:"submit",label:"Save"}],b._SURVEY_FAILURE_LABEL=b.surveyFailureLabel||"<b>Unfortunately, this survey failed to load:</b>",b.questionGroups=_.flatten(b.questionGroups),b.surveyFailure=function(){var a={};return a=0==b.questionGroups.length&&_.isArray(b.questionGroups)?{error:!0,message:"There are no questions available."}:0==_.isArray(b.questionGroups)?{error:!0,message:"Questions are not properly formatted."}:{error:!1},1==a.error&&console.error(a),a},b.label=function(a){return _.where(b._LABELS,{name:a})[0].label},b.numberOfQuestions=b.questionGroups.length,b.currentIndex=b.questionIndex||0,b.randomizationScheme={},b.showQuestion=function(a){var c=b.questionGroups[b.currentIndex].questionDataLabel,d=_.where(b.questionGroups,{questionDataLabel:c}).length;if(void 0==b.randomizationScheme[c]&&(b.randomizationScheme[c]=Math.floor(Math.random()*d)+1),d>1){var e=0;for(e=0;e<b.questionGroups.length;e++)b.randomizationScheme[c]-1==0&&b.questionGroups[e].questionDataLabel==c&&(b.currentIndex=e,console.log(b.questionGroups,c,d,b.iterator,a==b.currentIndex))}return a==b.currentIndex},b.goesToIndex="",b.goesTo=function(a){for(var c=0;c<b.questionGroups.length;c++)b.questionGroups[c].questionDataLabel==a&&(b.goesToIndex=c)},b.next=function(a){console.log(a),1==a.responses.length&&""!=a.responses[0].goesTo&&b.goesTo(a.responses[0].goesTo),""!=b.goesToIndex?b.currentIndex=b.goesToIndex:b.currentIndex++,b.goesToIndex=""},b.back=function(){b.currentIndex--},b.submit=b.submit||function(){console.log("OVERRIDE THIS IN YOUR CONTROLLER SCOPE: ",$("form").serializeArray()),a.path("#/")},b.questionViewType=function(a){switch(a){case"radio":return"multiple";case"text":return"single";default:return"html"}}}}}]),angular.module("livewellApp").controller("SettingsCtrl",["$scope",function(a){a.pageTitle="Settings",a.checkinPrompt=null,a.reviewPrompt=null,a.savePromptSchedule=function(){$("form").append('<div class="alert alert-success">Your prompt times have been updated.</div>')}}]),angular.module("livewellApp").service("Guid",function(){var a={};return a.S4=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)},a.create=function(){return(a.S4()+a.S4()+"-"+a.S4()+"-4"+a.S4().substr(0,3)+"-"+a.S4()+"-"+a.S4()+a.S4()+a.S4()).toLowerCase()},a}),angular.module("livewellApp").controller("LoginCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("livewellApp").service("Pound",function(){var a={};return console.warn("CAUTION: localForage does not exist"),a.add=function(b,c){var d=[];return localStorage[b]?(d=JSON.parse(localStorage[b]),c.id=d.length+1,c.timestamp=new Date,c.created_at=new Date,console.log(c),d.push(c),localStorage[b]=JSON.stringify(d)):(c.id=1,c.timestamp=new Date,c.created_at=new Date,console.log(c),d=[c],localStorage[b]=JSON.stringify(d),a.add("pound",b)),{added:c}},a.save=function(b,c){var d=[];if(localStorage[b]){var e=!1;d=JSON.parse(localStorage[b]),_.each(d,function(a,b){a.id==c.id&&(e=!0,c.timestamp=new Date,d[b]=c)}),0==e&&(c.id=d.length+1,c.timestamp=new Date,c.created_at=new Date,d.push(c))}else c.id=1,c.created_at=new Date,d=[c],a.add("pound",b);return localStorage[b]=JSON.stringify(d),{saved:c}},a.update=function(a,b){var c=JSON.parse(localStorage[a]);return _.each(c,function(a,d){if(a.id==b.id){for(var e in a)a[e]=b[e],b.updated_at=new Date;c[d]=b}}),localStorage[a]=JSON.stringify(c),{updated:b}},a.find=function(a,b){var c=[];return localStorage[a]?(c=JSON.parse(localStorage[a]),b?_.where(c,b)||[]:c||[]):[]},a.list=function(){return a.find("pound")},a.delete=function(a,b){var c,d=[];return d=JSON.parse(localStorage[a]),_.each(d,function(a,e){a.id==b&&(c=d[e],d[e]=!1)}),localStorage[a]=JSON.stringify(_.compact(d)),{deleted:c}},a.nuke=function(b){var c=a.list;return localStorage.removeItem(b),_.each(c,function(a,d){a==b&&(c[d]=!1)}),localStorage.pound=JSON.stringify(_.compact(c)),{cleared:b}},a}),angular.module("livewellApp").service("UserDetails",["Pound",function(a){var b="user",c={};return void 0==localStorage[b],c.find=a.find(b,{uid:"1"})[0],c.update=function(d){return a.update(b,d),c.find},c.updateKey=function(a,b){var d=c.find;return d[a]=b,c.update(d)},c}]),angular.module("livewellApp").controller("LocalstoragebackuprestoreCtrl",["$scope","$sanitize",function($scope,$sanitize){$scope.initiateLocalBackup=function(){$scope.localStorageContents=JSON.stringify(JSON.stringify(localStorage))},$scope.restoreLocalBackup=function(){var restoreContent=JSON.parse(JSON.parse($scope.localStorageContents));_.each(_.keys(restoreContent),function(el){localStorage[el]=eval("restoreContent."+el)}),localStorage=JSON.parse($scope.localStorageContents)},$scope.updateRemoteService=function(){},$scope.wipeLocalStorage=function(){localStorage.clear()}}]),angular.module("livewellApp").controller("CmsCtrl",["$scope","Questions",function(a,b){a.formFieldTypes=["checkbox","radio","html","text","textarea","select","email","time","phone","url"],a.questionGroups=b.uniqueQuestionGroups(),a.questions=b.questions,a.responses=b.responses,a.questionCriteria=b.questionCriteria,a.responseCriteria=b.responseCriteria,console.log(b),a.viewTypes=[{name:"Table",value:"table"},{name:"Map",value:"map"}],a.viewType="table",a.questionGroup="cyoa",a.selectedQuestions=_.sortBy(b.query(a.questionGroup),"questionGroup"),a.showGroup=function(){a.selectedQuestions=_.sortBy(b.query(a.questionGroup),"questionGroup"),console.log(a.selectedQuestions)},a.editResponses=function(b){a.modalTitle="Edit Responses",a.responseGroupId=b,a.showResponses=_.where(a.responses,{responseGroupId:a.responseGroupId}),a.uniqueResponseGroups=_.pluck(_.uniq(a.responses,"responseGroupId"),"responseGroupId"),a.goesToOptions=a.selectedQuestions,$("#responseModal").modal()},a.saveResponses=function(){$("#responseModal").modal("toggle"),b.save("responses",a.responses),b.save("responseCriteria",a.responseCriteria)},a.editQuestion=function(){},a.addQuestion=function(){},a.deleteQuestion=function(){},a.editCriteria=function(){}}]),angular.module("livewellApp").controller("AdminCtrl",["$scope","Questions",function(){}]),angular.module("livewellApp").controller("LessonPlayerCtrl",["$scope","$routeParams","$sce","$location",function(a,b){a.getChapterContents=function(a,b){var c={id:parseInt(a)},d=_.where(b,c)[0].element_list.toString().split(","),e=[];return _.each(d,function(a){e.push(_.where(b,{id:parseInt(a)})[0])}),e},a.lessons=JSON.parse(localStorage.lessons),a.backButton="Back",a.backButtonClass="btn btn-default",a.nextButton="Next",a.nextButtonClass="btn btn-primary",a.currentSlideIndex=0,a.currentChapterContents=a.getChapterContents(b.id,a.lessons),a.currentSlideContents=a.currentChapterContents[a.currentSlideIndex].main_content,a.next=function(){a.currentSlideIndex+1<a.currentChapterContents.length?(a.currentSlideIndex++,a.currentSlideContents=a.currentChapterContents[a.currentSlideIndex].main_content):window.location.href=void 0==b.post?"#/":"#/"+b.post,a.nextButton=a.currentSlideIndex+1==a.currentChapterContents.length?"Next":"Next"},a.back=function(){a.currentSlideIndex>0&&(a.currentSlideIndex--,a.currentSlideContents=a.currentChapterContents[a.currentSlideIndex].main_content)}}]),angular.module("livewellApp").controller("LoadInterventionsCtrl",["$scope","$location","UserData",function(a,b,c){a.pageTitle="Topics",a.hierarchy=c.query("interventionLabels")}]),angular.module("livewellApp").controller("SkillsFundamentalsCtrl",["$scope",function(a){a.pageTitle="Fundamentals",a.mainLinks=[{name:"Prepare",id:537,post:"skills_fundamentals"},{name:"Plan",id:538,post:"skills_fundamentals"},{name:"Perform",id:539,post:"skills_fundamentals"}]}]),angular.module("livewellApp").controller("SkillsAwarenessCtrl",["$scope",function(a){a.pageTitle="Awareness",a.mainLinks=[{name:"Life Chart",id:540,post:"skills_awareness"},{name:"Signs Checklist",id:541,post:"skills_awareness"},{name:"Triggers Checklist",id:542,post:"skills_awareness"}]}]),angular.module("livewellApp").controller("SkillsLifestyleCtrl",["$scope",function(a){a.pageTitle="Lifestyle",a.mainLinks=[{name:"Sleep",id:543,post:"skills_lifestyle"},{name:"Medications",id:544,post:"skills_lifestyle"},{name:"Abstinence",id:545,post:"skills_lifestyle"},{name:"Routine",id:546,post:"skills_lifestyle"},{name:"Tranquility",id:547,post:"skills_lifestyle"},{name:"Socialization",id:562,post:"skills_lifestyle"}]}]),angular.module("livewellApp").controller("SkillsCopingCtrl",["$scope",function(a){a.pageTitle="Coping",a.mainLinks=[{name:"Bipolar Coping Questionnaire",id:548,post:"skills_coping",type:"lesson_player"},{name:"Bipolar Recovery Questionnaire",id:549,post:"skills_coping",type:"lesson_player"},{name:"Depression - Dial Up",id:550,post:"skills_coping",type:"summary_player"},{name:"Mania - Dial Down",id:551,post:"skills_coping",type:"summary_player"}]}]),angular.module("livewellApp").controller("SkillsTeamCtrl",["$scope",function(a){a.pageTitle="Team",a.mainLinks=[{name:"Duality",id:553,post:"skills_team"},{name:"Humilty",id:554,post:"skills_team"},{name:"Obligation",id:555,post:"skills_team"},{name:"Sacrifice",id:556,post:"skills_team"},{name:"Asking for Help",id:557,post:"skills_team"},{name:"Giving Back",id:558,post:"skills_team"},{name:"Doctor Checklist",id:559,post:"skills_team"},{name:"Support Checklist",id:560,post:"skills_team"},{name:"Hospital Checklist",id:561,post:"skills_team"}]
}]),angular.module("livewellApp").controller("ScheduleCtrl",["$scope","UserData",function(a,b){a.pageTitle="My Schedule",a.schedules=b.query("schedule")}]),angular.module("livewellApp").controller("SummaryPlayerCtrl",["$scope","$routeParams",function(a,b){a.getChapterContents=function(a,b){var c={id:parseInt(a)},d=_.where(b,c)[0];return d.element_array=_.where(b,c)[0].element_list.toString().split(","),d.contents=[],_.each(d.element_array,function(a){d.contents.push(_.where(b,{id:parseInt(a)})[0])}),d},a.lessons=JSON.parse(localStorage.lessons),a.chapter=a.getChapterContents(b.id,a.lessons),a.pageTitle=a.chapter.pretty_name,a.page=a.chapter.contents[0],a.addToMySkills=function(a){if(void 0==localStorage.mySkills)localStorage.mySkills=[parseInt(a)];else{var b=JSON.parse(localStorage.mySkills);b.push(parseInt(a))}window.location.href="#/mySkills"}}]),angular.module("livewellApp").controller("LoadInterventionsReviewCtrl",["$scope","UserData",function(a,b){a.pageTitle="Topics",a.hierarchy=b.query("interventionLabels")}]),angular.module("livewellApp").controller("MyskillsCtrl",["$scope","$location",function(a){a.pageTitle="My Skills",a.mySkills=JSON.parse(localStorage.mySkills)}]),angular.module("livewellApp").controller("ChartsdashboardCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("livewellApp").controller("ChartsmedicationCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("livewellApp").controller("ChartssleepCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("livewellApp").controller("ChartsroutineCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("livewellApp").controller("ChartsactivityCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("livewellApp").controller("DailyreviewtesterCtrl",["$scope","Pound","dailyReview",function(a,b,c){a.collection=b.find("dailyCheckIn"),a.proposedIntervention=c.getCode()}]),angular.module("livewellApp").controller("PersonalsnapshotCtrl",["$scope","UserData",function(a,b){a.sleepRoutineRanges=b.query("sleepRoutineRanges"),a.currentClinicalStatusCode=b.query("clinicalStatus").currentCode}]),angular.module("livewellApp").service("dailyReview",["Pound","UserData",function(a,b){{var c={},d={},e={},f=[];b.query("sleepRoutineRanges"),b.query("clinicalStatus").currentCode,a.find("dailyCheckIn")}return e.wellness=[0,0,0,0,0,0,0],e.medications=[1,1,1,1,1,1,1],e.sleep=[0,0,0,0,0,0,0],e.routine=[2,2,2,2,2,2,2],d.wellness=function(){var a=null;return a},d.medications=function(){var a=null;return a},d.sleep=function(){var a=0;return lessSevere>duration&&(a=-1),duration>moreSevere&&(a=1),less>duration&&duration>=lessSevere&&(a=-.5),duration>more&&moreSevere>=duration&&(a=.5),a},d.routine=function(){var a=0;return a},f[26]=function(){var a=!1;return a},f[25]=function(){var a=!1;return a},f[24]=function(){var a=!1;return a},f[23]=function(){var a=!1;return a},f[22]=function(){var a=!1;return a},f[21]=function(){var a=!1;return a},f[20]=function(){var a=!1;return a},f[19]=function(){var a=!1;return a},f[18]=function(){var a=!1;return a},f[17]=function(){var a=!1;return a},f[16]=function(){var a=!1;return a},f[15]=function(){var a=!1;return a},f[14]=function(){var a=!1;return a},f[13]=function(){var a=!1;return a},f[12]=function(){var a=!1;return a},f[11]=function(){var a=!1;return a},f[10]=function(){var a=!0;return a},f[9]=function(){var a=!1;return a},f[8]=function(){var a=!1;return a},f[7]=function(){var a=!1;return a},f[6]=function(){var a=!1;return a},f[5]=function(){var a=!1;return a},f[4]=function(){var a=!1;return a},f[3]=function(){var a=!1;return a},f[2]=function(){var a=!0;return a},f[1]=function(){var a=!1;return a},f[0]=null,c.getCode=function(){for(var a=f.length;a--;)if(1==f[a]())return a},c}]);