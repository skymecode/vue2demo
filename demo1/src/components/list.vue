<template>
  <div id="list">
    <el-table :data="tableData"  style="width: 100%">
      <!-- <el-table-column
          label="编码"
          width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column> -->
      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="性别" width="180">
        <template slot-scope="scope">
          <i class="el-icon-user"></i>
          <span style="margin-left: 10px">{{ scope.row.sex }}</span>
        </template>
      </el-table-column>
      <el-table-column label="专业" width="180">
        <template slot-scope="scope">
          <i class="el-icon-s-flag"></i>
          <span style="margin-left: 10px">{{ scope.row.major }}</span>
        </template>
      </el-table-column>
      <el-table-column label="电话" width="180">
        <template slot-scope="scope">
          <i class="el-icon-phone"></i>
          <span style="margin-left: 10px">{{ scope.row.phone }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini"  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="学生编辑" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话" :label-width="formLabelWidth">
            <el-input v-model="form.phone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth">
            <el-select v-model="form.sex" placeholder="请选择">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="专业" :label-width="formLabelWidth">
            <el-select v-model="form.major" placeholder="请选择">
              <el-option label="Java" value="Java"></el-option>
              <el-option label="Web" value="Web"></el-option>
              <el-option label="UI" value="UI"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="change" >确 定</el-button>
        </div>
      </el-dialog>
  </div>

</template>

<script>
  export default {
    name: 'List',
    props: ["info"],
    data() {
      let id = 0;
      const tableList = [];


      // 从本地缓存中加载数据
      let jsonStr = localStorage.getItem("tableList");
      if (jsonStr) {
        tableList.push(...JSON.parse(jsonStr));
      }
      let tableData = Array.from(tableList);
      console.log(tableData)
      tableList.forEach(v => {
        console.log(v)

        if (v.id > id) {
            console.log(v.id)
          id = v.id;
        }

      });
     let form= {
          name: 'xxx',
          sex: '',
          major:'',
          phone:'',
        };
        let index;
        

      id++;
      return {
        dialogFormVisible: false,
        tableData,
        id,
        form,
        index,
        

      }
    },
    watch: {
      info(newData) {
        this.tableData = newData;
      }
    },
    methods: {
      change(){
        this.tableData[this.index]=this.form;
        let jsonStr = JSON.stringify(this.tableData);
        localStorage.setItem("tableList",jsonStr);
        this.dialogFormVisible = false;
      },

      handleEdit(index, row) {
       this.dialogFormVisible = true
       this.form=this.tableData[index];
       this.index=index;
        console.log(index, row);
      },
      handleDelete(index, row) {
        this.$confirm('此操作删除该学生, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
         console.log(this.tableData)
        // let ix = this.tableData.findIndex(v => v.id == this.id);
        this.tableData.splice(index,1);//删除
        let jsonStr = JSON.stringify(this.tableData);
        localStorage.setItem("tableList",jsonStr);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
       

        console.log(index, row);
      },

    }
  }

</script>

<style>
  #list {
    display: flex;
  }

</style>
