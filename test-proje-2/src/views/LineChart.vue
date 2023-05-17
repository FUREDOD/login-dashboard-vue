<template>
  <div class="User Line chart">
    <h1>{{ title }} {{ data }}</h1>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">salesData</th>
          <th class="text-left">activityData</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td>{{ item.salesData }}</td>
          <td>{{ item.activityData }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
export default {
  name: "UserLinechart",

  data() {
    return {};
  },

  methods: {},

  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },

    data: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
};
</script>
