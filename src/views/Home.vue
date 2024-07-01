<script setup>


</script>

<template>
    
  <ul>
    <li><RouterLink to="/days">What day is it?</RouterLink></li>
    <li><RouterLink to="/months">What month is it?</RouterLink></li>
    <li><RouterLink to="/weather">Hows the weather?</RouterLink></li>
    <li><RouterLink to="/rps">Rock Scissors Paper!</RouterLink></li>
  </ul>
  
</template>

<style scoped>
a {
    text-decoration: none;
    padding: 10px;
    color:black;
}

 ul {
    list-style: none;
    
}

li {
    background-color: orangered;
    border: solid;
    width: 250px;
    margin: 10px;
    padding: 10px;
    text-align: center;
    
 }

li:hover {
    background-color:blueviolet;
}


</style>
