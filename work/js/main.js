(function(){
  'use strict';
  console.log("init done.");

  var vm = new Vue({
    el: '#app',
    data: {
      first_name: 'hiroshi',
      last_name: 'furuyama',
      todos: [{
        title: 'task 1',
        isDone: false
      },{
        title: 'task 2',
        isDone: false
      },{
        title: 'task 3',
        isDone: true
      },{
        title: 'task 4',
        isDone: false
      }],
      newItem: 'input something'
    },
    methods: {
      addItem: function(){

        var item = {
          title: this.newItem,
          isDone: false
        };

        this.todos.push(item);
        this.newItem = '';
      },
      deleteItem: function(index){
        if(!confirm('kesu?')){
          return;
        }
        this.todos.splice(index,1);
      },
      purge: function(){
        if(!confirm('owatta no kesu?')){
          return;
        }

//        this.todos = this.todos.filter(function(todo){
//          return !todo.isDone;
//        });
        this.todos = this.remaining;
      }
    },
    computed: {
      remaining: function() {
        var items = this.todos.filter(function(todo){
          return !todo.isDone;
        });
        return items;
      }
    }
  });
})();
