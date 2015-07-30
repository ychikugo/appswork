"use strict";app.factory("userModel",["$rootScope",function($rootScope){var user={id:0,email:"",password:"",current_password:"",display_name:"",confirm_flg:"",content:"",img_path:"/assets/noimage.gif",user_kbn:191,sex:203,birthday:"",area:300,save_login_flg:1,work_categories:[]};return{user:{get:function(){return user},getUserWorkCategories:function(){return{id:0,user_id:0,name_id:0}},set:function(model){user=model,$rootScope.$broadcast("changedUser")}}}}]),app.factory("usersModel",["$rootScope",function($rootScope){var users={};return{users:{get:function(){return users},set:function(models){users=models,$rootScope.$broadcast("changedUsers")}}}}]),app.factory("workModel",["$rootScope",function($rootScope){var work={id:0,work_kbn:"",payment_kbn:"121",price:0,price_kbn:"405",price_kbn_nm:"50\u4e07\u5186 \u301c 100\u4e07\u5186",period_kbn:"",noki:"",hour_price_kbn:"136",hour_price_kbn_nm:"3,000\u5186 - 4,000\u5186 / \u6642\u9593",week_hour_kbn:"151",week_hour_kbn_nm:"10\u6642\u9593\u672a\u6e80",week_hour_period_kbn:"173",week_hour_period_kbn_nm:"1 - 3\u30f6\u6708",option_kbn:"",limit_date:"",title:"",content:"",preview_flg:0,work_kbn_nm:"\u9078\u629e\u3055\u308c\u3066\u3044\u307e\u305b\u3093"};return{work:{get:function(){return work},set:function(model){work=model,$rootScope.$broadcast("changedWork")}}}}]),app.factory("workRecruitModel",["$rootScope",function($rootScope){var workRecruit={id:0,work_kbn:"",payment_kbn:"121",price:0,price_kbn:"405",price_kbn_nm:"50\u4e07\u5186 \u301c 100\u4e07\u5186",period_kbn:"",noki:"",hour_price_kbn:"136",hour_price_kbn_nm:"3,000\u5186 - 4,000\u5186 / \u6642\u9593",week_hour_kbn:"151",week_hour_kbn_nm:"10\u6642\u9593\u672a\u6e80",week_hour_period_kbn:"173",week_hour_period_kbn_nm:"1 - 3\u30f6\u6708",option_kbn:"",limit_date:"",title:"",content:"",preview_flg:0,work_kbn_nm:"\u9078\u629e\u3055\u308c\u3066\u3044\u307e\u305b\u3093"};return{workRecruit:{get:function(){return workRecruit},init:function(){workRecruit.id=0,workRecruit.work_kbn="",workRecruit.payment_kbn="121",workRecruit.price="",workRecruit.price_kbn="405",workRecruit.price_kbn_nm="50\u4e07\u5186 \u301c 100\u4e07\u5186",workRecruit.period_kbn="",workRecruit.noki="",workRecruit.hour_price_kbn="136",workRecruit.hour_price_kbn_nm="3,000\u5186 - 4,000\u5186 / \u6642\u9593",workRecruit.week_hour_kbn="151",workRecruit.week_hour_kbn_nm="10\u6642\u9593\u672a\u6e80",workRecruit.week_hour_period_kbn="173",workRecruit.week_hour_period_kbn_nm="1 - 3\u30f6\u6708",workRecruit.option_kbn="",workRecruit.limit_date="",workRecruit.title="",workRecruit.content="",workRecruit.work_kbn_nm="\u9078\u629e\u3055\u308c\u3066\u3044\u307e\u305b\u3093"},set:function(model){workRecruit=model,$rootScope.$broadcast("changedWorkRecruit")}}}}]),app.factory("worksModel",["$rootScope",function($rootScope){var works={};return{works:{get:function(){return works},set:function(models){works=models,$rootScope.$broadcast("changedWorks")}}}}]),app.factory("worksIndexModel",["$rootScope",function($rootScope){var worksIndex={};return{worksIndex:{get:function(){return worksIndex},set:function(models){worksIndex=models,$rootScope.$broadcast("changedWorksIndex")}}}}]),app.factory("searchModel",["$rootScope",function($rootScope){var search={work_kbn1:!0,work_kbn2:!0,work_kbn3:!0,work_kbn4:!0,work_kbn11:!0,work_kbn12:!0,work_kbn13:!0,work_kbn14:!0,work_kbn15:!0,work_kbn16:!0,work_kbn21:!0,work_kbn22:!0,work_kbn23:!0,work_kbn24:!0,work_kbn25:!0,work_kbn31:!0,work_kbn32:!0,work_kbn33:!0,work_kbn41:!0,work_kbn42:!0,work_kbn43:!0,work_kbn44:!0,work_kbn51:!0,work_kbn52:!0,work_kbn53:!0,work_kbn61:!0,work_kbn62:!0,work_kbn63:!0,work_kbn64:!0,work_kbn65:!0,work_kbn66:!0,work_kbn67:!0,work_kbn68:!0,work_kbn71:!0,work_kbn72:!0,work_kbn73:!0,work_kbn74:!0,work_kbn75:!0,work_kbn76:!0,payment_kbn:123,hourPriceStart:"",hourPriceEnd:"",projectPriceStart:"",projectPriceEnd:"",order_kbn:411,favorite_only_flg:!1,exclude_end_flg:!1,order_kbn_nm:"\u65b0\u7740\u9806"};return{search:{get:function(){return search},set:function(model){search=model,$rootScope.$broadcast("changedSearch")}}}}]),app.factory("workProposeModel",["$rootScope",function($rootScope){var workPropose={payment_kbn:"121",price:0,period_kbn:"",noki:"",hour_price:0,week_hour_kbn:"151",week_hour_kbn_nm:"10\u6642\u9593\u672a\u6e80",week_hour_period_kbn:"173",week_hour_period_kbn_nm:"1 - 3\u30f6\u6708",content:""};return{workPropose:{get:function(){return workPropose},getInitModel:function(){return{payment_kbn:"121",price:0,period_kbn:"",noki:"",hour_price:0,week_hour_kbn:"151",week_hour_kbn_nm:"10\u6642\u9593\u672a\u6e80",week_hour_period_kbn:"173",week_hour_period_kbn_nm:"1 - 3\u30f6\u6708",content:""}},set:function(model){workPropose=model,$rootScope.$broadcast("changedWorkPropose")}}}}]),app.factory("workProposesModel",["$rootScope",function($rootScope){var workProposes={};return{workProposes:{get:function(){return workProposes},set:function(models){workProposes=models,$rootScope.$broadcast("changedWorkProposes")}}}}]),app.factory("searchMessageModel",["$rootScope",function($rootScope){var searchMessage={title:""};return{searchMessage:{get:function(){return searchMessage},set:function(model){searchMessage=model,$rootScope.$broadcast("changedSearchMessage")}}}}]),app.factory("searchUserModel",["$rootScope",function($rootScope){var searchUser={user_name:""};return{searchUser:{get:function(){return searchUser},set:function(model){searchUser=model,$rootScope.$broadcast("changedSearchUser")}}}}]),app.factory("messageModel",["$rootScope",function($rootScope){var message={id:0,item_id:0,parent_id:0,send_user_id:0,receive_user_id:0,title:"",content:""};return{message:{get:function(){return message},getInitModel:function(){return{id:0,item_id:0,parent_id:0,send_user_id:0,receive_user_id:0,title:"",content:""}},set:function(model){message=model,$rootScope.$broadcast("changedMessage")}}}}]),app.factory("proposeOkMessageModel",["$rootScope",function($rootScope){var proposeOkMessage={id:0,item_id:0,parent_id:0,send_user_id:0,receive_user_id:0,title:"",content:""};return{proposeOkMessage:{get:function(){return proposeOkMessage},getInitModel:function(){return{id:0,item_id:0,parent_id:0,send_user_id:0,receive_user_id:0,title:"",content:""}},set:function(model){proposeOkMessage=model,$rootScope.$broadcast("changedProposeOkMessage")}}}}]),app.factory("messagesModel",["$rootScope",function($rootScope){var messages={};return{messages:{get:function(){return messages},set:function(models){messages=models,$rootScope.$broadcast("changedMessages")}}}}]),app.factory("employerModel",["$rootScope",function($rootScope){var employer={};return{employer:{get:function(){return employer},set:function(model){employer=model,$rootScope.$broadcast("changedEmployer")}}}}]),app.factory("workCommentsModel",["$rootScope",function($rootScope){var workComments={};return{workComments:{get:function(){return workComments},set:function(models){workComments=models,$rootScope.$broadcast("changedWorkComments")}}}}]),app.factory("workCommentModel",["$rootScope",function($rootScope){var workComment={id:0,item_id:0,comment:""};return{workComment:{get:function(){return workComment},getInitModel:function(){return{id:0,item_id:0,comment:""}},set:function(model){workComment=model,$rootScope.$broadcast("changedWorkComment")}}}}]),app.factory("workFavoriteModel",["$rootScope",function($rootScope){var workFavorite={id:0,item_id:0};return{workFavorite:{get:function(){return workFavorite},set:function(model){workFavorite=model,$rootScope.$broadcast("changedWorkFavorite")}}}}]),app.factory("noticesModel",["$rootScope",function($rootScope){var notices={};return{notices:{get:function(){return notices},set:function(models){notices=models,$rootScope.$broadcast("changedNotices")}}}}]),app.factory("connectionsModel",["$rootScope",function($rootScope){var connections={};return{connections:{get:function(){return connections},set:function(models){connections=models,$rootScope.$broadcast("changedConnections")}}}}]);