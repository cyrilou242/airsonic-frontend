<template>
  <div class="mt-5">
    <Tiles>
      <Tile v-for="item in items" :key="item.id"
            :image="item.image"
            :to="{name: 'genre', params: { id: item.id } }"
            :title="item.name">
        <template #text>
          <strong>{{ item.albumCount }}</strong> albums •
          <strong>{{ item.songCount }}</strong> songs
        </template>
      </Tile>
    </Tiles>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    data() {
      return {
        items: [],
      }
    },
    created() {
      this.$api.getGenres().then((items) => {
        this.items = items
      })
    },
  })
</script>
