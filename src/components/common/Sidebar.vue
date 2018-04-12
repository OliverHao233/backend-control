<template>
  <div class="sidebar">
      <ul class="super-title">
          <li v-for="item in titles">
              <h4 @click="toggleSublist(item)">{{item.name}}</h4>
              <ul v-show="item.isSubShow" class="sub-title">
                <li v-for="subitem in item.subTitles" @click="goTo(subitem)">
                    {{subitem.name}}
                </li>
              </ul>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      titles: [
        {
          name: "简介",
          menuUrl: ""
        },
        {
          name: "表格管理",
          isSubShow: false,
          menuUrl: "/home",
          subTitles: [
            {
              name: "基础表格",
              menuUrl: "/home/basechart"
            },
            {
              name: "Vue表格组件",
              menuUrl: "/home/vuechart"
            }
          ]
        },
        {
          name: "其他"
        }
      ]
    };
  },
  methods: {
    toggleSublist(item) {
      item.isSubShow = !item.isSubShow;
    },

    goTo(subitem) {
      this.$router.push(subitem.menuUrl);
    }
  }
};
</script>

<style>
.sidebar {
  position: fixed;
  top: 50px;
  left: 0;
  padding-top: 15px;
  height: 100%;
  width: 250px;
  text-align: center;
  background-color: #0a0a0a80;
  cursor: pointer;
}

.sidebar ul {
  padding-left: 0px;
}

.sidebar li {
  padding-top: 5px;
  list-style: none;
  transition: all 0.3s;
}

.sidebar h4:hover {
  background-color: #333;
}

.sidebar h4 {
  margin: 0;
  line-height: 2;
}

.sub-title li {
  padding-bottom: 5px;
}

.sub-title li:hover {
  background-color: #333;
}
</style>

