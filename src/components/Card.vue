<template>
    <li class="card">
        <h3>{{ item.title }}</h3>
    <h4>{{ item.originalTitle }}</h4>
    <img v-if="item.flag" :src="item.flag" width="30" alt="">
    <p v-else>{{ item.language }}</p>
    <p>{{ item.vote }}</p>
    <ul>
      <li>
        <font-awesome-icon icon="fa-solid fa-star" />
        <font-awesome-icon icon="fa-regular fa-star" />
      </li>
    </ul>
  </li>
</template>  

<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    },
}
</script>

<style lang="scss" scoped>
</style>