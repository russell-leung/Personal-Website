<template>
    <div id="homePage">
      <div id="greeting">
        <h2 id="greeting-top">Hi, Im</h2>
        <h1 id="greeting-bottom">Russell Leung</h1>
      </div>
      <div id="about-me">
        About me content, have the animation zoom in from thr right, also put padding on the top and make it like 3 rem
      </div>
      <!-- TODO: fix about-me and add social medias in a div below with flex or something -->
    </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
#greeting {
  float: left;
  font-size: 4rem;
}
#greeting-top {
  margin-bottom: 0;
  animation: fadeIn 3s;
}
#greeting-bottom {
  margin-top: 0;
  animation: fadeIn 5s;
}
#about-me {
  font-size: 3rem;
}
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
