<template>


  <div :class="layoutCls">
    <t-dialog :visible.sync="update_visible" :header="$t('topNav.update.has_new_version')">
      <template #confirmBtn> <t-button theme="warning" @click="handleDoUpdate">{{$t('topNav.update.confirm_update')}}</t-button>   </template>

      <t-alert theme="warning">
          <template #message>
            {{$t('topNav.update.update_danger_tips')}}
          </template>
      </t-alert>
      <div style="margin: 16px 0 0 0; line-height: 1.8;">
        <div>
          <strong>{{ $t('topNav.update.version_label') }}</strong>
          {{ update_new_ver }}
        </div>
        <div>
          <strong>{{ $t('topNav.update.desc_label') }}</strong>
          {{ update_desc }}
        </div>
        <div> 
          <t-link theme="primary" 
          underline href="https://doc.samwaf.com/quickstart/Update.html"
           target="black">{{ $t('topNav.update.more_label') }}</t-link>

        </div>
      </div>

    </t-dialog>
    <t-head-menu :class="menuCls" :theme="theme" expandType="popup" :value="active">
      <template #logo>
        <span v-if="showLogo" class="header-logo-container" @click="handleNav('/dashboard/base')">
          <logo-full class="t-logo"/>
        </span>
        <div v-else class="header-operate-left">
          <t-button theme="default" shape="square" variant="text" @click="changeCollapsed">
            <view-list-icon class="collapsed-icon" />
          </t-button>
          <!--<search :layout="layout" />-->
        </div>
      </template>
      <menu-content v-show="layout !== 'side'" class="header-menu" :navData="menu" />
      <template #operations>
        <div class="operations-container">
          <!-- 搜索框 -->
          <search v-if="layout !== 'side'" :layout="layout" />

          <!-- 全局通知 -->
          <notice />
          <t-tooltip placement="bottom" :content="$t('topNav.update.has_new_version')" v-show="hasNewVersion">
            <t-button theme="default" shape="square" variant="text" @click="checkVersion('manual')">
              <NotificationErrorIcon />
            </t-button>
          </t-tooltip>

          <t-tooltip placement="bottom" :content="$t('topNav.contract')">
            <t-button theme="default" shape="square" variant="text" @click="sendMail">
              <MailIcon />
            </t-button>
          </t-tooltip>
          <t-tooltip placement="bottom" :content="$t('topNav.help_document')">
            <t-button theme="default" shape="square" variant="text" @click="navToHelper">
              <help-circle-icon />
            </t-button>
          </t-tooltip>
          <t-select v-model="langValue"
                    placeholder="SelectLanguage"
                    @change="changeLangEvent"  style="width: 150px; display: inline-block" title="Select Language">
            <t-option  v-for="(item, index) in langOptions"
                       :key="index"
                       :label="item.label"
                       :value="item.value"/>
          </t-select>
          <t-button theme="warning" @click="changeServer" v-if="hasClientServer">
            <template #icon><add-icon /></template>
            {{ $t('topNav.current_server')}} {{ current_server.client_server_name }}
          </t-button>
          <t-dropdown :min-column-width="125" trigger="click">
            <template #dropdown>
              <t-dropdown-menu>
                <t-dropdown-item class="operations-dropdown-container-item" @click="handleNav('/user/index')">
                  <user-circle-icon /> {{ $t('topNav.dropdown_person_center')}}
                </t-dropdown-item>
                <t-dropdown-item class="operations-dropdown-container-item" :disabled="isUpdateloading" @click="checkVersion('manual')">
                  <RotateIcon /> {{ $t('topNav.dropdown_update')}}
                </t-dropdown-item>
                <t-dropdown-item class="operations-dropdown-container-item" :disabled="isResetloading" @click="resetServer">
                  <ArrowUpDownCircleIcon />{{ $t('topNav.dropdown_reboot_waf')}}
                </t-dropdown-item>
                <t-dropdown-item class="operations-dropdown-container-item" @click="handleLogout">
                  <poweroff-icon />{{ $t('topNav.dropdown_logout')}}
                </t-dropdown-item>
              </t-dropdown-menu>
            </template>
            <t-button class="header-user-btn" theme="default" variant="text">
              <template #icon>
                <user-circle-icon class="header-user-avatar" />
              </template>
              <div class="header-user-account">
                {{current_account}}
                <chevron-down-icon />
              </div>
            </t-button>
          </t-dropdown>
          <t-tooltip placement="bottom" :content="$t('topNav.system_config')">
            <t-button theme="default" shape="square" variant="text" @click="toggleSettingPanel">
              <setting-icon />
            </t-button>
          </t-tooltip>
        </div>
      </template>
    </t-head-menu>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {
    ViewListIcon,
    LogoGithubIcon,
    HelpCircleIcon,
    UserCircleIcon,
    PoweroffIcon,
    SettingIcon,
    ChevronDownIcon,
    RotateIcon,
    Icon,
    MailIcon,
    NotificationErrorIcon,
    ArrowUpDownCircleIcon
  } from 'tdesign-icons-vue';
  import {
    prefix
  } from '@/config/global';
  import LogoFull from '@/assets/assets-logo-full.svg';
  import {
    CheckVersionApi,DoUpdateApi
  } from '@/apis/sysinfo';

  import Notice from './Notice.vue';
  import Search from './Search.vue';
  import MenuContent from './MenuContent.vue';
  import {logoutapi} from '@/apis/login'
  export default Vue.extend({
    components: {
      MenuContent,
      LogoFull,
      Notice,
      Search,
      ViewListIcon,
      LogoGithubIcon,
      HelpCircleIcon,
      UserCircleIcon,
      PoweroffIcon,
      SettingIcon,
      ChevronDownIcon,
      RotateIcon,
      Icon,
      MailIcon,
      NotificationErrorIcon,
      ArrowUpDownCircleIcon
    },
    props: {
      theme: String,
      layout: {
        type: String,
        default: 'top',
      },
      showLogo: {
        type: Boolean,
        default: true,
      },
      menu: {
        type: Array,
      },
      isFixed: {
        type: Boolean,
        default: false,
      },
      isCompact: {
        type: Boolean,
        default: false,
      },
      maxLevel: {
        type: Number,
        default: 3,
      },
    },
    data() {
      return {
        prefix,
        visibleNotice: false,
        isSearchFocus: false,
        isResetloading:false,
        /**更新内容**/
        hasNewVersion:false,//是否有新版本
        isUpdateloading:false,
        update_visible:false,
        update_new_ver:"",
        update_desc:"",
        current_account:"not login",
        /**控制中心相关**/
        hasClientServer:false,
        current_server:"",
        /**语言问题**/
        langValue:"zh_CN",
        langOptions: [
          {
            value: "zh_CN",
            label: "中文"
          },
          {
            value: "en_US",
            label: "English"
          },
        ],
      };
    },
    computed: {
      active() {
        if (!this.$route.path) {
          return '';
        }
        return this.$route.path
          .split('/')
          .filter((item, index) => index <= this.maxLevel && index > 0)
          .map((item) => `/${item}`)
          .join('');
      },
      showMenu() {
        return !(this.layout === 'mix' && this.showLogo === 'side');
      },
      layoutCls() {
        return [`${this.prefix}-header-layout`];
      },
      menuCls() {
        return [{
          [`${this.prefix}-header-menu`]: !this.isFixed,
          [`${this.prefix}-header-menu-fixed`]: this.isFixed,
          [`${this.prefix}-header-menu-fixed-side`]: this.layout === 'side' && this.isFixed,
          [`${this.prefix}-header-menu-fixed-side-compact`]: this.layout === 'side' && this.isFixed && this
            .isCompact,
        }, ];
      },
    },
    mounted() {
      // 首次提示，每隔24小时 进行弹窗 ，其余实际不弹窗
      this.checkVersion("auto")
      this.init()
    },
    methods: {
      // 切换语言
      changeLangEvent(value, context) {
        switch (value) {
          case "zh_CN":
            this.langValue = value;
            this.$i18n.locale = this.langValue;
            localStorage.setItem("lang",this.langValue)
            break;
          case "en_US":
            this.langValue = value;
            this.$i18n.locale = this.langValue;
            localStorage.setItem("lang",this.langValue)
            break;
          default:
            break;
        }
        location.reload(); // 刷新页面
      },
      //init
      init(){
        //帐号初始化
        this.current_account = localStorage.getItem("current_account")
        //管控初始化
        if(localStorage.getItem("current_server")){
          this.hasClientServer = true
          this.current_server = JSON.parse(localStorage.getItem("current_server"))
        }else{
          this.hasClientServer = false
        }
        //多语言
        this.langValue = localStorage.getItem("lang") || "zh_CN"

      },
      //切换服务器
      changeServer(){
        this.$router.push('/center/CenterManager');
      },
      toggleSettingPanel() {
        this.$store.commit('setting/toggleSettingPanel', true);
      },
      handleLogout() {
        let current_account_token = localStorage.getItem("account_token")?localStorage.getItem("account_token"):""
        logoutapi({account_token:current_account_token})
        .then((res)=>{
            if(res.code==0){
              this.$router.push(`/login?redirect=${this.$router.history.current.fullPath}`);
            }else{
              this.$message.warning(res.msg);
            }
        })


      },
      changeCollapsed() {
        this.$store.commit('setting/toggleSidebarCompact');
      },
      handleNav(url) {
        this.$router.push(url);
      },
      navToHelper() {
        window.open(this.samwafglobalconfig.getOnlineUrl());
      },
      resetServer() {
        let that = this
        that.isResetloading = true
        this.$request
          .get('/resetWAF')
          .then((res) => {
            let resdata = res
            console.log(resdata)
            if (resdata.code === 0) {
              that.$message.success(resdata.msg);
              setTimeout(function() {
              		that.isResetloading = false
              }, 3000); // 定时时间
            } else {
              that.$message.warning(resdata.msg);
            }
          })
          .catch((e: Error) => {
            console.log(e);
            that.isResetloading = false
          })
          .finally(() => {});
      } ,
      sendMail(){
        const email = 'samwafgo@gmail.com'; // 设置收件人地址
        window.location.href = `mailto:${email}`;
      },
      checkVersion(method){
          let that = this;
          CheckVersionApi().then((res) => {
            let resdata = res
            console.log(resdata)
            if (resdata.code === 0) {
              that.hasNewVersion = true
              that.update_new_ver = resdata.data.version_new
              that.update_desc = resdata.data.version_desc
              if(method =="manual"){
                that.update_visible = true
              }else{
                // 从本地存储获取上次显示弹窗的时间
                const lastUpdatePopupTime = localStorage.getItem("lastUpdatePopupTime");

                // 如果上次显示时间不存在或距离当前时间超过24小时，则显示弹窗
                if (!lastUpdatePopupTime || Date.now() - lastUpdatePopupTime > 24 * 60 * 60 * 1000) {
                  that.update_visible = true
                  // 更新本地存储的上次显示时间为当前时间
                  localStorage.setItem("lastUpdatePopupTime", Date.now());
                }
              }

            }else{
              if(method =="manual"){
                that.$message.warning(resdata.msg);
              }
            }
          })
          .catch((e: Error) => {
            if(method =="manual"){
             that.$message.warning("检测版本异常，请检测网络");
            }
          })
      },
      handleDoUpdate(){
        //处理升级
          let that = this;
          DoUpdateApi().then((res) => {
            let resdata = res
            console.log(resdata)
            if (resdata.code === 0) {
              that.$message.success(resdata.msg);
               that.update_visible = false
            }else{
              that.$message.warning(resdata.msg);
            }
          })
          .catch((e: Error) => {
            console.log(e);
        })
      }
    },
  });
