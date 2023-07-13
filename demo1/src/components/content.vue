<template>
    <div id="content">  
        <Edit  @childV="childByValue"></Edit>
        <List :info="form"> </List>
        
 
    </div>
  </template>
  
  <script>
    import Edit from './child.vue';
    import List from './list.vue';
    let form;
       export default {
          name:'Content',
          components: {
          Edit,
          List,
          
          
          
    },
    data(){
    console.log(form)
    return{
      form
    }
  },
    
    methods:{
            childByValue: function (childV) {
              this.form = childV;
            }
          }
       }
  </script>
  
  <style>
  </style>