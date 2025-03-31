<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)

  import { ref } from 'vue'

  const location = ref('end')

  const items = [
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me 2' },
  ]
  const locations = [
    'top',
    'bottom',
    'start',
    'end',
    'center',
  ]


</script>
<template>
  <div class="text-center">
    <v-select
      v-model="location"
      :items="locations"
      label="Location"
    ></v-select>
    <v-menu :location="location">
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Dropdown
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<template>

  <v-card
    class="mx-auto"
    max-width="300"
  >
    <v-list :items="items"></v-list>
  </v-card>
</template>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
