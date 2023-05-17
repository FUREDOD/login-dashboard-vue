<template>
  <div class="User Line chart">
    <h1>welcome Widget {{ title }} {{ data }}</h1>
    <table>
      <thead>
        <tr>
          <th>salesData</th>
          <th>activityData</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td>{{ item.salesData }}</td>
          <td>{{ item.activityData }}</td>
        </tr>
      </tbody>
    </table>
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
