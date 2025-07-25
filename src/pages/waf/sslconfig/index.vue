<template>
  <div>
    <t-card class="list-card-container">
      <t-row justify="space-between">
        <div class="left-operation-container">
          <t-button @click="handleAddSslConfig" theme="success"> {{ $t('common.new') }} </t-button>
        </div>
        <div class="right-operation-container">
          <t-form ref="form" :data="searchformData" :label-width="300" layout="inline" colon :style="{ marginBottom: '8px' }">
            <t-form-item :label="$t('page.ssl.label_domains')" name="domains">
              <t-input v-model="searchformData.domains" class="search-input" clearable></t-input>
            </t-form-item>
            <t-form-item>
              <t-button theme="primary" :style="{ marginLeft: '8px' }" @click="getList('all')">
                {{ $t('common.search') }}
              </t-button>
            </t-form-item>
          </t-form>
        </div>
      </t-row>
      <t-alert theme="info" :message="$t('page.ssl.alert_message')" close>
        <template #operation>
          <span @click="handleJumpOnlineUrl">{{ $t('common.online_document') }}</span>
        </template>
      </t-alert>
      <div class="table-container">
        <t-table :columns="columns" :data="data" :rowKey="rowKey" :verticalAlign="verticalAlign" :hover="hover"
                 :pagination="pagination" :selected-row-keys="selectedRowKeys" :loading="dataLoading"
                 @page-change="rehandlePageChange"
                 :headerAffixedTop="true" >

          <template #domain="{ row }">
            <span> {{ row.domain }}</span>
          </template>

          <template #op="slotProps">
            <a class="t-button-link" @click="handleClickEdit(slotProps)">{{ $t('common.edit') }}</a>
            <a class="t-button-link" @click="handleClickDelete(slotProps)">{{ $t('common.delete') }}</a>
          </template>
        </t-table>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </t-card>

    <t-dialog :header="$t('common.new')" :visible.sync="addFormVisible" :width="750" :footer="false">
      <div slot="body">
        <t-form :data="formData" ref="form" :rules="rules" @submit="onSubmit" :labelWidth="220">
          <t-form-item :label="$t('page.ssl.label_cert_content')" name="cert_content">
            <t-textarea v-model="formData.cert_content" :style="{ width: '480px' }" rows="4"></t-textarea>
            <t-button theme="default" size="small" @click="importCertFile('add')" :style="{ marginTop: '8px' }">
              {{ $t('page.ssl.import_cert_file') }}
            </t-button>
          </t-form-item>
          <t-form-item :label="$t('page.ssl.label_key_content')" name="key_content">
            <t-textarea v-model="formData.key_content" :style="{ width: '480px' }" rows="4"></t-textarea>
            <t-button theme="default" size="small" @click="importKeyFile('add')" :style="{ marginTop: '8px' }">
              {{ $t('page.ssl.import_key_file') }}
            </t-button>
          </t-form-item>
          <t-form-item style="float: right">
            <t-button variant="outline" @click="onClickCloseBtn">{{ $t('common.close') }}</t-button>
            <t-button theme="primary" type="submit">{{ $t('common.confirm') }}</t-button>
          </t-form-item>
        </t-form>
      </div>
    </t-dialog>

    <t-dialog :header="$t('common.edit')" :visible.sync="editFormVisible" :width="750" :footer="false">
      <div slot="body">
        <t-form :data="formEditData" ref="form" :rules="rules" @submit="onSubmitEdit" :labelWidth="220">
          <t-form-item :label="$t('page.ssl.label_valid_to')" name="valid_to">
            <span>{{formEditData.valid_to}} ({{formEditData.expiration_info}})</span>
          </t-form-item>
          <t-form-item :label="$t('page.ssl.label_cert_content')" name="cert_content">
            <t-textarea v-model="formEditData.cert_content" :style="{ width: '480px' }" rows="4"></t-textarea>
            <t-button theme="default" size="small" @click="importCertFile('edit')" :style="{ marginTop: '8px' }">
              {{ $t('page.ssl.import_cert_file') }}
            </t-button>
          </t-form-item>
          <t-form-item :label="$t('page.ssl.label_key_content')" name="key_content">
            <t-textarea v-model="formEditData.key_content" :style="{ width: '480px' }" rows="4"></t-textarea>
            <t-button theme="default" size="small" @click="importKeyFile('edit')" :style="{ marginTop: '8px' }">
              {{ $t('page.ssl.import_key_file') }}
            </t-button>
          </t-form-item>
          <t-form-item>
            <b>{{$t("page.ssl.label_auto_tip")}}</b>
          </t-form-item>
          <t-form-item :label="$t('page.ssl.label_auto_key_path')" name="key_path">
            <t-textarea v-model="formEditData.key_path" :style="{ width: '480px' }" rows="4"></t-textarea>
          </t-form-item>
          <t-form-item :label="$t('page.ssl.label_auto_crt_path')" name="cert_path">
            <t-textarea v-model="formEditData.cert_path" :style="{ width: '480px' }"   rows="4"></t-textarea>
          </t-form-item>
          <t-form-item style="float: right">
            <t-button variant="outline" @click="onClickCloseEditBtn">{{ $t('common.close') }}</t-button>
            <t-button theme="primary" type="submit">{{ $t('common.confirm') }}</t-button>
          </t-form-item>
        </t-form>
      </div>
    </t-dialog>

    <!-- 隐藏的文件输入框 -->
    <input ref="certFileInput" type="file" accept=".crt" style="display: none" @change="handleCertFileChange" />
    <input ref="keyFileInput" type="file" accept=".key" style="display: none" @change="handleKeyFileChange" />

    <t-dialog :header="$t('common.confirm_delete')" :body="confirmBody" :visible.sync="confirmVisible" @confirm="onConfirmDelete"
              :onCancel="onCancel">
    </t-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  SearchIcon
} from 'tdesign-icons-vue';
import Trend from '@/components/trend/index.vue';
import {
  prefix
} from '@/config/global';
import {
  sslConfigListApi, sslConfigDelApi, sslConfigEditApi, sslConfigAddApi, sslConfigDetailApi
} from '@/apis/sslconfig';

