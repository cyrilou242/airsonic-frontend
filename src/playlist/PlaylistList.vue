<template>
  <div class="mt-5">
    <Tiles square>
      <Tile v-for="item in playlists" :key="item.id"
            :image="item.image"
            :to="{name: 'playlist', params: { id: item.id } }"
            :title="item.name">
        <template #text>
          <strong>{{ item.songCount }}</strong> songs
        </template>
      </Tile>
    </Tiles>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  import { mapState, mapActions } from 'vuex'

  export default Vue.extend({
    computed: {
      ...mapState([
        'playlists'
      ]),
    },
    methods: {
      ...mapActions({
        deletePlaylist: 'deletePlaylist'
      })
    }
  })
</script>
