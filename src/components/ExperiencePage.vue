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
                <h4 id="techStackDescriptionTitle" ref="techStackDescriptionTitle">Click an Icon above to learn more!</h4>
                <p id="techStackDescription" ref="techStackDescription"></p>
              </div>
            </div>
            <div id="experienceContainer">
              <div id="workExperience">
                <h4>Work Experience</h4>
                <p>Blah Blah Blah</p>
              </div>
              <div id="educationExperience">
                <h4>Education Experience</h4>
                <p>Blah blah blah</p>
              </div>
            </div>
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
  margin: 2% 0 2% 0;
  justify-content: space-evenly;
}
#techStackDescriptionContainer {
  background-color: #F1A208;
  border-radius: 1%;
  padding: 2%;
  margin: 0 0 2% 0;
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
#experienceContainer {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
#workExperience, #educationExperience {
  width: 45%;
  background-color: #F1A208;
  color: white;
  padding: 3% 0;
  margin: 2% 0;
}
#experienceContainer h4 {
  margin: 0;
  font-size: 3rem;
}
</style>
