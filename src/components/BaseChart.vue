<template>
    <div class="basetable">
    <div class="form-title">表格管理<span> / </span>基础表格</div>
		<div class="form-option">
			<button class="delete-all btn btn-primary" @click=deleteAll()>批量删除</button>
			<select class="gender-select"  v-model="key_gender">
			    <option disabled selected value="">选择性别</option>
				<option>男</option>
				<option>女</option>
			</select>
			<input class="search-input" type="text" placeholder="筛选关键词" v-model="key_word"></input>
			<!-- <button class="search-btn btn btn-primary" @click="search()">搜索</button> -->
		</div>
        <div class="table-responsive">
            <table class="table table-bordered table-hover">
                <tbody>
                    <tr class="form-title">
					    <th class="col-xs-1"><input type="checkbox" @click=selectAll()
                            :checked="multiSelect.length === tabledata.length && tabledata.length !== 0"></input></th>
					    <th class="col-xs-1">性别</th>
					    <th class="col-xs-2">姓名</th>
					    <th class="col-xs-6">地址</th>
					    <th class="col-xs-2">操作</th>
				    </tr>
                    <tr class="active" v-for="(item, index) in dataSelect" :key=index>
                        <td class="col-xs-1"><input type="checkbox" @click=selectOne(item.name) 
                            :checked="multiSelect.indexOf(item.name)>=0"></input></td>
						<td class="col-xs-1">{{item.gender}}</td>
						<td class="col-xs-2">{{item.name}}</td>
						<td class="col-xs-6">{{item.address}}</td>
						<td class="col-xs-2">
							<button type="button" class="btn btn-primary btn-sm" 
                                @click="handleEdit(index)">编辑</button>
							<button type="button" class="btn btn-danger btn-sm"
                                @click="handleDelete(index)">删除</button>
						</td>
                    </tr>
                </tbody>
            </table>
        </div>
  </div>
</template>

<script>
export default {
  name: "Basechart",
  data() {
    return {
      tabledata: [],
      deleteList: [],
      multiSelect: [],
      isSelectedAll: false,
      key_gender: "",
      key_word: ""
    };
  },
  mounted() {
    this.loadData();
  },

  computed: {
    dataSelect() {
      const self = this;
      if (self.key_gender && !self.key_word) {
        return self.tabledata.filter(function(d) {
          return d.gender === self.key_gender;
        });
      } else if (!self.key_gender && self.key_word) {
        return self.tabledata.filter(function(d) {
          if (
            d.address.indexOf(self.key_word) > -1 ||
            d.name.indexOf(self.key_word) > -1
          ) {
            return d;
          }
        });
      } else if (self.key_gender && self.key_word) {
        return self.tabledata.filter(function(d) {
          if (
            (d.gender === self.key_gender &&
              d.address.indexOf(self.key_word) > -1) ||
            d.name.indexOf(self.key_word) > -1
          ) {
            return d;
          }
        });
      }
      return self.tabledata;
    }
  },

  methods: {
    loadData() {
      this.$http
        .get("http://localhost:8080/static/tabledata.json", {})
        .then(response => {
          this.tabledata = response.data.list;
        })
        .catch(error => {
          alert(error);
        });
    },

    handleEdit(index) {
      alert("编辑第" + (index + 1) + "行");
    },

    handleDelete(index) {
      alert("删除第" + (index + 1) + "行");
    },

    selectOne(itemName) {
      let nameIndex = this.multiSelect.indexOf(itemName);
      if (nameIndex >= 0) {
        this.multiSelect.splice(nameIndex, 1);
      } else {
        this.multiSelect.push(itemName);
      }
    },

    selectAll() {
      this.isSelectedAll = !this.isSelectedAll;
      if (this.isSelectedAll) {
        this.multiSelect = [];
        this.tabledata.forEach(function(item) {
          this.multiSelect.push(item.name);
        }, this);
      } else {
        this.multiSelect = [];
      }
    },

    deleteAll() {
      let newTable = [];
      for (let i = 0; i < this.tabledata.length; i++) {
        if (this.multiSelect.indexOf(this.tabledata[i].name) < 0) {
          newTable.push(this.tabledata[i]);
        }
      }
      this.multiSelect = [];
      this.tabledata = newTable;
    }
  }
};
</script>

<style>
.basetable {
  min-width: 768px;
  max-width: 80%;
  padding: 20px 50px 0 50px;
}

.basetable .form-option {
  height: 34px;
}

.basetable .gender-select,
.basetable .search-input {
  height: 34px;
  color: black;
  margin-left: 20px;
  border: 1px;
  border-radius: 4px;
  vertical-align: middle;
}

.basetable button {
  outline: none;
}

.search-input {
  margin-right: 20px;
}

.form-title {
  margin-left: -10px;
  margin-bottom: 15px;
}

.basetable .table-responsive {
  margin-top: 20px;
  color: black;
}

.basetable .table-responsive th {
  padding: 8px 15px;
  border: 1px solid #aeb8c1;
}

.basetable .table-responsive td {
  padding: 4px 4px 4px 10px;
}

.basetable .table-responsive td button {
  margin-left: 10px;
}

.basetable .table-responsive th,
.basetable .table-responsive td {
  vertical-align: middle;
}
.basetable .table-responsive th:first-child,
.basetable .table-responsive td:first-child {
  text-align: center;
}

.basetable .table-responsive .form-title th {
  background-color: #cdd3de;
}
</style>

