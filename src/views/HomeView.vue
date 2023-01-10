<template>
  <v-container fluid>
    <v-card>
      <v-textarea name="input-1" label="JE sheet" auto-grow></v-textarea>
      <v-card-actions>
        <v-btn elevation="2">降</v-btn>
        <v-spacer></v-spacer>
        <v-btn elevation="2">升</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",

  components: {},
});
</script>
