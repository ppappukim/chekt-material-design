<template>
  <div>
    <div class="avatar-wrapper">
      <div class="avatar">
        <MyAvatar v-bind:class="{ hidden:ishasImg }" v-bind:icon="'avatar'" v-bind:width="60" v-bind:backgroundColor="'#8FC5D0'" v-bind:color="'#DFF0F3'"/>
        <img v-bind:class="{ show:ishasImg }" id="__chekt-avatar-img" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"/>
      </div>
      <input @change="changeAvatar($event)" id="__chekt-avatar-upload-input" type="file" accept="image/*"/>
      <label for="__chekt-avatar-upload-input" class="__chekt-avatar-upload-input-label">
        <MyIcon v-bind:icon="'upload'" v-bind:width="18"/>
      </label>
    </div>
  </div>
</template>

<script>
import MyAvatar from '@/MyAvatar'
import MyIcon from '@/MyIcon'
export default {
  components: {
    MyAvatar,
    MyIcon
  },
  computed: {
  },
  data: function() {
    return {
      avatarImg: '',
      ishasImg: true,
    }
  },
  watch: {
    avatarImg: function () {
      console.log(this.avatarImg);
    }
  },
  created: function () {
  },
  mounted: function () {
    this.init()
  },
  methods: {
    init: function () {
    },
    changeAvatar: function (e) {
      // INIT
      var img = document.getElementById('__chekt-avatar-img')
      var that = this

      // ACTION
      if (e.currentTarget.files[0]) {
        var reader = new FileReader()
        reader.readAsDataURL(e.currentTarget.files[0])    
        reader.onload = function (data) {   
          img.src = data.currentTarget.result
          if (img.src) that.ishasImg = true
          else that.ishasImg = false
        }
      }

    }
  }
}
</script>

<style scoped>
.avatar-wrapper {
  position: relative;
}

.avatar {
  position: absolute;
}

#__chekt-avatar-img {
	height: 60px;
	width: 60px;
  border-radius: 50%;
  overflow: hidden;
  display: none;
  object-fit: cover;
}

#__chekt-avatar-img.show {
  display: block;
}

.hidden {
  display: none;
}

#__chekt-avatar-upload-input {
  display: none;
}
.__chekt-avatar-upload-input-label {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  position: absolute;
  background-color: white;
  top: 42px;
  left: 42px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 
  rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
  rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
  rgb(0 0 0 / 12%) 0px 1px 1px 0px, 
  rgb(60 66 87 / 16%) 0px 0px 0px 1px, 
  rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
  rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
  rgb(60 66 87 / 8%) 0px 2px 5px 0px;
}
.__chekt-avatar-upload-input-label:hover {
  color: var(--chekt-primary-color);

}

</style>
