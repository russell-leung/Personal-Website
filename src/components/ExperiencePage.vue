<template>
    <div id="experiencePage">
        <h1>Experience</h1>
        <div>
            <div id="techStackContainer">
              <div id="techStackIconsContainer">
                <div
                  v-for="(iconDescription, icon) in techStackIcons"
                  :key="icon"
                >
                  <font-awesome-icon
                    :icon="['fab', icon]"
                    :alt="iconDescription"
                    size="7x"
                    class="icon"
                    @click="changeTechStackDescription(icon)"
                  />
                </div>
              </div>
              <div id="techStackDescriptionContainer" ref="techStackDescriptionContainer">
                <font-awesome-icon
                    :icon="['fas', 'x']"
                    size="3x"
                    class="icon"
                    style="float: right;"
                    @click="hideTechStackDescription()"
                  />
                <h4 id="techStackDescriptionTitle" ref="techStackDescriptionTitle"></h4>
                <p id="techStackDescription" ref="techStackDescription"></p>
              </div>
            </div>
            <div> Work Experience Next! </div>
            <div> Now Education! </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ExperiencePage',
  data () {
    return {
      techStackIcons: {
        'js': 'I have 3+ years of experience with JavaScript (JS). ' +
              'I\'ve used JS, Node.js, JQuery, and Vue.js both in personal projects, ' +
              'such as this website you\'re viewing currentl, as well as in ' +
              'my prior internship experience at HydraCor, LLC as a Software Developer Intern.',
        'python': 'python description',
        'java': 'java description',
        'html5': 'html5 description',
        'css3': 'css3 description',
        'php': 'php description',
        'linux': 'linux description',
        // TODO: link github here, using <a> tags and render this with v-html
        'git': 'git description',
      },
    }
  },
  methods: {
    changeTechStackDescription (icon) {
      this.$refs.techStackDescriptionContainer.style.display = 'block';
      this.$refs.techStackDescriptionTitle.innerHTML = icon.toUpperCase();
      this.$refs.techStackDescription.innerHTML = this.techStackIcons[icon];
    },
    hideTechStackDescription () {
      this.$refs.techStackDescriptionContainer.style.display = 'none';
    }
  }
}
</script>

<style scoped>
h1 {
    color: #F1A208;
    font-size: 6rem;
    margin: 10% 0 0 0;
}
.icon:hover {
  cursor: pointer;
}
#techStackIconsContainer {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 2% 0 0 0;
  justify-content: space-evenly;
}
#techStackDescriptionContainer {
  display: none;
  background-color: #F1A208;
  border-radius: 1%;
  padding: 2%;
  margin: 2% 0 0 0;
  color: white;
}
#techStackDescriptionTitle {
  font-size: 3rem;
  margin: 0;
}
#techStackDescription {
  font-size: 2rem;
  margin: 0;
}
</style>
