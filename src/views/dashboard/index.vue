<template>
<div class="dashboard-container">

</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
   min-height: calc(100vh - 50px);
    width: 100%;
    background: url(./../../assets/home.jpg) center center no-repeat;
    background-size: cover;
  }
 
}
</style>
