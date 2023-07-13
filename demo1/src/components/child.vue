<template>
  <div id="edit">
    <el-button size="mini" @click="dialogFormVisible = true" icon="el-icon-plus" type="primary">新增</el-button>

    <el-dialog title="学生新增" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules">
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth" prop="phone">
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
            <el-option label="Java" value="java"></el-option>
            <el-option label="Web" value="web"></el-option>
            <el-option label="UI" value="ui"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="insert">确 定</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
  export default {
    name: 'Edit',
    data() {
      let id = 0;
      const tableList = [];
      // 从本地缓存中加载数据
      let jsonStr = localStorage.getItem("tableList");
      if (jsonStr) {
        tableList.push(...JSON.parse(jsonStr));
      }
      tableList.forEach(v => {
        if (v.id > id) {
          id = v.id;
        }
      });
      id++;

      return {
        rules: {
          name: [{
            required: true,
            message: '请输入姓名',
            trigger: 'blur'
          }, {
            pattern: /[\u4e00-\u9fa5]+/,
            message: '姓名格式错误',
            trigger: 'blur'
          }],
          phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          // 这个只能验证手机号
          // { pattern:/^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/, message: "请输入合法手机号", trigger: "blur" }
          { pattern:/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/, message: "请输入合法手机号/电话号", trigger: "blur" }
        ],
        },


        form: {
          name: '',
          sex: '男',
          major: 'UI',
          phone: '',

        },
        dialogFormVisible: false,

        formLabelWidth: '120px',
        tableList
      }
    },
    methods: {
      restForm() {
        this.form = {
          name: '',
          sex: '男',
          major: 'UI',
          phone: '',
        };
      },
      save() {
        // localStorage.name = this.form.name;
        // localStorage.sex = this.form.sex;
        // localStorage.major = this.form.mjaor;
        // localStorage.phone = this.form.phone;
        // console.log('now pretend I did more stuff...');
        // this.dialogFormVisible=false;

      },
      insert() {
        this.tableList.push(this.form)
        let jsonStr = JSON.stringify(this.tableList);
        localStorage.setItem("tableList", jsonStr);
        this.$emit('childV', this.tableList)
        this.$message({
          message: '添加学生成功',
          type: 'success'
        });
        this.dialogFormVisible = false;
        this.restForm();
      }

    }

  }

</script>

<style>
  #edit {
    display: flex;
  }

</style>
