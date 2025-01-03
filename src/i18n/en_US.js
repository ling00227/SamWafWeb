/**
 *  SamWaf English Language Pack
 *
 * common - Common fields
 * menu - Left menu
 * page - Fields for specific functional pages
 */
export default {
  common:{
    confirm: "Confirm",
    cancel: "Cancel",
    close: "Close",
    search: "Search",
    refresh:"Refresh",
    all: "All",
    details: "Details",
    new: "New",
    copy: "Copy",
    edit: "Edit",
    delete: "Delete",
    reset: "Reset",
    submit: "Submit",
    export: "Export",
    return: "Return",
    status: "Status",
    remarks: "Remarks",
    renew:"Renew",
    select_placeholder: "Please select ",
    placeholder: "Please enter ",
    placeholder_content: "Please enter content ",
    debug: "Debug",
    confirm_delete: "Confirm delete the selected data?",
    data_delete_warning: "After deletion, the data will be removed and cannot be recovered",
    create_time: "Creation Time",
    update_time: "Update Time",
    op: "Operation Content",
    date: "Date",
    online_document: "Online Document",
    defense_status:{
      all: "All",
      stop: "Block",
      pass: "Allow",
      forbid: "Forbid",
    },
    on: "On",
    off: "Off"
  },
  login:{
    login_title: "Login",
    login_sub_title: "SamWaf Website Firewall Management",
    login_has_question: "Having trouble?",
    login_online_document: "SamWaf Online Documentation",
    input_account_placeholder: "Please enter your account:",
    input_password_placeholder: "Please enter your password:",
    login_btn_title: "Login",
    rule:{
      phone: "Phone number is required",
      account: "Account is required",
      password: "Password is required",
      verifyCode: "Verification code is required"
    },
    login_success: "Login successful",
  },
  topNav:{
    update:{
      has_new_version: "New version available",
    },
    contract: "Contact SamWaf",
    help_document: "Help Document",
    current_server: "Current Server",
    system_config: "System Configuration",
    dropdown_person_center: "Personal",
    dropdown_update: "Update",
    dropdown_reboot_waf: "Reboot",
    dropdown_logout: "Logout",
  },
  dashboard:{
    tip_create_website_title: "You have not created a protected website, click to create one",
    tip_create_website_link: "Create now",
    tip_modify_pwd_title: "You are still using the default account and password, please change it soon",
    tip_modify_pwd_link: "Change now",
    counter:{
      today_of_attack_count: "Today's Attack Count",
      all_visit_count: "Total Visits Today",
      not_normal_visit_count: "Abnormal IPs Today (count)",
      qps: "Current QPS",
    },
    cycle_title: "Comparison of Attacks and Normal Access Over Time",
    cycle_subtitle: "(times)",
    cycle_normal_count: "Normal Count This Period",
    cycle_attack_count: "Attack Count This Period",
    cycle_percent_title: "Proportion of Normal to Attack",
    cycle_percent_subtitle: "In the Period",
    ip_rank:{
      normal_title:"IP Normal Rank",
      attack_title:"IP Attack Rank",
      ip:"IP",
      counter:"Counter",
      rank:"Rank",
      tag:"Tag",
      ip_belong:"IP Belong",
      day:"Today",
      week:"Week",
    }
  },
  menu:{
    dashboard: {
      parent_title: "Dashboard",
      dashboard_title: "Overview Dashboard",
    },
    host:{
      parent_title: "Website Protection",
      host_title: "Website Protection",
      host_detail: "Host Protection Details",
      host_protect_rule: "Protection Rules",
      host_protect_rule_edit: "Edit Protection Rules",
      allow_ip: "IP Allow List",
      allow_url: "URL Allow List",
      deny_ip: "IP Block List",
      deny_url: "URL Block List",
      ldp_url: "Protection URL",
      cc: "CC Protection",
      sensitive:"Sensitive",
      sslconfig:"SSL Folder",
      batchtask:"Batch Task",
      sslorder:"SSL Apply Result",
      ssl_expire:"SSL Expire Check",
    },
    analysis:{
      parent_title: "Data Analysis",
      analysis_title: "Data Analysis",
    },
    visit_log:{
      parent_title: "Protection Logs",
      visit_title: "Protection Logs",
      visit_detail_title: "Protection Details",
    },
    account:{
      parent_title: "Account",
      account_list_title: "Account List",
      account_log_title: "Account Logs",
    },
    system:{
      parent_title: "System Settings",
      system_log_title: "System Logs",
      system_config_title: "Parameter Settings",
      system_runtime_title: "Runtime Parameters",
      system_one_key_modify_title: "Quick Modification",
    },
    pc:{
      parent_title: "Device",
      pc_list_title: "Device List",
    }
  },
  page:{
    account: {
      create_account: "Create Account",
      login_account_label: "Login Account",
      reset_password: "Reset Password",
      role: "Role",
      role_super_admin: "Super Administrator",
      role_admin: "Administrator",
      login_password: "Login Password",
      super_admin_password: "Super Administrator Password",
      new_password: "New Password",
      confirm_password: "Confirm Password",
      password_mismatch_warning: "The passwords do not match, please check",
      admin_delete_warning: "The default admin account cannot be deleted",
    },
    account_log:{
      export_logs: "Export Logs",
      view_log_dialog_title: "View Log",
      operation_account: "Operation Account",
      operation_type: "Operation Type",
      operation_content: "Operation Content",
      cancel: "Cancel",
      operation_time: "Operation Time"
    },
    analysis:{

    },
    cc:{
      new_cc_protection: "New CC Protection",
      selected_count: "Selected {count} items",
      website: "Website",
      url: "URL",
      rate: "Rate",
      limit: "Limit Access Times",
      lock_minutes:"Lock Time(Minutes)",
      samwaf_cc_protection: "SamWaf Firewall Resists CC Attacks",
      input_url_placeholder: "Enter URL (optional)",
      show_cc_ban_ip: "Show CC Ban IP",
      ban_ip:"Ban IP",
      ban_remain_time:"Ban Remain Ip",
      ban_ip_belong:"IP Belong",
      remove_ban_ip:"Remove Ban IP",
    },
    visit_log:{
      visit_log: "Protection Logs",
      online_document: "Online Document",
      website: "Website",
      rule_name: "Rule Name",
      access_status: "Access Status",
      response_code: "Response Code",
      access_ip: "Access IP",
      access_date: "Access Date",
      access_method: "Access Method",
      log_archive_db: "Log Archive Database",
      guest_identity: "Identity",
      time_spent: "Time Spent (ms)",
      risk_level: "Risk Level",
      trigger_rule: "Trigger Rule",
      time: "Time",
      domain: "Domain",
      request: "Request",
      source_ip: "Source IP",
      country: "Country",
      province: "Province",
      city: "City",
      access_url: "Access URL",
      header: "Header",
      status_code: "Response Code",
      search_placeholder: "Please enter rule name",
      select_placeholder: "Please select defense status",
      input_placeholder: "Please enter access method",
      date_range_today: "Today",
      date_range_last_3_days: "Last 3 Days",
      date_range_last_7_days: "Last 7 Days",
      date_range_last_300_days: "Last 300 Days",
      export_db_file_header: "Export the currently selected log file(SQLITE)",
      export_db_file_content: "The historical file may be large, to avoid affecting bandwidth, please export during off-peak hours.",
      detail:{
        defense_status: "Defense Status",
        visit_time: "Visit",
        detection_time: "Detection",
        defense_status_step: "Defense Status",
        response_status: "Response Status",
        request_identifier: "Request Identifier",
        request_time: "Request Time",
        request_domain: "Request Domain",
        request_method: "Request Method",
        request_content_size: "Request Content Size",
        visitor_ip: "Visitor IP",
        add_to_deny_list: "Add to Block List",
        visitor_port: "Visitor Port",
        request_region: "Request Region",
        response_code: "Response Code",
        more_info:"More Information",
        request_path: "Request Path",
        request_header: "Request Header",
        request_user_browser: "Request User Browser",
        request_cookies: "Request Cookies",
        request_body: "Request BODY",
        request_form: "Request Form",
        response_data: "Response Data",
        quick_add_rule: "Quickly Add Rule",
        open: "Open",
        close: "Close",
        add_to_deny_list_confirm_header: "Add to Block List",
        add_to_deny_list_confirm_body: "Are you sure you want to add this IP to the block list?",
        website_not_exist_warning: "The website does not exist",
        back: "Back",
        mouse_select_tooltip: "Select the content you want to add with the mouse, then click on the page's blank area",
        http_copy_mask: "False Positive？",
        http_copy_mask_tip: "If you encounter a false positive, please copy the text below and send it to samwafgo@gmail.com. Common sensitive information has already been masked: header fields such as Authorization, Token, Api-Key, Secret, Access-Token, X-Api-Key, X-Access-Token, X-Secret, Session-Key, Set-Cookie; cookies such as sessionid, auth, token, key, secret. If there are other sensitive fields, please mask them yourself or feel free to submit an issue.",
       }
    },
    center:{
      switch_local: "Switch to Local (No Remote Access)",
      server_switch_button: "Switch Server",
      recent_visit_time: "Recent Visit Time",
      client_server_name: "Client Name",
      client_system_type: "Operating System Type",
      client_ip: "IP",
      client_port: "Port",
      client_new_version: "Version Number",
      client_new_version_desc: "Version",
      last_visit_time: "Last Visit Time",
    },
    host: {
      new_protection: "New Protection",
      website_protection: "Website Protection",
      export_data: "Export Data",
      import_data: "Import Data",
      website: "Website",
      url: "URL",
      ssl_auto_apply: "SSL Auto Apply",
      search_placeholder: "Please enter",
      search_button: "Search",
      core_features: "SamWaf Core Features, All website information, Protection features enabled, etc.",
      host: "Website",
      host_tips: "Enter the domain name of the website you want to protect: e.g., www.samwaf.com,*.samwaf.com",
      host_placeholder: "Please enter the website URL",
      host_validation: "Please enter a valid hostname or IP address, such as www.samwaf.com or 8.8.8.8.",
      port: "Port",
      port_placeholder: "Please enter the website port, usually 80/443",
      port_tips: "Enter the port of the website you want to protect. 1. HTTP is 80, HTTPS is 443. 2. If you have installed Baota, Nginx, IIS, etc., you need to manually change the port to non-80 or non-443.",
      bind_more_port: " Bind More Port(optional):",
      bind_more_port_placeholder: "Ports should be separated by commas, e.g., 80,8080",
      bind_more_port_tips: "Applicable situations: 1. For example, if the main port 443 has a certificate, you need port 80 for automated certificate application (file verification method) 2. Suitable for serving multiple ports for the same website without SSL at the same time",
      ssl: "SSL",
      ssl_folder: "SSL Folder",
      ssl_tips: "If it is HTTPS, you need to select an encryption certificate. Port 80 does not require one.",
      ssl_yes: "Yes",
      ssl_no: "No",
      add_new_ssl:"Add New SSL",
      edit_ssl:"Edit SSL",
      bind_empty_ssl_tips:"Current Cannot Bind SSL",
      ssl_not_found_tips:"Ssl Not Found",
      ssl_option_yes: "Encryption Certificate (requires certificate upload)",
      ssl_option_no: "Non-encrypted",
      guard_status_on: "Protected",
      guard_status_off: "Not Protected",
      auto_start_on: "Auto Start",
      auto_start_off: "Manual Start",
      tab_base: "Basic Information",
      tab_engine: "Engine Built-in Protection",
      tab_other: "Other Configurations",
      tab_more_domain:"Bind More Domain",
      more_domain:"Bind More Domain",
      more_domain_tips:"Enter multiple domain names, each on a new line, without including the port.",
      start_status: "Start Status",
      guard_status: "Protection Status",
      start_status_content: "This feature selects whether to start directly.",
      keyfile: "Key String",
      keyfile_content: "Usually filename: *.key Content format: -----BEGIN RSA PRIVATE KEY----- Copy all and fill in",
      certfile: "Certificate String",
      certfile_content: "Usually filename: *.crt Content format: -----BEGIN CERTIFICATE----- Copy all and fill in",
      remote_host: "Backend Host",
      remote_host_content: "The Backend host is usually the same as the domain name of the first website (make sure to include the protocol http:// or https://).",
      remote_host_validation: "Must start with http:// or https:// and must not contain a port number.",
      is_trans_back_domain: "Trans backend domain",
      is_trans_back_domain_content: "Off by default. On this option if the protected domain and backend domain are different.",
      remote_ip: "Backend IP(Dynamic Domain)",
      remote_ip_content: "If SamWaf and the website are on the same server, fill in 127.0.0.1. If on different servers, please fill in the actual IP or Dynamic domain.",
      remote_port: "Backend Port",
      remote_port_content: "Situation 1: If SamWaf and the website are on the same server, the port needs to be changed to 81 or other ports. Situation 2: If on different servers, this can be the original port.",
      remarks: "Remarks",
      exclude_url_log: "Exclude URL When Logging",
      exclude_url_log_tips: "Exclude URL prefix data when logging",
      bot_detection: "Bot Detection",
      bot_detection_tips: "Detect if search engines are disguised",
      sql_injection_detection: "SQL Injection Detection",
      sql_injection_detection_tips: "Detect if there is SQL injection",
      xss_detection: "XSS Detection",
      xss_detection_tips: "Detect if there is XSS attack",
      scan_detection: "Scanning Tool Detection",
      scan_detection_tips: "Detect if scanning tools are present",
      rce_detection: "RCE Detection",
      rce_detection_tips: "RCE Remote Attack Detection",
      sensitive_detection: "Sensitive Detection",
      sensitive_detection_tips: "Sensitive Detection",
      engine_protection: "Engine Built-in Protection",
      other_config: "Other Configurations",
      guard_status_confirm: "Protection Status Reminder",
      guard_status_confirm_content: "Protection Status [On] means real-time protection for this website. Protection Status [Off] means real-time protection is turned off for this website.",
      start_status_confirm: "Start Status Reminder",
      start_status_confirm_content: "Start Status [On] will normally accept user requests. Start Status [Off] will stop user requests.",
      import_file: "Import File",
      upload_file: "Upload File",
      upload_file_limit_size: "Upload file size within 5MB",
      upload_tips: "No file selected",
      file_upload_success: "File uploaded successfully",
      file_upload_fail: "File upload failed",
      file_safety: "File Safety",
      back_system_type_baota: "Baota",
      back_system_type_phpstudy: "Xiao Pi Panel (phpstudy)",
      back_system_type_phpnow: "PHPnow",
      back_system_type_default: "Default",
      back_system_biz_website: "Pure Website",
      back_system_biz_api: "API Business System",
      back_system_biz_mange: "Business and Management",
      back_system_biz_default: "Default",
      delete_confirm_clear_relation: "After deletion, the website information and rules will be cleared and cannot be restored.",
      forbid_for_global_site: "Global websites cannot be operated",
      forbid_for_global_site_only_change_guard_status: "Global websites can only configure protection status",
      host_rule_msg: "Do not fill in HTTP and HTTPS, just enter the domain name.",
      real_time:"Real Time",
      real_qps:"QPS",
      real_active:"Active Count",
      loadbalance: {
        label_loadbalance_is_enable: "Enable Load Balancing",
        label_loadbalance_type: "Load Balancing Type",
        label_loadbalance_type_weight_round_robin: "Weighted Round Robin (WRR)",
        label_loadbalance_type_least_connections: "Least Connections",
        label_loadbalance_type_ip_hash: "IP Hash",
        label_loadbalance_type_source_hash: "Source Address Hash",
        label_loadbalance_type_url_hash: "URL Hash",
        label_loadbalance_type_least_time: "Minimum Response Time",
        label_is_enable_load_balance_on: "Enable Load Balancing",
        label_is_enable_load_balance_off: "Disable Load Balancing",
        label_add_loadbalance: "Add Load Balancer",
        website: "Website",
        remote_ip: "Remote IP",
        remote_port: "Remote Port",
        weight: "Weight"
      },
      unrestricted_port: {
        label_unrestricted_port_is_enable: "Strict Source Port",
        label_unrestricted_port_is_enable_on: "Enable",
        label_unrestricted_port_is_enable_off: "Disable",
        unrestricted_port_tip: "If disabled, suitable when using an external CDN or Nginx, it only matches the protected domain and not the source port."
      },
      auto_jump_https:{
        label_autu_jump_https: "Force 80 redirect HTTPS",
        label_autu_jump_https_on: "On",
        label_autu_jump_https_off: "Off",
        autu_jump_https_tip:"If enabled, SamWaf will force automatic redirection to HTTPS; if disabled, SamWaf will not perform automatic redirection."
      },
    },
    one_key_mod: {
      one_key_placeholder: "Due to the fact that only one program can use Web (port 80, port 443) on a single server, if you need to set Waf as a proxy, you need to change 80 to 81 and 443 to 444 here.\nSamWaf has added a one-click modification of Baota Web port for user convenience. Available only on Linux.",
      baota_placeholder: "Baota Nginx configuration default path",
      button_one_key_modify: "One-click Modify",
      modify_logs: "SamWaf One-click Modification Records",
      title_file_path: "File Path",
      title_create_time: "Creation Time",
      label_op_system: "Operating System",
      label_file_path: "File Path",
      label_before_content: "Original Content",
      label_after_content: "Modified Content",
      confirm_delete: "Are you sure you want to delete?",
      success_modify_message: "Operation successful",
      warning_modify_message: "Operation warning"
    },
    ipallow: {
      button_add_ip: "Add Allowlist IP",
      label_website: "Website",
      label_ip: "IP",
      alert_message: "SamWaf firewall will ignore IPs or CIDR in the allowlist."
    },
    ipblock: {
      button_add_ip: "Add Blocklist IP",
      label_website: "Website",
      label_ip: "IP",
      alert_message: "SamWaf firewall will block access from IPs or CIDR in the blocklist."
    },
    ldpurl: {
      new_privacy_url: "Add New Privacy Protection URL",
      label_website: "Website",
      label_url: "URL",
      label_compare_type: "Match Type",
      alert_message: "SamWaf will process sensitive data in the specified URL to hide parts of it, such as phone numbers.",
      compare_type_option_equal: "Equal",
      compare_type_option_pre: "Prefix Match",
      compare_type_option_end: "Suffix Match",
      compare_type_option_contain: "Contains Match"
    },
    urlallow: {
      button_add_url: "Add Allowlist URL",
      label_website: "Website",
      label_url: "URL",
      label_compare_type: "Match Type",
      alert_message: "SamWaf firewall will ignore URLs in the allowlist during protection.",
      compare_type_option_equal: "Equal",
      compare_type_option_pre: "Prefix Match",
      compare_type_option_end: "Suffix Match",
      compare_type_option_contain: "Contains Match"
    },
    urlblock: {
      button_add_url: "Add Blocklist URL",
      label_website: "Website",
      label_url: "URL",
      label_compare_type: "Match Type",
      alert_message: "SamWaf firewall will block access to URLs in the blocklist.",
      compare_type_option_equal: "Equal",
      compare_type_option_pre: "Prefix Match",
      compare_type_option_end: "Suffix Match",
      compare_type_option_contain: "Contains Match"
    },
    sensitive:{
      button_add_sensitive: "Add Sensitive Word",
      label_type: "Type",
      label_content: "Content",
      alert_message: "SamWaf firewall will block sensitive content",
      type_option_0: "Not Selected",
      type_option_1: "Type 1",
      type_option_2: "Type 2",
      type_option_3: "Type 3"
    },
    systemconfig: {
      new_system_configuration: "Add New System Configuration",
      label_configuration_item: "Configuration Item",
      label_configuration_value: "Configuration Value"
    },
    ssl: {
      alert_message: "SamWaf manages all certificate information",
      label_cert_content: "Certificate file content (.crt file)",
      label_key_content: "Key file content (.key file)",
      button_submit: "Submit",
      alert_success: "Submission successful!",
      alert_error: "Submission failed!",
      label_serial_no: "Certificate serial number",
      label_subject: "Certificate subject",
      label_issuer: "Issuer",
      label_valid_from: "Certificate validity start time",
      label_valid_to: "Certificate validity end time",
      label_expire_time: "Expiration time",
      label_domains: "Applicable domain names for the certificate",
      label_auto_tip: "SamWaf will automatically extract the certificate information from the SSL file storage path below at 3 AM every day and back up the current certificate.",
      label_auto_key_path: "Key File Path",
      label_auto_crt_path: "Crt File Path",
    },
    batchtask: {
      alert_message: "Automatically execute some batch operations, sequentially executed daily at 5 AM",
      label_batch_task_name: "Task Name",
      label_website: "Website",
      label_batch_type: "Task Type",
      label_batch_source_type: "Source Type",
      label_batch_source: "Source Value",
      label_batch_execute_method: "Execution Method",
      label_remark: "Remarks",
      label_btn_manual: "Manual Trigger",
      label_confirm_message: "Are you sure you want to trigger manually?",
      batch_type: {
        add_ipallow: "Add Whitelist IP",
      },
      batch_source_type: {
        local: "Local Path",
        remote: "Remote URL",
      },
      batch_execute_method: {
        append: "Append",
        overwrite: "Overwrite",
      },
    },
    sslorder:{
      alert_message:"Apply for a free certificate, the certificate is valid for 90 days. By default, it will automatically renew 30 days before expiration, or you can manually initiate renewal.",
      label_website:"Host",
      label_apply_status:"Application Status",
      label_result_error:"Error Information",
      label_apply_platform:"Application Platform",
      label_apply_method:"Application Method",
      label_apply_domain:"Application Domain",
      label_apply_email:"Application Mail",
      sslorder_status_type:{
        submitted: "Submitted",
        applying: "In Progress",
        fail:"Failed",
        success: "Successful",
        renewed:"Renewed",
        expired:"Expired",
      },
      sslorder_platform_type:{
        letsencrypt: "Let's Encrypt",
      },
      sslorder_apply_method_type:{
        http01: "File Verification Method",
      },
      error_domain_not_match_method: "Wildcard domains are not allowed under the file verification method",
    },
    ssl_expire:{
      alert_message: "SamWaf domain certificate expiration check, scheduled to check all domains once every day at midnight.",
      button_add_ssl_expire: "New",
      button_check:"Check",
      button_sync_host:"Sync Exist Host",
      domain: "Domain",
      port: "Port",
      valid_to:"Valid Time",
      visit_log: "VisitLog",
      status: "Status",
    },
    syslog: {
      syslog: "System Log",
      label_op_type: "Operation Type",
      label_op_content: "Operation Content"
    },
    rule: {
      button_add_rule: "Add New Rule",
      label_website: "Website",
      label_rule_name: "Rule Name",
      label_rule_version: "Rule Version",
      label_rule_status: "Rule Status",
      alert_message: "SamWaf defense rules can be edited via scripts (preferred) or interface.",
      rule_online_document: "Rule Editing Online Documentation",
      rule_on: "Active",
      rule_off: "Inactive",
      detail: {
        recommend_message: "It is recommended to automatically edit defense scripts by selecting feature values from (Log Details) with one click.",
        jump_visit_log: "Go to Log List",
        jump_online_document: "Defense Rules Online Documentation",
        base_info: "Basic Information",
        rule_name: "Rule Name",
        rule_domain_code: "Protected Website",
        rule_salience: "Protection Level",
        rule_manual: "Protection Arrangement Method",
        rule_dyn_add: "Add New",
        relation: "Relation",
        condition: "Condition",
        built_in_entity_name: "Built-in Entity Name",
        scope: "Scope",
        value_type: "Value Type",
        judgment: "Judgment",
        value: "Value",
        function_judgment_result: "Function Judgment Result",
        assignment: "Assignment",
        assignment_area: "Assignment Area",
        assignment_detail: "Assignment Details",
        method_execution: "Method Execution",
        method_execution_area: "Method Execution Area",
        method_details: "Method Details",
        inner_method: "Built-in Method",
        parameter: "Parameters",
        write_rule: "Rule Arrangement",
        system_variable: "System Variable",
        ui_rule_edit: "UI Arrangement",
        manual_code_rule_edit: "Manual Code Arrangement",
        mf_option_default: "Default",
        method_option: "Perform Action",
        inner_option_host: "Host",
        inner_option_url: "URL",
        inner_option_referrer: "Referrer",
        inner_option_user_agent: "User-Agent",
        inner_option_method: "METHOD",
        inner_option_cookies: "Cookies",
        inner_option_body: "Body",
        inner_option_port: "Request Port",
        inner_option_src_ip: "Visitor IP",
        inner_option_country: "Visitor Country",
        inner_option_province: "Visitor Province",
        inner_option_city: "Visitor City",
        attr_type_text: "Text",
        attr_type_int: "Number",
        judge_equal: "Judge if Equal",
        judge_not_equal: "Judge if Not Equal",
        judge_greater_than: "Judge if Greater Than",
        judge_less_than: "Judge if Less Than",
        judge_greater_than_equal: "Judge if Greater Than or Equal",
        judge_less_than_equal: "Judge if Less Than or Equal",
        judge_contain: "Judge if Contains (Function)",
        judge_has_prefix: "Judge if Starts With (Function)",
        judge_has_suffix: "Judge if Ends With (Function)",
        judge_logic_and: "And",
        judge_logic_or: "Or"
      }
    },
    notice: {
      notice_title: "Notice",
      clear: "Clear",
      set_read: "Mark as Read",
      empty: "No Notifications",
      all: "View All"
    },
    right_setting: {
      page_setting: "Page Configuration",
      theme_mode: "Theme Mode",
      theme_color: "Theme Color",
      navigation_layout: "Navigation Layout",
      element_switches: "Element Switches",
      fix_header: "Fixed Header",
      fix_sidebar: "Fixed Sidebar",
      show_header: "Show Header",
      show_breadcrumb: "Show Breadcrumbs",
      show_footer: "Show Footer",
      use_tabs_router: "Use Multiple Tab Pages",
      footer_position: "Footer Inner Collapse",
      split_menu: "Split Menu (Effective in Mixed Mode)",
      theme_mode_color_light:"Light",
      theme_mode_color_dark:"Dark",
      theme_mode_color_auto:"Auto",
    }
  },
};
