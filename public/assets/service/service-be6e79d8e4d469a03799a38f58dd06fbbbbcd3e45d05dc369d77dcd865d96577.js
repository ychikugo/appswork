"use strict";app.factory("userService",["$http",function($http){var serviceBase="/api/users/",obj={};return obj.getUser=function(id){return $http.get(serviceBase+id)},obj.getUsers=function(searchWhere){return $http.get(serviceBase+"list",{params:searchWhere})},obj.getLoginUser=function(email,password,save_login_flg){return $http.get(serviceBase+"login?email="+email+"&password="+password+"&save_login_flg="+save_login_flg)},obj.authEmail=function(email_token){return $http.get(serviceBase+"mail_auth?email_token="+email_token)},obj.getMypageUser=function(){return $http.get(serviceBase+"mypage")},obj.logoutUser=function(){return $http.get(serviceBase+"logout")},obj.insertUser=function(user){return $http.post(serviceBase,user)},obj.updateUser=function(user){return $http.put(serviceBase+"update_user",user)},obj.deleteUser=function(id){return $http["delete"](serviceBase+"delete?id="+id).then(function(status){return status.data})},obj.setCsrf=function(){$http.defaults.headers.common={"X-Requested-With":"XMLHttpRequest"},$http.defaults.headers.post["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.put["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.patch["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.common["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content")},obj}]),app.factory("itemService",["$http",function($http){var serviceBase="/api/items/",obj={};return obj.getItem=function(id){return $http.get(serviceBase+id)},obj.getItems=function(searchWhere){return $http.get(serviceBase+"list",{params:searchWhere})},obj.insertItem=function(item){return $http.post(serviceBase,item)},obj.updateItem=function(id,item){return $http.put(serviceBase,{id:id,item:item}).then(function(status){return status.data})},obj.deleteItem=function(id){return $http["delete"](serviceBase+"delete?id="+id).then(function(status){return status.data})},obj.setCsrf=function(){$http.defaults.headers.common={"X-Requested-With":"XMLHttpRequest"},$http.defaults.headers.post["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.put["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.patch["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.common["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content")},obj}]),app.factory("itemProposeService",["$http",function($http){var serviceBase="/api/item_proposes/",obj={};return obj.getItemPropose=function(id){return $http.get(serviceBase+id)},obj.insertItemPropose=function(item){return $http.post(serviceBase,item)},obj.updateItemPropose=function(item){return $http.post(serviceBase,item)},obj.deleteItemPropose=function(id){return $http["delete"](serviceBase+"delete?id="+id).then(function(status){return status.data})},obj.setCsrf=function(){$http.defaults.headers.common={"X-Requested-With":"XMLHttpRequest"},$http.defaults.headers.post["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.put["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.patch["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.common["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content")},obj}]),app.factory("itemCommentService",["$http",function($http){var serviceBase="/api/item_comments/",obj={};return obj.getItemComment=function(id){return $http.get(serviceBase+id)},obj.getItemComments=function(id){return $http.get(serviceBase+"list?id="+id)},obj.insertItemComment=function(item){return $http.post(serviceBase,item)},obj.updateItemComment=function(item){return $http.post(serviceBase,item)},obj.deleteItemComment=function(id){return $http["delete"](serviceBase+"delete?id="+id).then(function(status){return status.data})},obj.setCsrf=function(){$http.defaults.headers.common={"X-Requested-With":"XMLHttpRequest"},$http.defaults.headers.post["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.put["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.patch["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.common["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content")},obj}]),app.factory("messageService",["$http",function($http){var serviceBase="/api/messages/",obj={};return obj.getMessages=function(searchWhere){return $http.get(serviceBase+"list",{params:searchWhere})},obj.insertMessage=function(message){return $http.post(serviceBase,message)},obj.insertProposeOkMessage=function(message){return $http.post(serviceBase+"propose",message)},obj.updateMessage=function(id,message){return $http.put(serviceBase,{id:id,message:message}).then(function(status){return status.data})},obj.deleteMessage=function(id){return $http["delete"](serviceBase+"delete?id="+id).then(function(status){return status.data})},obj.setCsrf=function(){$http.defaults.headers.common={"X-Requested-With":"XMLHttpRequest"},$http.defaults.headers.post["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.put["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.patch["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.common["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content")},obj}]),app.factory("itemFavoriteService",["$http",function($http){var serviceBase="/api/item_favorites/",obj={};return obj.getItemFavorite=function(id){return $http.get(serviceBase+id)},obj.updateItemFavorite=function(flg,itemId){return $http.post(serviceBase+"?flg="+flg+"&item_id="+itemId)},obj.setCsrf=function(){$http.defaults.headers.common={"X-Requested-With":"XMLHttpRequest"},$http.defaults.headers.post["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.put["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.patch["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.common["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content")},obj}]),app.factory("notificationService",["$http",function($http){var serviceBase="/api/notifications/",obj={};return obj.getNotifications=function(){return $http.get(serviceBase+"list")},obj.insertNotification=function(message){return $http.post(serviceBase,message)},obj.updateNotification=function(id,message){return $http.put(serviceBase,{id:id,message:message}).then(function(status){return status.data})},obj.deleteNotification=function(id,kbn){return $http["delete"](serviceBase+"delete?id="+id+"&kbn="+kbn)},obj.setCsrf=function(){$http.defaults.headers.common={"X-Requested-With":"XMLHttpRequest"},$http.defaults.headers.post["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.put["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.patch["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.common["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content")},obj}]),app.factory("noticeService",["$http",function($http){var serviceBase="/api/notices/",obj={};return obj.getNotices=function(){return $http.get(serviceBase+"list")},obj.setCsrf=function(){$http.defaults.headers.common={"X-Requested-With":"XMLHttpRequest"},$http.defaults.headers.post["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.put["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.patch["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.common["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content")},obj}]),app.factory("connectionService",["$http",function($http){var serviceBase="/api/connections/",obj={};return obj.getConnectins=function(){return $http.get(serviceBase)},obj.setCsrf=function(){$http.defaults.headers.common={"X-Requested-With":"XMLHttpRequest"},$http.defaults.headers.post["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.put["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.patch["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$http.defaults.headers.common["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content")},obj}]);