<template>
  <div class="sidebar-container elevated">
    <div class="sidebar-fixed d-none d-md-block sticky-top overflow-auto vh-100">
      <Nav />
    </div>
    <b-sidebar
      :visible="showMenu"
      class="d-md-none"
      sidebar-class="elevated"
      bg-variant=""
      shadow="lg"
      no-header
      backdrop
      backdrop-variant=""
      @hidden="hideMenu"
    >
      <Nav />
    </b-sidebar>
  </div>
</template>
<style>
  .sidebar-container nav {
    padding-top: 0.5rem;
    padding-bottom: 5.5rem;
  }
  .sidebar-container .sidebar-fixed {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 2rem;
    width: 250px;
  }

  .sidebar-container .logo {
    height: 48px;
  }

  .sidebar-container .nav-link {
    width: calc(100%);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .sidebar-container a.nav-link .b-icon {
    margin-right: 0.75rem;
  }

  .sidebar-container a.nav-link:not(.active) .b-icon {
    color: var(--text-muted);
  }
</style>
<script lang="ts">
  import Vue from 'vue'
  import Nav from './Nav.vue'
  import { mapState, mapActions } from 'vuex'

  export default Vue.extend({
    components: {
      Nav,
    },
    computed: {
      ...mapState(['showMenu'])
    },
    methods: {
      ...mapActions(['hideMenu']),
    },
  })
</script>
