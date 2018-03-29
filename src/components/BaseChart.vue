<template>
    <div class="basetable">
    <div class="form-title">表格管理<span> / </span>基础表格</div>
		<div class="form-option">
			<button class="delete-all btn btn-primary">批量删除</button>
			<select class="gender-select">
			  <option disabled selected style="display:none;">选择性别</option>
				<option>男</option>
				<option>女</option>
			</select>
			<input class="search-input" type="text" placeholder="筛选关键词"></input>
			<button class="search-btn btn btn-primary" >搜索</button>
		</div>
        <div class="table-responsive">
            <table class="table table-bordered table-hover">
                <tr class="form-title">
					<th class="col-xs-1"><input type="checkbox"></input></th>
					<th class="col-xs-1">性别</th>
					<th class="col-xs-2">姓名</th>
					<th class="col-xs-6">地址</th>
					<th class="col-xs-2">操作</th>
				</tr>
            </table>
        </div>
  </div>
</template>

<script>
export default {
  name: "Basechart",
  data() {
    return {
      tabledata: []
    };
  },
  mounted() {
    this.loadData();
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

.content .table-responsive {
  margin-top: 20px;
  color: black;
}

.content .table-responsive th {
  padding: 8px 15px;
  border: 1px solid #aeb8c1;
}

.content .table-responsive td {
  padding: 4px 4px 4px 10px;
}

.content .table-responsive td button {
  margin-left: 10px;
}

.content .table-responsive th,
.content .table-responsive td {
  vertical-align: middle;
}
.content .table-responsive th:first-child,
.content .table-responsive td:first-child {
    text-align: center;
}

.content .table-responsive .form-title th {
  background-color: #cdd3de;
}
</style>

