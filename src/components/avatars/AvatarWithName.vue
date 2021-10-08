<template>
  <div>
    <div class="avatar">
      <MyAvatar v-bind:icon="'avatar-name'" v-bind:width="18" v-bind:nameSize="8" v-bind:avatarName="'BK'" v-bind:backgroundColor="'#8FC5D0'"/>
      <MyAvatar v-bind:icon="'avatar-name'" v-bind:width="24" v-bind:nameSize="12" v-bind:avatarName="'BK'" v-bind:backgroundColor="'#8FC5D0'"/>
      <MyAvatar v-bind:icon="'avatar-name'" v-bind:width="32" v-bind:nameSize="16" v-bind:avatarName="'BK'" v-bind:backgroundColor="'#8FC5D0'"/>
      <MyAvatar v-bind:icon="'avatar-name'" v-bind:width="36" v-bind:nameSize="18" v-bind:avatarName="'BK'" v-bind:backgroundColor="'#8FC5D0'"/>
      <MyAvatar v-bind:icon="'avatar-name'" v-bind:width="42" v-bind:nameSize="20" v-bind:avatarName="'BK'" v-bind:backgroundColor="'#8FC5D0'"/>
      <MyAvatar v-bind:icon="'avatar-name'" v-bind:width="48" v-bind:nameSize="24" v-bind:avatarName="'BK'" v-bind:backgroundColor="'#8FC5D0'"/>
    </div>
    <div class="avatar" style="margin-top:50px;">
      <MyAvatar v-bind:icon="'avatar-name'" v-bind:width="42" v-bind:nameSize="20" v-bind:avatarName="'BK'" v-bind:backgroundColor="'#8FC5D0'" />
      <MyAvatar v-bind:icon="'avatar-name'" v-bind:width="42" v-bind:nameSize="20" v-bind:avatarName="'TS'" v-bind:backgroundColor="'#CF8FD0'"/>
      <MyAvatar v-bind:icon="'avatar-name'" v-bind:width="42" v-bind:nameSize="20" v-bind:avatarName="'RK'" v-bind:backgroundColor="'#A08FD0'"/>
      <MyAvatar v-bind:icon="'avatar-name'" v-bind:width="42" v-bind:nameSize="20" v-bind:avatarName="'KP'" v-bind:backgroundColor="'#EBB667'"/>
      <MyAvatar v-bind:icon="'avatar-name'" v-bind:width="42" v-bind:nameSize="20" v-bind:avatarName="'DL'" v-bind:backgroundColor="'#679CEB'"/>
      <MyAvatar v-bind:icon="'avatar-name'" v-bind:width="42 " v-bind:nameSize="20" v-bind:avatarName="'L'" v-bind:backgroundColor="'#EB6767'"/>
      <MyAvatar v-bind:icon="'avatar-name'" v-bind:width="42 " v-bind:nameSize="20" v-bind:avatarName="'DE'" v-bind:backgroundColor="'#7ACC82'"/>
      <MyAvatar v-bind:icon="'avatar-name'" v-bind:width="42 " v-bind:nameSize="20" v-bind:avatarName="'JL'" v-bind:backgroundColor="'#717AAB'"/>
    </div>
  </div>
</template>

<script>
import MyAvatar from '@/MyAvatar'
export default {
  components: {
    MyAvatar,
  },
  computed: {
  },
  data: function() {
    return {
    }
  },
  watch: {
  },
  created: function () {
  },
  mounted: function () {
  },
  methods: {
  }
}
</script>

<style scoped>
.avatar {
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 20px;
}

</style>
