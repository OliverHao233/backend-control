<template>
  <div class="easytable">
      <div class="form-title">表格管理<span> / </span>基础表格</div>
      <v-table
        is-horizontal-resize
        is-vertical-resize
        sort-always
        style="width:100%"
        :columns="columns"
        :table-data="tableData"
        row-hover-color="#eee"
        row-click-color="#edf7ff"
        :filter-method="filterMethod"
        :multiple-sort="multipleSort"
        @sort-change="sortChange"
      >
      </v-table>
  </div>
</template>

<script>
import "vue-easytable/libs/themes-base/index.css";
import { VTable, VPagination } from "vue-easytable";

export default {
  name: "Vuechart",
  components: {
    VTable,
    VPagination
  },
  data() {
    return {
      multipleSort: false,
      tableData: [],
      columns: [
        {
          field: "name",
          title: "姓名",
          width: 80,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true,
          orderBy: "asc"
        },
        {
          field: "gender",
          title: "性别",
          width: 60,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true,
          filterMultiple: false,
          filters: [
            {
              label: "男",
              value: "男"
            },
            {
              label: "女",
              value: "女"
            }
          ]
        },
        {
          field: "tel",
          title: "手机号码",
          width: 150,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "hobby",
          title: "爱好",
          width: 150,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "address",
          title: "地址",
          width: 280,
          titleAlign: "center",
          columnAlign: "left",
          isResize: true
        }
      ]
    };
  },
  methods: {
    filterMethod(filters) {
      let tableData = this.getTableData();
      if (Array.isArray(filters.gender)) {
        tableData = tableData.filter(item => item.gender === filters.gender[0]);
      }
      this.tableData = tableData;
    },

    getTableData() {
      return [
        {
          name: "赵伟",
          gender: "男",
          tel: "156*****1987",
          hobby: "钢琴、书法、唱歌",
          address: "上海市黄浦区金陵东路569号17楼"
        },
        {
          name: "李伟",
          gender: "女",
          tel: "182*****1538",
          hobby: "钢琴、书法、唱歌",
          address: "上海市奉贤区南桥镇立新路12号2楼"
        },
        {
          name: "孙伟",
          gender: "男",
          tel: "161*****0097",
          hobby: "钢琴、书法、唱歌",
          address: "上海市崇明县城桥镇八一路739号"
        },
        {
          name: "周伟",
          gender: "女",
          tel: "197*****1123",
          hobby: "钢琴、书法、唱歌",
          address: "上海市青浦区青浦镇章浜路24号"
        },
        {
          name: "吴伟",
          gender: "男",
          tel: "183*****6678",
          hobby: "钢琴、书法、唱歌",
          address: "上海市松江区乐都西路867-871号"
        }
      ];
    },

    sortChange(params) {
      let tableData = this.getTableData();
      tableData = tableData.sort(function compareFunction(param1, param2) {
        return param1.name.localeCompare(param2.name, "zh");
      });
      if (params.name === "asc") {
        this.tableData = tableData;
      } else {
        this.tableData = tableData.reverse();
      }
    }
  },
  created() {
    this.tableData = this.getTableData();
  }
};
</script>

<style>
.easytable {
  padding: 20px 50px 0 50px;
}

.easytable .form-title {
  margin-left: -10px;
  margin-bottom: 15px;
}

.v-table-class {
  color: black;
  font-size: 14px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
</style>
