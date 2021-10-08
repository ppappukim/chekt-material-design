<template>
  <div>
    <div class="avatar">
      <MyAvatar v-bind:icon="'avatar'" v-bind:width="18" v-bind:color="'#DFF0F3'" v-bind:backgroundColor="'#8FC5D0'" />
      <MyAvatar v-bind:icon="'avatar'" v-bind:width="24" v-bind:color="'#DFF0F3'" v-bind:backgroundColor="'#8FC5D0'"/>
      <MyAvatar v-bind:icon="'avatar'" v-bind:width="32" v-bind:color="'#DFF0F3'" v-bind:backgroundColor="'#8FC5D0'"/>
      <MyAvatar v-bind:icon="'avatar'" v-bind:width="36" v-bind:color="'#DFF0F3'" v-bind:backgroundColor="'#8FC5D0'"/>
      <MyAvatar v-bind:icon="'avatar'" v-bind:width="42" v-bind:color="'#DFF0F3'" v-bind:backgroundColor="'#8FC5D0'"/>
      <MyAvatar v-bind:icon="'avatar'" v-bind:width="48" v-bind:color="'#DFF0F3'" v-bind:backgroundColor="'#8FC5D0'"/>
    </div>
    <div class="avatar" style="margin-top:50px;">
      <MyAvatar v-bind:icon="'avatar'" v-bind:width="42" v-bind:color="'#DFF0F3'" v-bind:backgroundColor="'#8FC5D0'" />
      <MyAvatar v-bind:icon="'avatar'" v-bind:width="42" v-bind:color="'#EDDFF3'" v-bind:backgroundColor="'#CF8FD0'"/>
      <MyAvatar v-bind:icon="'avatar'" v-bind:width="42" v-bind:color="'#EADFF3'" v-bind:backgroundColor="'#A08FD0'"/>
      <MyAvatar v-bind:icon="'avatar'" v-bind:width="42" v-bind:color="'#F3E9DF'" v-bind:backgroundColor="'#EBB667'"/>
      <MyAvatar v-bind:icon="'avatar'" v-bind:width="42" v-bind:color="'#DFE5F3'" v-bind:backgroundColor="'#679CEB'"/>
      <MyAvatar v-bind:icon="'avatar'" v-bind:width="42 " v-bind:color="'#F3DFDF'" v-bind:backgroundColor="'#EB6767'"/>
      <MyAvatar v-bind:icon="'avatar'" v-bind:width="42 " v-bind:color="'#EAF3DF'" v-bind:backgroundColor="'#7ACC82'"/>
      <MyAvatar v-bind:icon="'avatar'" v-bind:width="42 " v-bind:color="'#DFE6F3'" v-bind:backgroundColor="'#717AAB'"/>
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
