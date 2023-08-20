<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <!-- https://vuejs.org/guide/components/v-model.html -->
      <input
        type="text"
        v-model="searchQuery"
        placeholder="search for a city"
        class="w-full py-2 px-4 border-b bg-transparent focus:border-weather-secondary focus:outline-none focus:shadow-sm"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { response } from '../components/__mocks__/geoResponse'
import { Feature } from '../interfaces/response'
const searchQuery = ref<string>('')
const queryTimeout = ref<NodeJS.Timeout>()
const searchResult = ref<Feature[]>([])

/**
 * Retrieves the search results based on the current search query.
 *
 * @return {void} This function does not return a value.
 */
const getSearchResult = () => {
  // Clear the previous timeout if it exists
  clearTimeout(queryTimeout.value)

  // Set a new timeout to delay the execution of the search
  queryTimeout.value = setTimeout(async () => {
    // Check if the search query is not empty
    if (searchQuery.value !== '') {
      // Simulate a delay of 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Assign mock data to the search result
      //@ts-ignore --- Not sure why the mock data causes a type issue here
      searchResult.value = response.features // mock data because too lazy to do anything else

      // Exit the function after assigning the search result
      return
    }

    // Clear the search result if the search query is empty
    searchResult.value = []
  }, 300)
}
</script>
