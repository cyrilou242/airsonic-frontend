<template functional>
  <div class="mt-5">
    <div v-if="props.loading" class="d-flex justify-content-center">
      <span class="spinner-border" />
    </div>
    <slot v-else />
  </div>
</template>
