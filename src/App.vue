<template>
<v-app>
    <v-content>
      <router-view/>
    </v-content>
</v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
@font-face {
font-family: "OpenSans-Bold";
src: url("./assets/OpenSans-Bold.ttf");
}
.site-bg{
  background: rgb(62, 59, 214);
  font-family: 'OpenSans-Bold'
}
</style>
