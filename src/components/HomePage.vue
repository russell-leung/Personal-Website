<template>
    <div id="homePage">
      <div id="greeting">
        <h2 id="greeting-top">Hi, I'm</h2>
        <h1 id="greeting-bottom">Russell Leung</h1>
      </div>
      <div id="about-me">
        I'm a college student studying Computer Science at Northeastern
        University! I'm looking to pursue a career in and have experience
        with Full-Stack development.
      </div>
    </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
#greeting {
  font-size: 4rem;
}
#greeting-top {
  margin-bottom: 0;
  animation: fadeIn 2s;
  font-weight: normal;
}
#greeting-bottom {
  margin: 0;
  animation: fadeIn 4s;
}
#about-me {
  font-size: 3rem;
  background-color: #F1A208;
  border-radius: 1%;
  padding: 2%;
  margin: 2% 0 0 0;
  color: white;
  animation: fadeIn 6s;
}
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