</script>
<style lang="less">
  @import '@/style/variables.less';

  .header-menu {
    flex: 1 1 1;
    display: inline-flex;
  }

  .operations-container {
    display: flex;
    align-items: center;
    margin-right: 12px;

    .t-popup__reference {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .t-button {
      margin: 0 8px;

      &.header-user-btn {
        margin: 0;
      }
    }

    .t-icon {
      font-size: 20px;

      &.general {
        margin-right: 16px;
      }
    }
  }

  .header-operate-left {
    display: flex;
    margin-left: 20px;
    align-items: normal;
    line-height: 0;

    .collapsed-icon {
      font-size: 20px;
    }
  }

  .header-logo-container {
    width: 184px;
    height: 26px;
    display: flex;
    margin-left: 24px;
    padding: 0 0px;
    color: var(--td-text-color-primary);

    .t-logo {
      width: 100%;
      height: 100%;
      padding: 0 0px;
      &:hover {
        cursor: pointer;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }

  .header-user-account {
    display: inline-flex;
    align-items: center;
    color: var(--td-text-color-primary);

    .t-icon {
      margin-left: 4px;
      font-size: 16px;
    }
  }

  .t-head-menu__inner {
    border-bottom: 1px solid var(--td-border-level-1-color);
  }

  .t-menu--light {
    .header-user-account {
      color: var(--td-text-color-primary);
    }
  }

  .t-menu--dark {
    .t-head-menu__inner {
      border-bottom: 1px solid var(--td-gray-color-10);
    }

    .header-user-account {
      color: rgba(255, 255, 255, 0.55);
    }

    .t-button {
      --ripple-color: var(--td-gray-color-10) !important;

      &:hover {
        background: var(--td-gray-color-12) !important;
      }
    }
  }

  .operations-dropdown-container-item {
    width: 100%;
    display: flex;
    align-items: center;

    .t-icon {
      margin-right: 8px;
    }

    .t-dropdown__item {
      .t-dropdown__item__content {
        display: flex;
        justify-content: center;
      }

      .t-dropdown__item__content__text {
        display: flex;
        align-items: center;
        font-size: 14px;
      }
    }

    .t-dropdown__item {
      width: 100%;
      margin-bottom: 0px;
    }

    &:last-child {
      .t-dropdown__item {
        margin-bottom: 8px;
      }
    }
  }
</style>

