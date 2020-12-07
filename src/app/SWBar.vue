<template>
  <b-alert
    class="fixed-top m-0 rounded-0"
    variant="info"
    :show="swMessage != null"
    dismissible
    @dismissed="clearSwRefresh">
    <template v-if="swMessage != null" >
      <strong>{{ swMessage }}</strong><br>
    </template>
  </b-alert>
</template>
<script lang="ts">
  import Vue from 'vue'
  import { mapState, mapMutations } from 'vuex'

  export default Vue.extend({
    computed: {
      ...mapState(['swRefresh', 'swMessage'])
    },
    methods: {
      ...mapMutations([
        'clearSwRefresh'
      ]),
    },
  })
</script>
