<template>
  <div class="static-site-config">
    <t-form-item :label="$t('page.host.static_site.is_enable')">
      <t-radio-group v-model="localConfig.is_enable_static_site" @change="updateParent">
        <t-radio value="0">{{ $t('common.off') }}</t-radio>
        <t-radio value="1">{{ $t('common.on') }}</t-radio>
      </t-radio-group>
    </t-form-item>
    
    <template v-if="localConfig.is_enable_static_site == '1'">
      <t-form-item :label="$t('page.host.static_site.static_site_path')">
        <t-tooltip class="placement top center" :content="$t('page.host.static_site.static_site_path_tips')" placement="top"
                 :overlay-style="{ width: '300px' }" show-arrow>
          <t-input v-model="localConfig.static_site_path" @change="updateParent" :placeholder="$t('page.host.static_site.static_site_path_placeholder')" />
        </t-tooltip>
      </t-form-item>
      
      <t-form-item :label="$t('page.host.static_site.static_site_prefix')">
        <t-tooltip class="placement top center" :content="$t('page.host.static_site.static_site_prefix_tips')" placement="top"
                 :overlay-style="{ width: '300px' }" show-arrow>
          <t-input v-model="localConfig.static_site_prefix" @change="updateParent" :placeholder="$t('page.host.static_site.static_site_prefix_placeholder')" />
        </t-tooltip>
      </t-form-item>
      
      <t-form-item :label="$t('page.host.static_site.sensitive_paths')">
        <t-tooltip class="placement top center" :content="$t('page.host.static_site.sensitive_paths_tips')" placement="top"
                 :overlay-style="{ width: '400px' }" show-arrow>
          <t-textarea v-model="localConfig.sensitive_paths" @change="updateParent" :placeholder="$t('page.host.static_site.sensitive_paths_placeholder')" :rows="3" />
        </t-tooltip>
      </t-form-item>
      
      <t-form-item :label="$t('page.host.static_site.sensitive_extensions')">
        <t-tooltip class="placement top center" :content="$t('page.host.static_site.sensitive_extensions_tips')" placement="top"
                 :overlay-style="{ width: '400px' }" show-arrow>
          <t-input v-model="localConfig.sensitive_extensions" @change="updateParent" :placeholder="$t('page.host.static_site.sensitive_extensions_placeholder')" />
        </t-tooltip>
      </t-form-item>
      
      <t-form-item :label="$t('page.host.static_site.allowed_extensions')">
        <t-tooltip class="placement top center" :content="$t('page.host.static_site.allowed_extensions_tips')" placement="top"
                 :overlay-style="{ width: '400px' }" show-arrow>
          <t-input v-model="localConfig.allowed_extensions" @change="updateParent" :placeholder="$t('page.host.static_site.allowed_extensions_placeholder')" />
        </t-tooltip>
      </t-form-item>
      
      <t-form-item :label="$t('page.host.static_site.sensitive_patterns')">
        <t-tooltip class="placement top center" :content="$t('page.host.static_site.sensitive_patterns_tips')" placement="top"
                 :overlay-style="{ width: '400px' }" show-arrow>
          <t-textarea v-model="localConfig.sensitive_patterns" @change="updateParent" :placeholder="$t('page.host.static_site.sensitive_patterns_placeholder')" :rows="3" />
        </t-tooltip>
      </t-form-item>
    </template>
  </div>
</template>

<script lang="ts">
export default {
  name: 'StaticSiteConfig',
  props: {
    staticSiteConfig: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      localConfig: JSON.parse(JSON.stringify(this.staticSiteConfig))
    };
  },
  watch: {
    staticSiteConfig: {
      handler(newVal) {
        this.localConfig = JSON.parse(JSON.stringify(newVal));
      },
      immediate: true
    },
  },
  methods: {
    updateParent() {
      this.$emit('update', JSON.parse(JSON.stringify(this.localConfig)));
    }
  }
};
</script>

<style lang="less" scoped>
.static-site-config {
  .t-form-item {
    margin-bottom: 16px;
  }
}
</style>