const INITIAL_DATA = {
  cert_content: '',
  key_content: '',
  cert_path: '',
  key_path: '',
};

export default Vue.extend({
  name: 'SslConfigList',
  components: {
    SearchIcon,
    Trend,
  },
  data() {
    return {
      addFormVisible: false,
      editFormVisible: false,
      confirmVisible: false,
      formData: {
        ...INITIAL_DATA
      },
      formEditData: {
        ...INITIAL_DATA
      },
      rules: {
        cert_content: [
          {
            required: true,
            message: this.$t('common.select_placeholder') + this.$t('page.ssl.label_cert_content'),
            type: 'error'
          }
        ],
        key_content: [
          {
            required: true,
            message: this.$t('common.select_placeholder') + this.$t('page.ssl.label_key_content'),
            type: 'error'
          }
        ]
      },
      dataLoading: false,
      data: [], // 列表数据信息
      selectedRowKeys: [],
      columns: [
        {
          align: 'left',
          width: 200,
          colKey: 'op',
          title: this.$t('common.op'),
        },

        {
          title: this.$t('page.ssl.label_subject'),
          align: 'left',
          width: 250,
          ellipsis: true,
          colKey: 'subject',
        },
        {
          title: this.$t('page.ssl.label_issuer'),
          align: 'left',
          width: 250,
          ellipsis: true,
          colKey: 'issuer',
        },
        {
          title: this.$t('page.ssl.label_valid_from'),
          width: 200,
          ellipsis: true,
          colKey: 'valid_from',
        },
        {
          title: this.$t('page.ssl.label_valid_to'),
          width: 200,
          ellipsis: true,
          colKey: 'valid_to',
        },
        {
          title: this.$t('page.ssl.label_expire_time'),
          width: 200,
          ellipsis: true,
          colKey: 'expiration_info',
        },
        {
          title: this.$t('page.ssl.label_domains'),
          width: 250,
          ellipsis: true,
          colKey: 'domains',
        },
        {
          title: this.$t('page.ssl.label_serial_no'),
          align: 'left',
          width: 250,
          ellipsis: true,
          colKey: 'serial_no',
        },
        {
          title: "id",
          align: 'left',
          width: 250,
          ellipsis: true,
          colKey: 'id',
        },
      ],
      rowKey: 'id',
      tableLayout: 'auto',
      verticalAlign: 'top',
      hover: true,
      pagination: {
        total: 0,
        current: 1,
        pageSize: 10
      },
      searchformData: {
        domains: '',
      },
      deleteIdx: -1,
      currentImportMode: '', // 'add' 或 'edit'
      currentImportType: '', // 'cert' 或 'key'
    };
  },
  computed: {
    confirmBody() {
      if (this.deleteIdx > -1) {
        return this.$t('common.confirm_delete');
      }
      return '';
    },
  },
  mounted() {
    this.getList("")
  },
  methods: {
    rehandlePageChange(curr, pageInfo) {
      this.pagination.current = curr.current
      if (this.pagination.pageSize != curr.pageSize) {
        this.pagination.current = 1
        this.pagination.pageSize = curr.pageSize
      }
      this.getList("")
    },
    getList(keyword) {
      let that = this;
      sslConfigListApi({
        pageSize: that.pagination.pageSize,
        pageIndex: that.pagination.current,
        ...that.searchformData
      })
        .then((res) => {
          let resdata = res;
          if (resdata.code === 0) {
            this.data = resdata.data.list??[];
            this.pagination = {
              ...this.pagination,
              total: resdata.data.total,
            };
          }
        })
        .catch((e: Error) => {
          console.log(e);
        })
        .finally(() => {
          this.dataLoading = false;
        });
      this.dataLoading = true;
    },
    handleAddSslConfig() {
      this.addFormVisible = true;
      this.formData = {
        domain: '',
        cert_serial: '',
        remarks: '',
      };
    },
    onSubmit({
               result,
               firstError
             }): void {
      let that = this;
      if (!firstError) {
        sslConfigAddApi({
          ...this.formData,
        })
          .then((res) => {
            if (res.code === 0) {
              that.getList('');
              that.$message.success('添加成功');
              that.addFormVisible = false;
            }else{
              that.$message.warning(res.msg);
            }
          });
      }
    },
    handleClickEdit(slotProps) {
      const {
        row
      } = slotProps;
      this.formEditData = {
        ...row
      };
      this.editFormVisible = true;
    },
    onSubmitEdit({
                   result,
                   firstError
                 }): void {
      let that = this;
      if (!firstError) {
        sslConfigEditApi({
          ...this.formEditData,
        })
          .then((res) => {
            if (res.code === 0) {
              that.getList('');
              that.$message.success('编辑成功');
              that.editFormVisible = false;
            }else{
              that.$message.warning(res.msg);
            }
          });
      }
    },
    handleClickDelete(slotProps) {
      const {
        row
      } = slotProps;
      this.deleteIdx = row.id;
      this.confirmVisible = true;
    },
    onConfirmDelete() {
      let that = this;
      sslConfigDelApi({
        id: this.deleteIdx
      })
        .then((res) => {
          if (res.code === 0) {
            that.getList('');
            that.$message.success('删除成功');
            that.confirmVisible = false;
            that.deleteIdx = -1;
          }
        });
    },
    onCancel() {
      this.confirmVisible = false;
      this.deleteIdx = -1;
    },
    handleJumpOnlineUrl() {
      window.open(this.samwafglobalconfig.getOnlineUrl()+"/guide/SSLConfig.html");
    },
    onClickCloseBtn() {
      this.addFormVisible = false;
    },
    onClickCloseEditBtn() {
      this.editFormVisible = false;
    },
    // 导入证书文件
    importCertFile(mode) {
      this.currentImportMode = mode;
      this.currentImportType = 'cert';
      this.$refs.certFileInput.click();
    },
    // 导入密钥文件
    importKeyFile(mode) {
      this.currentImportMode = mode;
      this.currentImportType = 'key';
      this.$refs.keyFileInput.click();
    },
    // 处理证书文件变化
    handleCertFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => { 
          const content = e.target.result;
          console.log("file:",content,"this.currentImportMode：",this.currentImportMode)
          if (this.currentImportMode === 'add') {
            console.log("file:add ",content)
            this.$set(this.formData, 'cert_content', content);
          } else {
            this.$set(this.formEditData, 'cert_content', content);
          }
          this.$message.success(this.$t('page.ssl.import_cert_success'));
        };
        reader.readAsText(file);
      }
      // 清空文件输入框
      event.target.value = '';
    },
    // 处理密钥文件变化
    handleKeyFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target.result;
          if (this.currentImportMode === 'add') {
            this.$set(this.formData, 'key_content', content);
          } else {
            this.$set(this.formEditData, 'key_content', content);
          }
          this.$message.success(this.$t('page.ssl.import_key_success'));
        };
        reader.readAsText(file);
      }
      // 清空文件输入框
      event.target.value = '';
    },
  },
});
</script>

<style scoped>
.list-card-container {
  padding: 20px;
}
.table-container {
  margin-top: 20px;
}
.search-input {
  width: 200px;
}
</style>
