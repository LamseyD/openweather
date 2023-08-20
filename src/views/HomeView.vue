<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <!-- https://vuejs.org/guide/components/v-model.html -->
      <input
        type="text"
        v-model="searchQuery"
        @input="getSearchResult"
        placeholder="search for a city"
        class="w-full py-2 px-4 border-b bg-transparent focus:border-weather-secondary focus:outline-none focus:shadow-sm"
      />
      <ul
        class="absolute bg-weather-secondary text-white w-full shadow-md py-2 px-1 top-[66px]"
        v-if="searchQuery"
      >
        <p v-if="searchError">Something went wrong</p>
        <p v-if="!searchError && !isLoading && searchResult.length === 0">No results found</p>
        <template v-else>
          <li v-for="result in searchResult" :key="result.id" class="py-2 cursor-pointer">
            {{ result.place_name }}
          </li>
        </template>
      </ul>
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
const searchError = ref<boolean>(false)
const isLoading = ref<boolean>(false)

/**
 * Retrieves the search results based on the current search query.
 *
 * @return {void} This function does not return a value.
 */
const getSearchResult = () => {
  isLoading.value = true
  // Clear the previous timeout if it exists
  clearTimeout(queryTimeout.value)

  // Set a new timeout to delay the execution of the search
  queryTimeout.value = setTimeout(async () => {
    // Check if the search query is not empty
    if (searchQuery.value !== '') {
      try {
        // Simulate a delay of 2 seconds
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // Assign mock data to the search result
        //@ts-ignore --- Not sure why the mock data causes a type issue here
        searchResult.value = response.features // mock data because too lazy to do anything else

        // Exit the function after assigning the search result
      } catch (error) {
        console.error('failed to reach api', error)
        searchError.value = true
      }
      console.log('#4', isLoading.value)
      isLoading.value = false
      return
    }

    // Clear the search result if the search query is empty
    searchResult.value = []
    searchError.value = false
  }, 300)
}
</script>
