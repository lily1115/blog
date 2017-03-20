<template>
  <div id="myindex">
    <ul>
        <li>
            <router-link to='/add'>add</router-link>
        </li>
        <li>
            <router-link to='/list'>list</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style>
#myindex {
    display: flex;
}
</style>
