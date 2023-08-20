<template>
  <!-- The difference is that an element with v-show will always be rendered and remain in the DOM; v-show only toggles the display CSS property of the element -->
  <div
    class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8"
    v-show="modalActive"
  >
    <!-- The directive v-if is used to conditionally render a block. The block will only be rendered if the directive's expression returns a truthy value. -->
    <div v-if="modalActive" class="p-4 bg-white self-start mt-32 max-w-screen-md">
      <slot />
      <button class="text-white mt-8 bg-weather-primary py-2 px-6" @click="$emit('close-modal')">
        Close
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IBaseModalEmits, IBaseModalProps } from '../interfaces/interfaces'

// # https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits
defineEmits<IBaseModalEmits>()

// allow component to accept props
defineProps<IBaseModalProps>()
</script>

<style scoped></style>
